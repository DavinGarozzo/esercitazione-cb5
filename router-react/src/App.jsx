import { Link } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Hellooo!!!</h1>
      <a href="/post">POST</a>
      <br />
      <Link to="/user">USER</Link>
    </div>
  );
}

export default App;
