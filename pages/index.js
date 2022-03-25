import isSessionValid from "../utils/isSessionValid";

export default function Index() {
  return null;
}

export async function getServerSideProps({ req, res }) {
  return {
    redirect: {
      destination: (await isSessionValid(req.headers.cookie))
        ? "/home"
        : "/login",
    },
  };
}
