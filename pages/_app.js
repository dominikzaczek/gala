import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/layout";

function MyApp(props) {
  const { Component, pageProps, returning } = props;
  return (
    <Layout secured={pageProps.secured} siteProps={returning}>
      <Component {...pageProps} />
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   console.log("FETCHING");
//   console.log(`Building slug: ${context.params.slug}`);
//   const details = await fetch(
//     process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/hello",
//     {
//       method: "GET",
//     }
//   );

//   const propsies = await details.json();
//   const returning = propsies.data;
//   return {
//     props: { returning }, // will be passed to the page component as props
//   };
// }

export default MyApp;
