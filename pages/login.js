import Image from "next/image";
import React from "react";
import GoldenLogo from "../public/goldenLogo.png";

const Authorise = () => {
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const handlePasswordSent = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fetchConfirmation = await fetch(
      process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/authorise",
      {
        method: "POST",
        body: password,
      }
    );
    setLoading(false);
    const json = await fetchConfirmation.json();
    if (json.success) {
      window.location.href = "/home";
    } else {
      return; // TODO: Error failed
    }
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);
  if (loading)
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
          className="spinner-border golder"
          style={{ width: 200, height: 200 }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
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
      <form onSubmit={handlePasswordSent} className="d-flex flex-column">
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
      </form>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  return {
    props: {
      secured: false,
    },
  };
}
export default Authorise;
