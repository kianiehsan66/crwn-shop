import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const normalPrice = price * 100;
    const publishableKey = 'pk_test_51HuzTLAO4FGqmvWo8T318spWpOLHEXKUp7coouOrEzNKB3B4oUHnKjfdsiwOn6JY1HZAdnwrK0F6WHKER8vmVpM300s36L3lr8';

    const onToken = token => {
        console.log(token);
    }
    return (
        <StripeCheckout
            label="PAY"
            billingAddress
            shippingAddress
            description={`total is $${price}`}
            amount={normalPrice}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;