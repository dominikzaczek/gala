import Logo from "../../public/goldenLogo.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <div style={styles.container} className="container">
      <div>
        <Image src="/gala_logo.png" alt="Logo" width="186px" height="90px" />
      </div>
      <div className="menu">Home Auctions Tickets The venue Sponsors</div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    zIndex: 900,
    top: 20,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  menu: {
    color: "#CDB18C",
    fontFamily: "Futura PT",
    fontSize: 30,
    fontVariant: "book",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};
