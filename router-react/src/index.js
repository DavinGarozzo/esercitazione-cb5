import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./routes/users";
import UserList from "./routes/userList";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Root />,
  },
  {
    path: "/user",
    element: (
      <h1>
        Hello buddy! <br></br>This is the user page, please add "s" after 'user'
        in the search bar to see the full list of our USERS
      </h1>
    ),
  },
  {
    path: "/users",
    // element: <UserList />,
    element: (
      <h2>
        I want to give you one more tip, add the /USER_ID after
        "http://localhost:3000/users/"in the search bar to see a specific USER!!
        <br></br>
        Ci dovrebbe essere la lista degli USER, ma non funziona quindi è tutto
        commentato
      </h2>
    ),
  },
  {
    path: "/users/:user",
    element: <Users />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
