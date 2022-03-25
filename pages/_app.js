import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/layout";

function MyApp({ Component, pageProps, returning }) {
  return (
    <Layout siteProps={returning}>
      <Component {...pageProps} />;
    </Layout>
  );
}

export async function getStaticProps(context) {
  console.log("FETCHING");
  const details = await fetch(process.env.WEBSITE_URL + "/api/hello", {
    method: "GET",
  });

  const propsies = await details.json();
  const returning = propsies.data;
  return {
    props: { returning }, // will be passed to the page component as props
  };
}
export default MyApp;
