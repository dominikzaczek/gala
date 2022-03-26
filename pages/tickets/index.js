import Link from "next/link";

const Tickets = ({ props }) => {
  return (
    <div className="container">
      <div className="row justify-content-center golder">
        <div className="col-lg-11 info-container-no-anim">
          To complete your purchase, you will be required to provide names of
          attendees together with any dietary requirements and either a table
          name that you have agreed on with other attendees or a year group so
          we can allocate you a table with other parents in your year where
          possible.
        </div>
      </div>
      <div className="row justify-content-around mt-4">
        <Link href="./tickets/table" passHref>
          <div
            className="col-lg-7 info-container d-flex align-items-end mb-4"
            style={styles.menuContainer}
          >
            <h2>Buy a table</h2>
          </div>
        </Link>
        <Link href="./tickets/single" passHref>
          <div
            className="col-lg-4 info-container d-flex align-items-end"
            style={styles.menuContainer}
          >
            <h2>Buy single tickets</h2>
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
