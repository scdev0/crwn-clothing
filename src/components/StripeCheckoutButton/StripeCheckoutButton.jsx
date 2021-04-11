import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe prices are in cents
  const publishableKey =
    'pk_test_51If8LEFDO5WY1EUj7z2toG89jPJWvunZXNPz5jI1YQCmtlqivhZrYNvax2WL5X1fTpMbUADmPg2pkZw2M5Hs9bXa00dNcQEbQI';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
