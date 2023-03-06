// import { buffer } from "micro/types/src/lib";
import { buffer } from "micro";

import * as admin from 'firebase-admin'


// secure a connection tto firebase from tthe backend

const serviceAccount = require('../../../permissions.json')

const app = !admin.apps.length? admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
}) : admin.app()


// establish connection to sttripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {

    console.log('fulfilling order', session)
    return app
        .firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
            amount: session.amount_total / 100,
            // images: session.product_data.images,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        })
        .then(()=> {
            console.log(`SUCCESS!! Order ${session.id} has been added to the database`)
        })
}

export default async (req, res) => {
    if (req.method === "POST") {
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event;


        // verify that tthe eventt posted came from stripe

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            console.log('ERRORRR!!', err.message)
            return res.status(400).send(`webhook error: ${err.message}`)
        }


        // handle the checkout.session.completed event

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;

            // fulfill tthe order

            return fulfillOrder(session)
                .then(()=> res.status(200))
                .catch((err)=> res.status(400).send(`webhook error: ${err.message}`))

        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}