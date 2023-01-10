import { useEffect, useState } from "react";
import "./App.css";

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.BASE}/blood_types`;
  },
};

/*
  Scriviamo una app che al caricamento mostri una birra suggerita ed un pulsante,
  al click del pulsante caricare una nuova birra random 
*/

function useRandomBlood() {
  const [randomBlood, setRandomBlood] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewBlood = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.BEERS)
      .then((r) => r.json())
      .then((beer) => {
        console.log({ beer });
        setRandomBlood(beer);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewBlood();
  }, []);

  return { randomBlood, loading, setLoading, error, fetchNewBlood };
}

function App() {
  const { randomBlood, loading, error, fetchNewBlood } = useRandomBlood();

  if (loading) {
    return `Loading... something is going to happen`;
  }

  if (error || !randomBlood) {
    return `Error 404. Please recharge the current page.`;
  }

  const { id, type, rh_factor, group } = randomBlood;

  return (
    <div className="App">
      <div>Check how many blood types exist. It can save your life. </div>
      <h1>
        Blood Id:{id} / Type: {type}
      </h1>
      <h2>
        Rh Factor: {rh_factor} / Group: {group}
      </h2>

      <button onClick={() => fetchNewBlood()}>
        Donate Blood. Save Lives.💘🩸{" "}
      </button>
    </div>
  );
}
// function Lottery(props) {
//   const { word } = props;

//   const [number, setNumber] = useState();
//   const pickANumber = () => Math.round(Math.random() * 91); // round, ceil, floor

//   const lotteryButtonClick = () => {
//     const newNumber = pickANumber();
//     setNumber(newNumber); // setTimeout(() => { setState()... }, 0);
//     console.log(
//       `hai cliccato sul lottery button, numero estratto ${newNumber}!`
//     );
//   };

//   return (
//     <div>
//       <h1>Lotteria</h1>
//       <p>Numero estratto: `{number}`</p>
//       <LotteryButton
//         wasDraw={Number.isInteger(number)}
//         clickHandler={lotteryButtonClick}
//       />
//       {/* <p>Somma di numeri</p>
//       <Sum a={2} b={3} word={word} /> */}
//     </div>
//   );
//   function LotteryButton(props) {
//     const { clickHandler, wasDraw, ...attributes } = props;

//     console.log(clickHandler);

//     return (
//       <button disabled={!!wasDraw} onClick={clickHandler} {...attributes}>
//         {!!wasDraw ? "Numero estratto" : "Clicca per estrarre un numero"}
//       </button>
//     );

//     return (
//       <div className="App">
//         <Lottery word={mySecret} />
//       </div>
//     );
//   }
// }

export default App;
