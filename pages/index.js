import { useSession, getSession } from "next-auth/react";

import Login from "../components/Login";
import Home from "../components/Home";

export default function Index({ content }) {
  const { data: session } = useSession();

  if (session) {
    return <Home content={content.data} />;
  }

  return <Login />;
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (session) {
    const request = await fetch(
      process.env.STRAPI_URL + "/api/front-page?populate=*",
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      }
    );

    if (!request.ok) {
      throw new Error('Could not retrieve content.');
    }

    return {
      props: {
        content: await request.json(),
        session,
      },
    };
  }

  return { props: {} };
}
