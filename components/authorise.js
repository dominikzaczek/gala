import Image from "next/image";
import React from "react";
import GoldenLogo from "../public/goldenLogo.png";
const Authorise = () => {
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const handlePasswordSent = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fetchConfirmation = await fetch("./api/authorise", {
      method: "POST",
      body: password,
    });

    if (fetchConfirmation.ok) {
      const json = await fetchConfirmation.json();
      if (json.success) setLoading(false);
      console.log("JSON", json);
      document.cookie = `jwt=${json.data.jwt}`;
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
      <form onSubmit={handlePasswordSent}>
        <input
          type="password"
          placeholder="Your password"
          style={{
            fontSize: "12px",
            padding: 15,
            borderRadius: "5px",
            width: 300,
            border: 0,
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Authorise;
