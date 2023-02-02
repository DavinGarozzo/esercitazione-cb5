import Gallery from "@/components/gallery/Gallery";
import styles from "../../styles/Users.module.scss";
import Link from "next/link";
import Confetti from "react-confetti";

import React from "react";

const Users = ({ users }) => {
  return (
    <main>
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
        <footer>
          <div className={styles.footer}>
            <Link href="/">home</Link>
          </div>
        </footer>
      </div>
      <Confetti
        width={1920}
        height={1080}
        recycle={false}
        numberOfPieces={2500}
        friction={1}
      />
    </main>
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
