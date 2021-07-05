import React, { useRef, useEffect } from 'react';

export default function Paypal(props) {
  const { totalAmount, handleCleanCart } = props;
  const paypal = useRef();
  const handlePaypal = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'CAD',
                  value: totalAmount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          handleCleanCart();
          console.log(order);
        },
        onError: err => {
          console.log(err);
        },
      })
      .render(paypal.current);
  };
  useEffect(() => {
    handlePaypal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
