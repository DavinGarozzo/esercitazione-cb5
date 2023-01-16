import { useState, useEffect } from "react";
import "./index.css";
import Message from "../message/Message";
import { GET } from "../../utils/http";

const MessageList = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMsgList(posts));
  }, []);

  return (
    <div className="MessageList">
      {msgList.map((msg) => (
        <Message data={msg} key={msg.id} />
      ))}
    </div>
  );
};
export default MessageList;
