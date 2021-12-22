import styled from "styled-components";
import React, { useEffect, useState, useMemo } from "react";
import StartBtn from "../components/StartButton";
import Timer from "../components/Timer";

const Board = (): JSX.Element => {
    const [stage, setStage] = useState(1);
    const [time, setTime] = useState(10);
    const [isStart, setStart] = useState(false);
    const [isWin, setIsWin] = useState(false);

    const tdArr: Array<Array<string>> = [
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
        ["p", "p", "p", "p", "p"],
    ];
    const makeRnd = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setTime(time - 1);
        }, 1000);
        if (time <= 0) {
            clearInterval(timeoutID);
        }
    }, [time]);

    function startGame() {
        setStart(true);
    }

    function getLetter(e: any) {
        if (e.target.innerText == "q") {
            setIsWin(true);
            setStage(stage + 1);
        } else {
            setIsWin(false);
            setStage(1);
        }
    }

    let firstRnd: number = makeRnd(0, 4);
    let secRnd: number = makeRnd(0, 4);
    tdArr[firstRnd][secRnd] = "q";

    return (
        <BoardContainer>
            {isStart ? (
                <>
                    <span className="timer">Time: {time}</span>
                    <h1>
                        stage: <br />
                        {stage}
                    </h1>
                    <div onClick={getLetter} className="main-board">
                        {tdArr.map((e, index) =>
                            e.map((e, index) => <span key={index}>{e}</span>)
                        )}
                    </div>
                </>
            ) : (
                <button onClick={startGame}>Start</button>
            )}
        </BoardContainer>
    );
};

export default Board;

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #888;

    .main-board,
    h1,
    span {
        font-size: 36px;
        align-self: center;
        word-break: break-all;
        width: 120px;
    }

    .main-board {
        cursor: pointer;
    }

    .timer {
        font-size: 24px;
        text-align: center;
    }
    button {
        align-self: center;
        width: 100px;
        height: 100px;
        margin-top: 25px;
        border-radius: 50%;
        border: transparent;
        text-align: center;
        background: #ff7a7a;
        font-size: 24px;
        cursor: pointer;
    }

    button:hover {
        background: #db6767;
    }
`;
