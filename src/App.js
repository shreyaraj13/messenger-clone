import React, { useState, useEffect } from "react";
import "./App.css";
import MessageCard from "./components/MessageCard";
import db from "./firebase";
import firebase from "firebase";
// import FlipMove from "react-flip-move";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setusername] = useState(["user"]);
  //useEffect run code on a condition
  useEffect(() => {
    //this is going to run when app contents loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  //useEffect is a listener shapshot is also a listener
  useEffect(() => {
    //run code here
    //if it's blank inside [], this code runs once when the app component loads
    setusername(prompt("Please enter your name"));
  }, []);

  const messageSummitHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //now we ae pushing msg to database so we dont need this line
    // setMessages([...messages, { username: username, message: input.trim() }]);
    setInput("");
  };

  const messageInputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>Messenger💌</h1>
      <p>Welcome {username}</p>
      <div className="msg">
        {messages.map(({ id, message }) => (
          <MessageCard key={id} username={username} onMsg={message} />
        ))}
      </div>
      <form className="input">
        <input
          placeholder="Enter a message"
          type="text"
          value={input}
          onChange={messageInputHandler}
        ></input>
        <button onClick={messageSummitHandler} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
