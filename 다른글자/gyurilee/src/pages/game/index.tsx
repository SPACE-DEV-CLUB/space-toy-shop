import Board from '../../components/RndBoard';
import styled from 'styled-components'
import type { NextPage } from 'next';
import React from 'react';


const GamePage: NextPage = () => {
    return (
        <Container>
            <Board></Board>
        </Container>
    )
}

export default GamePage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
`