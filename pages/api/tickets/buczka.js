const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (!req.query.payment_intent) res.send("Unauthorized access");
  console.log("KUERY", req.query);
  const td = JSON.parse(req.query.q);
  const transId = req.query.payment_intent;
  console.log(td);
  const build_body = {
    data: {
      owner_name: `${td.details.name} ${td.details.surname}`,
      full_table: td.fullTable,
      list_of_guests: td.tickets,
      stripe_paid: true,
      stripe_transaction_id: transId,
      price: td.price,
      owner_email: td.details.email,
      table_name: td.tableName,
    },
  };

  console.log("URL", process.env.STRAPI_URL + "/api/tickets");
  console.log("BODILY", JSON.stringify(build_body));
  const add_ticket = await fetch(process.env.STRAPI_URL + "/api/tickets", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(build_body),
  });
  const json = await add_ticket.json();
  console.log("RESPONDED", json);
  if (add_ticket.ok) {
    console.log("BODY", res.body);

    res.redirect(process.env.WEBSITE_URL);
  }
}
