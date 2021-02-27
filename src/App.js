import './App.css';
import ReactPlayer from "react-player";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";




function App() {
  return (
    <Router>
      <div>
        

        <div className="head">
          <img className = "logoImg" src="https://media.discordapp.net/attachments/756344862944657428/756346155675287623/lamrwhite.png" ></img>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/users">

            <h1>user</h1>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




