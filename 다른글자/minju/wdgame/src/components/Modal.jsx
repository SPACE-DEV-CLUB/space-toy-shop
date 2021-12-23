import styled from "styled-components";
import Restart from "./Restart";

export function Modal({ onClick }) {
  return (
    <Modalbox>
      <Box>
        정답입니다!
        <Restart onClick={onClick}>다음</Restart>
      </Box>
    </Modalbox>
  );
}

const Modalbox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  color: #6a66f2;
  font-size: 24px;
  font-weight: 700;
  border-radius: 30px;
`;
