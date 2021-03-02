import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const AccountPage = (props) => {
    const{ 
        user,
        thelist
    } = props;

    //console.log(user);

    return(
        <div className="middle2"> 
                <h1 className="lamr3" > Account Information </h1>
                <h1 className="lamr3" >User ID: {user.uid}</h1>
                <li>
                    <Link to="/logout"> Logout </Link>
                </li>
        </div>
    )
}

export default AccountPage;