import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Early return if Stripe.js has not yet loaded or if elements do not exist
        if (!stripe || !elements) {
            console.log('Stripe has not loaded yet.');
            return;
        }

        // Get a reference to a mounted CardElement.
        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error('[error]', error);
                alert(error.message);
                return; // Stop further processing if there is an error
            }

            console.log('PaymentMethod:', paymentMethod);
            // Optionally, handle the server-side confirmation
            const response = await fetch('http://localhost:8000/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: 1000 }) // Ensure this amount is the same as what you want to charge
            });
            const responseData = await response.json();
            console.log(responseData);
            // Handle any errors from your server
            if (!response.ok) {
                throw new Error(responseData.message || 'Failed to create payment intent');
            }
            alert('Payment successful!');
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};


