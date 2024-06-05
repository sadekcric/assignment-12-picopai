import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import SectionTitle from "../../Component/SectionTitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  return (
    <div className="space-y-10 lg:w-1/2 mx-auto">
      <SectionTitle
        title={"Payment Stripe"}
        description={
          "Securely purchase coins using Stripe. Select a coin package, proceed to payment, and instantly receive coins in your account."
        }
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
