import React, { useEffect, useState } from "react"
import User from "./User"
import Score from "./Score"
import "./App.css"

export default function App() {
  const [values, setValues] = useState({
    0: {
      value: "rock",
      emoji: "β",
    },
    1: {
      value: "scissor",
      emoji: "βοΈ",
    },
    2: {
      value: "paper",
      emoji: "π",
    },
  })
  const [show, setShow] = useState(0)
  const [gamer, setGamer] = useState(0)
  const [user, setUser] = useState(0)

  let showValues

  const restart = () => {
    showValues = setInterval(() => {
      let newValue = show === 0 ? 1 : show === 1 ? 2 : show === 2 && 0
      setShow(newValue)
    }, 100)
  }

  const clear = () => {
    setGamer(0)
    setUser(0)
  }

  const result = (winner) => {
    alert(winner === "gamer" ? "μ‘λ€!!!!!" : "μ΄κ²Όλ€!!!!")
    winner === "gamer" ? setGamer(gamer + 1) : setUser(user + 1)
  }

  const checkResult = (num) => {
    if (show === num) {
      alert("λΉκ²Όλ€.")
    } else if (show < 2) {
      show + 1 === num ? result("gamer") : result("user")
    } else {
      num === 0 ? result("gamer") : result("user")
    }
  }

  useEffect(() => {
    restart()
    return () => clearInterval(showValues)
  })

  return (
    <>
      <h1>
        <span className="gameName">κ°μλ°μλ³΄</span> κ²μμ ν΄λ΄μλ€.
      </h1>
      <Score player="gamer">{gamer}</Score>
      <div className="gamerValue">{values[show].emoji}</div>
      <Score player="user">{user}</Score>
      <div className="btns">
        <User onClick={() => checkResult(0)}>{values[0].emoji}</User>
        <User onClick={() => checkResult(1)}>{values[1].emoji}</User>
        <User onClick={() => checkResult(2)}>{values[2].emoji}</User>
        <User onClick={clear}>π</User>
      </div>
    </>
  )
}
