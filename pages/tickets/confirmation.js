import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { signOut } from "next-auth/react";

import GoldenLogo from "../../public/goldenLogo.png";

const Confirmation = ({ error, transaction }) => {
  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://res.cloudinary.com/dap7rb3ky/image/upload/v1647350369/The_Londoner_The_Residence_Drawing_Room_YP_1_de86e18393.jpg)",
        backgroundSize: "cover",

        display: "flex",
        backgroundSize: `100vw 100vh`,
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row justify-content-center">
        <div
          style={{ backgroundColor: "black" }}
          className="col-12 col-lg-5 d-flex flex-column align-items-center p-5"
        >
          <div
            style={{
              position: "relative",
              width: 200,
              height: 200,
              marginBottom: 30,
            }}
          >
            <Image src={GoldenLogo} alt="Glendower PA logo" layout="fill" />
          </div>
          {error ? (
            <>
              <h1>Something went wrong</h1>
              <p></p>
              <p>
                Please contact us on <b>contact@glendowerpa.uk</b> providing the
                following error code <i>{error}</i>, the number of tickets you
                purchased and the last four digits of your card.
              </p>
            </>
          ) : (
            <>
              <h1>Purchase confirmed</h1>
              <p>
                Thank you for buying your tickets. You should receive the payment confirmation email from our payments operator, Stripe. 
                Also, please keep this reference number</p> <h4>{transaction}</h4> <p>for your records in case you don&apos;t receive the ticket confirmation email.</p>
            </>
          )}
          <Link href="/" passHref>
            <span className="buttonka">Go back to the main page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const error = context.query?.error || null;
  const transaction = context.query?.transaction || null
  return {
    props: { error, transaction },
  };
}
export default Confirmation;
