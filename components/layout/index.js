import Navbar from "./navbar";
import Footer from "./footer";
import React from "react";
import Authorise from "../../components/authorise";
export default function Layout({ siteProps, children }) {
  const [secured, setSecured] = React.useState(true);
  React.useEffect(() => {
    const authorise = async () => {
      console.log("AUTORYZUJE");
      const cuki = document.cookie;
      const majka = cuki.trim().split("=");
      const fecznij = await fetch("./api/authorise", {
        method: "POST",
        body: majka[0],
      });
      const respondka = await fecznij.json();
      console.log("RES", respondka);
      if (respondka.success) {
        setSecured(true);
      }
    };
    authorise();
  });
  if (!secured) return <Authorise />;
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
          <div className="row">
            <Navbar />
          </div>
          <div className="row">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fetchit = await fetch("./api/front-page", {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const content = await fetchit.json();
  return {
    props: {
      content,
    },
  };
}
