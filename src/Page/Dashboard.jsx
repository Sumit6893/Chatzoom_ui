import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://chatzoom-6l06.onrender.com");

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setChat(prev => [...prev, msg]);
    });

    return () => socket.off();
  }, []);

  const sendMessage = () => {
    socket.emit("gyan", message);
    setMessage("");
  };

  return (
    <div>
      {chat.map((c, i) => <p key={i}>{c.content}</p>)}

      <input value={message} onChange={(e)=>setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Dashboard;