import styled from 'styled-components'
import React, {useEffect, useState} from 'react';

const Timer = (): JSX.Element => {

    const [time, setTime] = useState(10);

    return (
        <TimerContainer>         
            <span className="timer">Time: {time}</span>
        </TimerContainer>
    );
};

export default Timer;

const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button {
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
`