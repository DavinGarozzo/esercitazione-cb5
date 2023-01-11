import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoint";
export function Users() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.USERS);
  if (loading) return `LOADING...`;
  if (error) return `ERROR PLEASE RECHARGE THE CURRENT PAGE`;
  const { id, first_name, last_name } = data;
  return (
    <section>
      <div>Check an user! </div>
      <h1>User Id:{id}</h1>
      <h2>
        First Name: {first_name} / Last name: {last_name}
      </h2>
      <button onClick={refetch}>REFETCH "NUOVA CHIAMATA"</button>
      <hr />
    </section>
  );
}
