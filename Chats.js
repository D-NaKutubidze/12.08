
import React from 'react';
import { Link } from 'react-router-dom';

function Chats({ onLogout }) {
  return (
    <div className="chats">
      <header>
        <h2>Chats</h2>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div className="chat-list">
        <Link to="/chats/1">Chat 1</Link>
        <Link to="/chats/2">Chat 2</Link>
        {/* Add more chat links */}
      </div>
    </div>
  );
}

export default Chats;
