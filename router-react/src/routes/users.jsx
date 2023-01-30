import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/users.module.scss";

export default function Users() {
  let { user } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  const onClickPrevBtn = () => navigate(`/users/${--user}`);
  const onClickNextBtn = () => navigate(`/users/${++user}`);

  return (
    <div className={styles.User} id={userData.id}>
      <div className={styles.content}>
        <h3>First name: {userData.firstName}</h3>
        <h3>Last name: {userData.lastName}</h3>
        <h4>Age: {userData.age}</h4>
        <h4>Phone number: {userData.phone}</h4>
      </div>
      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>

        <button onClick={onClickNextBtn}>Next</button>
      </div>
    </div>
  );
}
