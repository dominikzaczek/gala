import Navbar from "./navbar";
import Footer from "./footer";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://res.cloudinary.com/dap7rb3ky/image/upload/v1647350369/The_Londoner_The_Residence_Drawing_Room_YP_1_de86e18393.jpg)",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          backgroundSize: `100vw 100vh`,
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">{session && <Navbar />}</div>
          <div className="row">{children}</div>
        </div>
        {session && <Footer />}
      </div>
    </>
  );
}
