import router from 'next/router';
import { useCallback } from 'react';
import useRazorpay, { RazorpayOptions } from 'react-razorpay';
import { IRazorPaySuccessResponse } from 'types/razorPay';

export default function Test() {
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(async () => {
    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_CLIENT_ID,
      amount: '3000',
      currency: 'INR',
      name: 'Pep',
      description: 'Pep.live',
      image: 'https://example.com/your_logo',
      order_id: 'order_JciQOZzXERJhbb',
      handler: (response: IRazorPaySuccessResponse) => {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
        if (razorpay_order_id && razorpay_payment_id && razorpay_signature) {
          router.replace(`/success?oi=${razorpay_order_id}&pi=${razorpay_payment_id}&sn=${razorpay_signature}`);
        } else {
          alert('Booking failed, please try again later');
        }
      },
      prefill: {
        name: 'Piyush Garg',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}
