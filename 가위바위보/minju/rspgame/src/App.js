import React from "react";
import User from "./User";
import Score from "./Score";
import "./App.css"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      values : {
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
        }},
      show : 0,
      gamer : 0,
      user : 0
    }
    this.checkResult = this.checkResult.bind(this)
    this.restart = this.restart.bind(this)
    this.clear = this.clear.bind(this)
  }

  componentDidMount(){
    this.restart()
  }

  componentWillUnmount(){
    clearInterval(this.showValues);
  }

  checkResult(num){
    clearInterval(this.showValues)
    if (this.state.show === num) {
      alert("비겼다.")
    }
    else if(this.state.show < 2){
      this.state.show+1 ===  num ? this.lose() : this.win()
    }
    else{
      num === 0 ? this.lose() : this.win();
    }
    setTimeout(() => {
      this.restart()
    }, 300);
  }
  

  restart(){
    this.showValues = setInterval(() => {
      let newValue = this.state.show === 0 ? 1
                 : this.state.show === 1 ? 2
                 : this.state.show === 2 && 0

    this.setState({
      show : newValue
    })
    }, 100);
  }

  win(){
    alert("이겼다!!!!");
    this.setState((prev) => {
      return {user : prev.user + 1}
    })

  }

  lose(){
    alert("졌다!!!!!!!!");
    this.setState((prev) => {
      return {gamer : prev.gamer + 1}
    })

  }

  clear(){
    this.setState({
      user : 0,
      gamer : 0
    })
  }

  render(){
    return (
      <>
        <h1><span className = "gameName">가위바위보</span> 게임을 해봅시다.</h1>
        <Score player = "gamer">{this.state.gamer}</Score>
        <div className="gamerValue">
          {this.state.values[this.state.show].emoji}
        </div>
        <Score player = "user">{this.state.user}</Score>
        <div className="btns">
          <User onClick = {this.checkResult.bind(this, 0)}>{this.state.values[0].emoji}</User>
          <User onClick = {this.checkResult.bind(this, 1)}>{this.state.values[1].emoji}</User>
          <User onClick = {this.checkResult.bind(this, 2)}>{this.state.values[2].emoji}</User>
          <User onClick = {this.clear} >🔄</User> 
        </div>
        </>
    )
  }

}

export default App;
