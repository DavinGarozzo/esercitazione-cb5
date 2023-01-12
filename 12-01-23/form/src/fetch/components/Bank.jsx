import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoint";
export function Bank() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BANKS);
  if (loading) return `LOADING...`;
  if (error) return `ERROR PLEASE RECHARGE THE CURRENT PAGE`;
  const { id, bank_name } = data;

  return (
    <section>
      <div>Check a Bank </div>
      <h1>
        Id:{id} / Bank Name: {bank_name}
      </h1>

      <button onClick={refetch}>REFETCH "NUOVA CHIAMATA"</button>
      <hr />
    </section>
  );
}
