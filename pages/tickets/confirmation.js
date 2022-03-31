import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoldenLogo from "../../public/goldenLogo.png";

const Confirmation = ({ providers }) => {
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
          <h1>Purchase confirmed</h1>
          <p>
            Thank you for buying your tickets. You will receive two emails - one
            with your payment confirmation and one with the ticket. Please keep
            both for the record.{" "}
          </p>
          <Link href="/home" passHref>
            <span className="buttonka">Go back to the main page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   return {
//     props: { providers },
//   };
// }
export default Confirmation;
