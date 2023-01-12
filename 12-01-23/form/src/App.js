import "./App.css";
import { useState } from "react";
import { Counter } from "./counter/components/counter/Counter";
import { Bank } from "./fetch/components/Bank";

function ComponentSelector(props) {
  const { selectChangeHandler } = props;

  return (
    <form>
      <select defaultValue={""} onChange={selectChangeHandler}>
        <option disabled value="">
          Select a component to render
        </option>
        <option value="counter">Counter</option>
        <option value="bank">Random bank type</option>
      </select>
    </form>
  );
}

function DefaultComponent() {
  return <div>NO component selected!!</div>;
}

const componentMap = {
  counter: Counter,
  bank: Bank,
  default: DefaultComponent,
};

function App() {
  const [componentToRender, setComponentToRender] = useState("default");

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
    </div>
  );
}

export default App;
