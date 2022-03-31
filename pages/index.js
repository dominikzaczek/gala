import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Index({ authorised }) {
  const router = useRouter();

  useEffect(() => {
    if (authorised) {
      router.push("./home");
    } else {
      router.push("./api/auth/signin");
    }
  });
  return "Loading";
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/home",
      },
    };
  } else {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
}
