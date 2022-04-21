const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import sgMail from "@sendgrid/mail";
async function sendEmail(transaction) {
  console.log("IS FULL?", transaction.full_table);
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: transaction.owner_email,
      from: "contact@glendowerpa.uk", // Use the email address or domain you verified above
      subject: "Your tickets to gala!",
      templateId: transaction.full_table
        ? "d-a093d6dd2c1041f5a75d95b92e3b917a"
        : "d-1cc02486c00d4a318940081142b7ac0d",
      dynamic_template_data: {
        subject: "Welcome to the Gala!",
        user: {
          name: transaction.owner_name,
          transId: transaction.stripe_transaction_id,
          price: transaction.price.toString(),
          tickets: transaction.list_of_guests,
          tableName: transaction.table_name,
        },
      },
    };
    //ES6
    sgMail.send(msg).then(
      () => {
        console.log("Email sent");
      },
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
    return true;
  } catch (e) {
    console.error(e);
  }
  return "Error";
}
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

  if (add_ticket.ok) {
    const json = await add_ticket.json();
    console.log("ADD TICKET OK", json);
    console.log("build_body", build_body.data);
    sendEmail(build_body.data);
    res.redirect(process.env.NEXT_PUBLIC_WEBSITE_URL + "/tickets/confirmation");
  }
}
