import "./MessageCard.css";

const MessageCard = (onMsg) => {
  const isUser = onMsg.username === onMsg.onMsg.username;
  return (
    <div className={!isUser ? "message-card" : "message-card__user"}>
      <h6>{onMsg.onMsg.username}</h6>
      <p>{onMsg.onMsg.message}</p>
    </div>
  );
};

export default MessageCard;
