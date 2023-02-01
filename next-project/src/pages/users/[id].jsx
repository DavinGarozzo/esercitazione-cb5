import Link from "next/link";
import { useRouter } from "next/router";

const Users = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>Hello! Im the User dynamic page! {id}</h1>
      <h2>
        <Link href="/users">Back to User list</Link>
      </h2>
    </>
  );
};

export default Users;
