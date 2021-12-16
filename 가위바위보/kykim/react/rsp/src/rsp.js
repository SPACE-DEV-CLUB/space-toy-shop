import React, { Component } from "react";
import "./rsp.css";

class RSP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emoji: {
                0: "✊",
                1: "✌",
                2: "🤚",
            },
            idx: 0,
            result: "",
        };
    }

    componentDidMount() {
        this.intervalStart();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    intervalStart() {
        this.interval = setInterval(() => {
            this.setState({
                idx: (this.state.idx + 1) % 3,
            });
        }, 100);
    }

    onClickBtn = (choice) => {
        clearInterval(this.interval);
        const computerSelect = this.state.idx;
        const userSelect = choice;
        const diff = computerSelect - userSelect;

        if (diff === 0) {
            this.setState({
                result: "Draw !",
            });
        } else if (diff === 1 || diff === -2) {
            this.setState({
                result: "You Win !",
            });
        } else {
            this.setState({
                result: "You Lose !",
            });
        }

        setTimeout(() => {
            this.intervalStart();
            this.setState({
                result: "",
            });
        }, 1000);
    };

    render() {
        return (
            <>
                <div id="computer">{this.state.emoji[this.state.idx]}</div>
                <div class="user">
                    <button
                        onClick={() => this.onClickBtn(0)}
                        id="rock"
                        className="btn"
                    >
                        ✊
                    </button>
                    <button
                        onClick={() => this.onClickBtn(1)}
                        id="scissors"
                        className="btn"
                    >
                        ✌
                    </button>
                    <button
                        onClick={() => this.onClickBtn(2)}
                        id="paper"
                        class="btn"
                    >
                        🤚
                    </button>
                </div>
                <div id="result">{this.state.result}</div>
            </>
        );
    }
}

export default RSP;
