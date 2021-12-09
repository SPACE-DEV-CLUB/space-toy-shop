import React from "react";
import "./Score.css"

function Score({player, children}){
    return (
        <div className={`userInfo ${player}`}>
            <div className="player">{player}</div>
            <div className="score">{children}점</div>
        </div>
    )
}

export default Score;