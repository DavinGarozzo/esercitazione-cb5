import { Link } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello!</h1>
      <a href="/contacts">Vai ai contatti</a>
      <br />
      <Link to="/contacts">Vai a contatti</Link>
    </div>
  );
}

export default App;
