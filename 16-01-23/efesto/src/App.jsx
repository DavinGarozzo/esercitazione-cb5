import "./App.css";
import NewMessage from "./components/newMessage";
import FriendsList from "./components/friendList/FriendList";
import MessageList from "./components/messageList/index";
function App() {
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        <NewMessage />
        <MessageList />
      </div>
    </div>
  );
}

export default App;
