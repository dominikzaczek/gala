export default function AllTickets({ content }) {
  console.log("CONTENT", content);
  return (
    <div className="info-container-no-anim">
      {/* {content.map((tickets, key) => {
            return <div key={key}>
                <h4>{tickets.attributes.owner_name}</h4>
                <h5>{tickets.attributes.full_table ? `Full table bought. Table name: ${tickets.attributes.table_name}` : `Number of tickets bought: ${tickets.attributes.list_of_guests.length}`}</h5>
                {tickets.attributes.list_of_guests.map((guest, ajdi) => {
                    if(guest.teacher) return <p className="golder" key={ajdi}>Teacher ticket</p>
                   return <div key={ajdi}><p>Name: {guest.fullName}<br />Table preference: {guest.tableName} <br />Diet: {guest.diet}</p></div>
                })}
                <hr />
            </div>
        })} */}

      <h1>List of guests unavailable</h1>
    </div>
  );
}

export async function getServerSideProps({ context }) {
  const fetchit = await fetch(
    process.env.STRAPI_URL +
      "/api/tickets?pagination[page]=1&pagination[pageSize]=100",
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );

  if (fetchit.ok) {
    const content = await fetchit.json();
    return {
      props: {
        content: content.data,
      },
    };
  }
  throw new Error("Could not fetch frontPage data.");
}
