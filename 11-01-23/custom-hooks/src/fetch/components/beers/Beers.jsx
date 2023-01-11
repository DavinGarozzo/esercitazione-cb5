import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoint";
export function Beers() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BEERS);
  if (loading) return `LOADING...`;
  if (error) return `ERROR PLEASE RECHARGE THE CURRENT PAGE`;
  const { id, name, brand } = data;
  return (
    <section>
      <div>Check how many beers exist. </div>
      <h1>Beer Id:{id}</h1>
      <h2>
        Beer Name: {name} / Beer Brand: {brand}
      </h2>
      <button onClick={refetch}>REFETCH "NUOVA CHIAMATA"</button>
      <hr />
    </section>
  );
}
