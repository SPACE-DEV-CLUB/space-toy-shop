import styled from "styled-components";

const Card = styled.button`
  width: 100%;
  font-size: ${(props) => (props.level > 10 ? "150%" : "250%")};
  background-color: #f2e96b;
  color: #000000;
  border: none;
  box-shadow: 10px 10px 10px 0 rgba(242, 233, 107, 0.3);
  cursor: pointer;
  &:hover {
    background-color: #c3f25c;
  }
`;
export default Card;
