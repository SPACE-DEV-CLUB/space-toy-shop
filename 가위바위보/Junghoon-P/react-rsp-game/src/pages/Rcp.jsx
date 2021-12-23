import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Rcp = () => {
  return (
    <Container>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <section id="list-game"></section>
      <Section>
        <Button>Rock</Button>
        <Button>Paper</Button>
        <Button>Scissors</Button>
        <img
          src="../image/outline_replay_circle_filled_black_24dp.png"
          alt="retry button"
          class="retry"
        />
      </Section>
      <div class="result"></div>
    </Container>
  );
};

export default Rcp;

const Container = styled.main`
  ${(props) => props.theme.setFlex("center", "center")};
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.mainColor};
`;

const Section = styled.section`
  ${(props) => props.theme.setFlex("center", "center")};
`;

const Button = styled.button`
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: 5rem;
  font-weight: 600;
  font-size: 2rem;
  margin-right: 3rem;
  cursor: pointer;
`;
