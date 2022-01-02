import React, { useEffect, useState } from "react";
import User from "./User";
import Score from "./Score";
import "./App.css"

export default function App() {
  const [values, setValues] = useState({
    0 : {
      value : "rock",
      emoji : "✊"},
    1 : {
      value : "scissor",
      emoji : "✌️"
    },
    2 : {
      value : "paper",
      emoji : "🖐"
    }})
  const [show, setShow] = useState(0);
  const [gamer, setGamer] = useState(0)
  const [user, setUser] = useState(0) 

  let showValues;

  const restart = () => {
    showValues = setInterval(() => {
      let newValue = show === 0 ? 1
                 : show === 1 ? 2
                 : show === 2 && 0
    setShow(newValue)
    }, 100);
  }


  const clear = () => {
    setGamer(0)
    setUser(0)
  }

  const result = (winner) => {
    alert(winner === "gamer" ? "졌다!!!!!" : "이겼다!!!!")
    winner === "gamer" ? setGamer(gamer++) : setUser(user++)
  }


  const checkResult = (num) => {
    clearInterval(showValues)
    if (show === num) {
      alert("비겼다.")
    }
    else if(show < 2){
      (show+1) ===  num ? result("gamer") : result("user")
    }
    else{
      num === 0 ? result("gamer") : result("user");
    }
    setTimeout(() => {
      restart()
    }, 300);
  }

  useEffect(() => {
    restart()
    return clearInterval(showValues)
  })

  return (
    <>
        <h1><span className = "gameName">가위바위보</span> 게임을 해봅시다.</h1>
        <Score player = "gamer">{gamer}</Score>
        <div className="gamerValue">
          {values[show].emoji}
        </div>
        <Score player = "user">{user}</Score>
        <div className="btns">
          <User onClick = {() => checkResult(0)}>{values[0].emoji}</User>
          <User onClick = {() => checkResult(1)}>{values[1].emoji}</User>
          <User onClick = {() => checkResult(2)}>{values[2].emoji}</User>
          <User onClick = {clear} >🔄</User> 
        </div>
    </>
  )
}


export default App;
