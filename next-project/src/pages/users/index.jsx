import styles from "../../styles/Users.module.scss";
const Users = ({ users }) => {
  return (
    <div className={styles.Users}>
      <h1>USER LIST</h1>
      <div className={styles.usersList}>
        {users &&
          users.map((user) => (
            <h3 key={user.id}>
              First Name: {user.firstName} // Last Name: {user.lastName}
            </h3>
          ))}
      </div>
    </div>
  );
};
export default Users;

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return {
    props: {
      users: data.users,
    },
  };
}
