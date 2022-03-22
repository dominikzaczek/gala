import Image from "next/image";
export default function Footer() {
  return (
    <div className="container-fluid shadow" style={styles.container}>
      <div className="container">
        <Image
          src="/gala_logo.png"
          alt="Gala Logo"
          width="186px"
          height="90px"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "black",
    minHeight: 100,
    padding: "1em",
  },
};
