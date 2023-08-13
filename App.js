
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {user ? <Redirect to="/chats" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route path="/chats/:chatId">
            {user ? (
              <ChatScreen />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/chats">
            {user ? <Chats onLogout={handleLogout} /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            {user ? <Redirect to="/chats" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
