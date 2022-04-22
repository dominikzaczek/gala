// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { price, details, tickets, fullTable, tableName } = req.body;
  console.log("PRAJSA 2", price);
  if(!price) {
    res.redirect(
      process.env.NEXT_PUBLIC_WEBSITE_URL + "/tickets/confirmation?error=price_error"
    );
  }
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
    description: fullTable
      ? `${details.name} ${details.surname}, a table: ${tableName}`
      : `${details.name} ${details.surname}, ${tickets.length} tickets `,
  });
  
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
