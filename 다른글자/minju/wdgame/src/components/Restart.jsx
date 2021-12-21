import styled, { keyframes } from "styled-components";

const clickMe = keyframes`
from {
  box-shadow: 0 0 0 0 rgba(195, 242, 92, 0);
}
50% {
  box-shadow: 0 0 0 5px rgba(195, 242, 92, 0.5);
}
to {
  box-shadow: 0 0 0 0 rgba(195, 242, 92, 0);
}
`;

const Restart = styled.button`
  margin: 10px;
  width: 100px;
  height: 50px;
  font-size: 20px;
  background-color: #c3f25c;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  cursor: pointer;
  z-index: 110;
  animation: ${clickMe} 1s linear infinite;
`;

export default Restart;
