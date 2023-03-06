const stripe = require('stripe') (process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const {items, email} = req.body

    const transformedItems = items.map(item => ({
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                description: item.description,
                // images: item.image

                images: [item.image]
            }
        },
        quantity: 1,
    }))

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        // shipping_rates: ['shr_1MiHSZAOdhcSdmUeByvleIhI'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        success_url: `http://localhost:3000`,
        cancel_url: `http://localhost:3000/checkout`,
        metadata: {
            email,
        }

    })

    // res.redirect(303, session.url)

    res.status(200).json({ id: session.id})

    // console.log(email)
    // console.log(items)
}