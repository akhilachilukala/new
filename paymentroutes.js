



// Create a payment intent
// On your backend (e.g., Node.js with Express)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body; // Amount should be in the smallest currency unit (e.g., cents)

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            description: 'Description of the product/service being purchased'
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
