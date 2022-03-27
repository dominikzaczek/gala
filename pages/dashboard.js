export default function Dashboard() {
  return <p>Bredzisz</p>;
}

export async function getServerSideProps({ req, res }) {
  const fetchit = await fetch(process.env.STRAPI_URL + "/api/tickets", {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  if (fetchit.ok) {
    const content = await fetchit.json();
    console.log(content);
    return {
      props: {
        content: content.data,
      },
    };
  }
  throw new Error("Could not fetch frontPage data.");
}
