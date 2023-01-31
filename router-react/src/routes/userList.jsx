// import { GET } from "../utils/api";
// import { useState, useEffect } from "react";
// import UserCard from "../components/UserCard";
// import styles from "./styles/users.module.scss";

// export default function Users() {
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     GET("users?limit=10").then(({ users }) => setUserList(users));
//   }, []);

//   return (
//     <>
//       <div className={styles.Users}>
//         {userList.map((user) => (
//           <UserCard userData={user} key={user.id} />
//         ))}
//       </div>
//     </>
//   );
// }
