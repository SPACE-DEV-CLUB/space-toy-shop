import styled from 'styled-components'
import React, {useEffect, useState} from 'react';

const StartBtn = (): JSX.Element => {

    const [isStart, setStart] = useState(false);
    
    function startGame(){
        setStart(true)
    }

    return (
        <ButtonContainer>         
            <button onClick={startGame}>Start</button>
        </ButtonContainer>
    );
};

export default StartBtn;

const ButtonContainer = styled.div`
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