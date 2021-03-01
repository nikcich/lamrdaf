import React from 'react';


const Logout = (props) => {

    const{ 
        handleLogout
    } = props;

    handleLogout();
    window.location.replace("https://www.lamrdaf.com/");

    return(
        <> 
        
        </>
    )
}

export default Logout;