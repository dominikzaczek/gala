import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

import CheckoutForm from "./CheckoutForm";
import "./tickets.module.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({ props }) {
  const [clientSecret, setClientSecret] = useState("");
  const { query } = useRouter();
  const parsed = JSON.parse(query.q);
  console.log(parsed);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  });

  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="info-container-no-anim">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm query={JSON.stringify(parsed)} />
        </Elements>
      ) : (
        "Loading honey!"
      )}
    </div>
  );
}
