// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { price, details, tickets } = req.body;
  console.log("PRAJSA 2", price);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
    description: `${details.name} ${details.surname}, ${tickets.length} tickets `,
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
