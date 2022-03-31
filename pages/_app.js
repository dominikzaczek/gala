import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";

function MyApp(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
    returning,
  } = props;
  return (
    <SessionProvider session={session}>
      <Layout session={session}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
