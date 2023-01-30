import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserList() {
  const [data, setData] = useState([]);
  let { user } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [user]);

  const listItems = data.map((item) => (
    <div className="contenitore">
      <li key={item.id}>
        {item.firstName} {item.lastName}
      </li>
    </div>
  ));

  return <ul>{listItems}</ul>;
}

export default UserList;
