import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoint";

export function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BLOOD_TYPES);
  if (loading) return `LOADING...`;
  if (error) return `ERROR PLEASE RECHARGE THE CURRENT PAGE`;
  const { id, type, rh_factor, group } = data;
  return (
    <section>
      {}
      <div>Check how many blood types exist. It can save your life. </div>
      <h1>
        Blood Id:{id} / Type: {type}
      </h1>
      <h2>
        Rh Factor: {rh_factor} / Group: {group}
      </h2>

      <button onClick={refetch}>REFETCH "NUOVA CHIAMATA"</button>
      <hr />
    </section>
  );
}
