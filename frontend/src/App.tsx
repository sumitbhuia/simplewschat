import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  useEffect(() => {
    // Connect to the WebSocket server
    const newSocket = new WebSocket('ws://localhost:8080');

    // When the connection opens, notify the user
    newSocket.onopen = () => {
      console.log('Connection established');
    };

    // Handle incoming messages
    newSocket.onmessage = (event) => {
      setChatHistory((prev) => [...prev, `Server: ${event.data}`]);
      console.log('Server:', event.data);
    };

    // Save the socket connection to state
    setSocket(newSocket);

    // Clean up the socket when the component unmounts
    // This will close the connection when the user leaves the page
    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.send(message);
      setChatHistory((prev) => [...prev, `You: ${message}`]);
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>WebSocket Chat</h1>
      <div className="chat-box">
        {chatHistory.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' ? sendMessage() : null}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
