fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) =>
    todos.map((key) => console.log("Id:" + key.id, "Title:" + key.title))
  )
  .catch((err) => console.log("Qualcosa è andato storto"))
  .finally(() => console.log("++++++++++++++++++++"));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.map((key) =>
      console.log(
        "Name:" + key.name,
        "Address:" + key.address,
        "City:" + key.address.city
      )
    )
  )
  .catch((err) => console.log("Controlla bene che qualcosa non va"))
  .finally(() => console.log("-------------------"));
