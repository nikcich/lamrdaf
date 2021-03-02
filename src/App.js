import './App.css';
import ReactPlayer from "react-player";
import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import fire from './fire';
import {storage} from'./fire';
import { Redirect } from 'react-router-dom';
import Europe from './Europe.js';
import Logout from './Logout.js';
import AccountPage from './AccountPage';

const ref = fire.firestore().collection("userData");

let thelist = null;
   ref.onSnapshot( async (querySnapshot) => {
      const items= [];
      const tref = fire.firestore().collection("userData").doc('information');
      const doc = await tref.get();
      if(doc.exists){
        console.log(doc.data());
        thelist = doc.data();
        //setList(doc.data());
      }else{
        console.log('doesnt exist');
      }
  });

  

function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [list, setList] = useState('');


  

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        checkIfExists();
        window.location.replace("https://www.lamrdaf.com/");
      })
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  function checkIfExists(){
    const original = JSON.stringify(thelist);
    if( !original.includes(user.uuid) ){
      const doc = fire.firestore().collection("userData").doc('information');
      // doc.set({

      // });
      console.log(original)
      //console.log("doesnt have user in list yet?");
    }
  }

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        checkIfExists();
        window.location.replace("https://www.lamrdaf.com/");
      })
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    fire.auth().signOut();
    setUser('');
    setEmail('');
    setPassword('');
    //setPages('');
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs();
        setUser(user);
        console.log('OMG WE LOGGED IN?');
        ///////////////////////////////////// lol this works
       // let obj = {id:user.uid, email:user.email};
        //if(!list.includes(obj)){
          //ref.doc(user.uid).set({id:user.uid, email:user.email});
        //}
        ///////////////////////////////////// lol this works

      }else{
        setUser('');
        console.log('OMG failure');
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])

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
                <Link to="/junkes.dk">Europe</Link>
              </li>
              {user !== '' ? (
                <>
                  <li>
                    <Link to="/account">Account</Link>
                  </li>
                </>
              ):(
              <>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </>
              )}
              
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/login">
            <Login 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setpassword={setPassword} 
              handleLogin={handleLogin}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
              handleSignUp={handleSignUp}
            />
          </Route>

          <Route path="/logout">
            <Logout 
              handleLogout={handleLogout}
            />
          </Route>

          <Route path="/junkes.dk">
            <Europe />
          </Route>

          <Route path="/account">
                <AccountPage 
                  user={user}
                  thelist={thelist}
                />
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




