import logo from "./logo.svg";
import "./App.css";
import { Beers } from "./fetch/components/beers/Beers";
import { BloodTypes } from "./fetch/components/bloodtypes/BloodTypes";
import { Users } from "./fetch/components/users/Users";
import { Bank } from "./fetch/components/bank/Bank";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="containerSection">
        <section>
          <Bank />
        </section>
        <section>
          <Beers />
        </section>
        <section>
          <BloodTypes />
        </section>
        <section>
          <Users />
        </section>
      </div>
    </div>
  );
}

export default App;
