import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useGetUser from "../../Hooks/useGetUser";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecrets, setClientSecret] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [, , refetch] = useGetUser();

  // const [transactionId, setTransactionId] = useState("");

  const payablePrice = localStorage.getItem("purchaseAmount");

  useEffect(() => {
    if (payablePrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: payablePrice,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          console.log(res.data.clientSecret);
        });
    }
  }, [axiosSecure, payablePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    //confirm Payment

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecrets, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        const payment = {
          email: user.email,
          name: user.displayName,
          price: parseInt(payablePrice),
          date: new Date(),
          transactionId: paymentIntent.id,
        };

        const res = await axiosSecure.post("/payment", payment);
        if (res.data?.insertedId) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Coin Purchase Done. Check Your Balance!",
            showConfirmButton: false,
            timer: 3000,
          });

          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  return (
    <div className="bg-customGray px-5 py-8 lg:px-10">
      <form className="container mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                backgroundColor: "#fff",
                lineHeight: "40px",
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center mt-10">
          <button
            className="bg-customPrimary text-customSecondary px-10 rounded-md py-3"
            type="submit"
            disabled={!stripe || !clientSecrets}
          >
            {" "}
            Pay
          </button>
        </div>
        <p className="text-[#be0d0d] font-semibold">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
