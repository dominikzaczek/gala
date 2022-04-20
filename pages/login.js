import Image from "next/image";
import React from "react";
import GoldenLogo from "../public/goldenLogo.png";
import { getProviders, signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

const Authorise = ({ providers }) => {
  const [password, setPassword] = React.useState("");

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://res.cloudinary.com/dap7rb3ky/image/upload/v1647350369/The_Londoner_The_Residence_Drawing_Room_YP_1_de86e18393.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        backgroundSize: `100vw 100vh`,
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 300,
          height: 300,
          marginBottom: 30,
        }}
      >
        <Image src={GoldenLogo} alt="Glendower PA logo" layout="fill" />
      </div>
      <input
        type="password"
        style={{ marginBottom: 5, border: 0, fontSize: 15, padding: 10 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => signIn("credentials", { password })}
        className="buttonka"
      >
        Sign in to view the page
      </button>
      {/* <form onSubmit={handlePasswordSent} className="d-flex flex-column">
        <input
          type="password"
          placeholder="Your password"
          style={{
            fontSize: "12px",
            padding: 15,
            width: 300,
            border: 0,
            color: "black !important",
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="buttonka" style={{ marginTop: "1em" }}>
          Send
        </button>
      </form> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { providers },
  };
}
export default Authorise;
