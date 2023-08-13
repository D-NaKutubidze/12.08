
import React from 'react';
import { useParams } from 'react-router-dom';

function ChatScreen() {
  const { chatId } = useParams();

  return (
    <div className="chat-screen">
      <header>
        <h2>Chat {chatId}</h2>
      </header>
      <div className="chat-messages">
        {/* Display chat messages */}
      </div>
      <div className="input-box">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatScreen;
