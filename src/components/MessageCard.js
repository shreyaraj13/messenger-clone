import React, { forwardRef } from "react";
import "./MessageCard.css";

const MessageCard = forwardRef((onMsg, ref) => {
  const isUser = onMsg.username === onMsg.onMsg.username;
  return (
    <div ref={ref} className={!isUser ? "message-card" : "message-card__user"}>
      <h6>{onMsg.onMsg.username}</h6>
      <p>{onMsg.onMsg.message}</p>
    </div>
  );
});

export default MessageCard;
