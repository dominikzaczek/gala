import React from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getSession } from "next-auth/react";

import CheckoutForm from "../../components/CheckoutForm";
import "./tickets.module.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({ props }) {
  const router = useRouter();

  if (!router.query.token) {
    return null;
  }
  console.log("RUTER", router.query.token)
  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret: router.query.token,
    appearance,
  };
  const query = router.query.details;
  return (
    <div className="info-container-no-anim">
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm query={router.query.details} />
      </Elements>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: {}
  };
}
