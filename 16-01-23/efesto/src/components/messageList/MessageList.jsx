import { useState, useEffect } from "react";
import "./index.css";
import Message from "../message/Message";
import { GET } from "../../utils/http";

const MessageList = ({ nPost, filterSearch }) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      nPost === "full"
        ? setMsgList(posts.filter((post) => post.title.includes(filterSearch)))
        : setMsgList(posts.filter((post) => post.id <= nPost))
    );
  }, [filterSearch]);
  return (
    <div className="MessageList">
      {msgList.map((msg) => (
        <Message
          data={msg}
          key={msg.id}
          textContent={nPost === "full" ? "full" : "partial"}
        />
      ))}
    </div>
  );
};
export default MessageList;
