import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ query }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const stringed = query.toString('base64')
  const parsed = JSON.parse(stringed)
  const email = parsed.details.email;
   
  if (!stripe || !elements) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url:
          process.env.NEXT_PUBLIC_WEBSITE_URL +
          "/api/tickets/buczka?details=" +
          query,
        receipt_email: email,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    }

    setIsLoading(false);
  };
  return (
    <div className="container info-container-no-anim">
      <h2>Please pay for your tickets</h2>
      <div className="row p-3">
        <div className="col-lg-6">
          <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            {isLoading && "It is loading..."}
            <button
              disabled={isLoading || !stripe || !elements}
              id="submit"
              className="buttonka mt-3"
            >
              <span id="payment_button">
                {isLoading ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
          </form>
        </div>
        <div className="col-lg-6">
          <h2>Order details</h2>
          <p className="m-0">
            Your name: {parsed.details.name} {parsed.details.surname}
          </p>
          <p className="m-0">Email: {parsed.details.email}</p>
          <p className="m-0">
            Address: {parsed.details.addressLine1}, {parsed.details.postCode}{" "}
            {parsed.details.city}
          </p>
          <h4 className="mt-5">
            {parsed.fullTable
              ? `Your table ${parsed.tableName}`
              : `Your tickets (${parsed.tickets.length})`}
          </h4>
          {parsed.tickets.map((ticket, key) => {
            return (
              <div key={key}>
                <h5 className="m-0">Name: {ticket.fullName}</h5>
                {!parsed.fullTable && (
                  <p className="m-0">Table preferences: {ticket.tableName}</p>
                )}
                {ticket.teacher && (
                  <p className="m-0" style={{ color: "white" }}>
                    This ticket is for a teacher
                  </p>
                )}
              </div>
            );
          })}
          <h1 className="mt-5">Total: &pound;{parsed.price}</h1>
        </div>
      </div>
    </div>
  );
}
