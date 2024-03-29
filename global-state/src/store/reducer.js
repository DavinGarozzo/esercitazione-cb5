const initialState = {
  count: 0,
  pippo: "pippo",
};

export default function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
console.log(initialState);
