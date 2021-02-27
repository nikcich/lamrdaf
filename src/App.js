import './App.css';
import ReactPlayer from "react-player";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home.js";



window.onload = () => {
const fragment = new URLSearchParams(window.location.hash.slice(1));

			if (fragment.has("access_token")) {
				const accessToken = fragment.get("access_token");
				const tokenType = fragment.get("token_type");

				fetch('https://discord.com/api/users/@me', {
					headers: {
						authorization: `${tokenType} ${accessToken}`
					}
				})
					.then(res => res.json())
					.then(response => {
						const { username, discriminator } = response;
						document.getElementById('info').innerText += ` ${username}#${discriminator}`;
					})
					.catch(console.error);

			}
			else {
				console.log("else");
			}
  }


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/discord">DISKORD2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">

            <h1>user</h1>
          </Route>
          <Route path="/discord">
            <h1>Authenticating...</h1>
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




