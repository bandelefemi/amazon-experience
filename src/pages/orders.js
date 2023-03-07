import { getSession, signIn, useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'
import db from '../../firebase'
import moment from 'moment'
import Order from '../components/Order'

const Orders = ({orders}) => {

    const {data: session} = useSession()

    // console.log(orders)
  return (
    <div>
      <Header />

      <main className=' max-w-screen-lg mx-auto p-10'>
        <h1 className=' text-2xl border-b mb-3 pb-1 border-yellow-400'>Your order</h1>
        <div>
            {session? (<p>{orders.length} orders</p>) : 
            (<button className=' button' onClick={signIn}>Sign in to see your orders</button>) }
        </div>
        <div>
            {orders?.map(({id, amount, items, timestamp, images})=> (
                <Order 
                    key={id}
                    id={id}
                    amount={amount}
                    items={items}
                    timestamp={timestamp}
                    images={images} />
            ))}
        </div>
      </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

    const session = await getSession(context)

    if (!session) {
        return {
            props: {}
        }
    };

    const stripeOrders = await db
        .collection("users")
        .doc(session.user.email)
        .collection("orders")
        .orderBy("timestamp", "desc")
        .get()

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (await stripe.checkout.sessions.listLineItems(order.id, {
                limit: 100
            })).data
        }))
    )

    return {
        props: {
            orders
        }
    }
}
