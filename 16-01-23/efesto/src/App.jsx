import "./App.css";
import { useState, useEffect } from "react";
import NewMessage from "./components/newMessage";
import FriendsList from "./components/friendList/FriendList";
import MessageList from "./components/messageList/index";
import Button from "./components/button";
import Modal from "./components/modal";
import TagList from "./components/tagList";
import Filter from "./components/filter";

function App() {
  const [isModalEnabled, setModalEnabled] = useState("");
  const onHandleModal = () => setModalEnabled((prev) => !prev);
  const [filterState, setFilterState] = useState("");
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        {isModalEnabled && (
          <Modal>
            <NewMessage />
          </Modal>
        )}
        <Filter setFilterState={setFilterState} />

        <MessageList nPost={"full"} filterSearch={filterState} />
      </div>
      <div className="tagSection">
        <TagList />
      </div>
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
    </div>
  );
}

export default App;
