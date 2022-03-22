import Link from "next/link";

const Tickets = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        Please, be prepared to fill the guest list when buying the tickets. This
        includes their names, surnames and dietary requirements.
      </div>
      <div className="row justify-content-around mt-4">
        <Link href="./tickets/single" passHref>
          <div
            className="col-lg-4 info-container d-flex align-items-end"
            style={styles.menuContainer}
          >
            <h2>Buy single tickets</h2>
          </div>
        </Link>
        <Link href="./tickets/table" passHref>
          <div
            className="col-lg-4 info-container d-flex align-items-end"
            style={styles.menuContainer}
          >
            <h2>Buy a table</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
const styles = {
  menuContainer: {
    minHeight: 300,
    cursor: "pointer",
  },
};
export default Tickets;
