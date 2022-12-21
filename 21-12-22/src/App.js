import "./App.css";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

function App() {
  const customColor = "red";
  const customColorTwo = "orange";

  return (
    <div className="App">
      <Text as="h1" style={{ color: customColor }} variant="title">
        Hello world!
      </Text>
      {/* {Button(propsButton1)} */}
      {/* <Button label={propsButton2.label} 
              title={propsButton2.title} /> */}
      <Button
        aria-label="Non toccarmi!"
        variant="primary"
        className="no-border"
        onClick={() => console.log("E tu mi tocchi?")}
      >
        Non premere!
      </Button>
      <Button
        aria-label="Non toccarmi ti ho detto!"
        variant="secondary"
        className="no-border"
        onClick={() => console.log("MA SCUSA!!")}
      >
        Se mi tocchi di nuovo impazzisco!
      </Button>
      <Button
        aria-label="Non toccarmi!"
        variant="third"
        className="no-border"
        onClick={() => console.log("FARO' FINTA DI NON AVER VISTO!!")}
      >
        Non te lo dirò un'altra volta!
      </Button>
      <Text as="h3" style={{ color: customColorTwo }} variant="title">
        Testo Polimorfico
      </Text>
    </div>
  );
}

export default App;
