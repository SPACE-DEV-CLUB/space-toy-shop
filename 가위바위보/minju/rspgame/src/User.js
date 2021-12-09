import React from "react";
import "./User.css"
    
function User({onClick, children}){
    return (
        <button onClick={onClick} className = "btn">{children}</button>
    )
}

export default User