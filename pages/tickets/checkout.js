const Checkoutero = () => {
  const { query } = useRouter();
  console.log(query.query);
  const parsed = JSON.parse(query.query);
  console.log(parsed);
  return <p>{JSON.stringify(query)}</p>;
};

export default Checkoutero;
