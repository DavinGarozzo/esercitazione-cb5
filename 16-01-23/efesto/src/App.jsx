import "./App.css";
import NewMessage from "./components/newMessage";

import MessageList from "./components/messageList/index";
function App() {
  return (
    <div className="App">
      <NewMessage />
      <MessageList />
    </div>
  );
}

export default App;
