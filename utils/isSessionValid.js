// TODO: Remove the console log for live
export default async function isSessionValid(token) {
  console.log("Checking session is valid....");
  const fecznij = await fetch(
    process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/authorise/authorised",
    {
      method: "POST",
      body: token,
    }
  );
  const respondka = await fecznij.json();

  return respondka.success;
}
