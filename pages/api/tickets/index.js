const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log("BODLY", req.body)
  if (req.body) {
    const { price: priceRaw, tickets: ticketsRaw, fullTable, tableName, ...details } = req.body;
    if (!priceRaw) {
      return res.status(500).send();
    }
    const price = parseInt(priceRaw);
    const tickets = JSON.parse(ticketsRaw);
    const calculatedPrice = parseInt(fullTable ? 1750 : tickets.length * price);

    // Check the price is correct - otherwise, there's either an issue with the clientside code or the price has been tampered with
    if (calculatedPrice !== price) {
      console.error(`Calculated price (£${calculatedPrice}) does not match price passed from client (£${price})`);
      throw new Error('Unknown error has occurred.');
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
    const stringified = JSON.stringify({ price, tickets, fullTable, tableName, details })
    const binaryData = Buffer.from(stringified, 'utf-8')
    res.redirect(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/tickets/ticketero?token=${
        paymentIntent.client_secret
      }&details=${binaryData}`
    );
  } else {
    return res.status(500).send();
  }
}
