import Logo from "../../public/goldenLogo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div style={styles.container} className="container mb-4">
      <div>
        <Link href="/" passHref>
          <Image src="/gala_logo.png" alt="Logo" width="186px" height="90px" />
        </Link>
      </div>
      {/* <div className="menu d-none d-lg-block">
        Home Auctions Tickets The venue Sponsors
      </div> */}
      <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL + "/tickets"} passHref>
        <div
          className="menu d-block d-lg-none d-flex"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "./tickets")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13Z" />
          </svg>
        </div>
      </Link>
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
