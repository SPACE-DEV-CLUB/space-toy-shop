import styled from "styled-components";
import theme from "./theme";

export default function Card() {
  return (
    <CardFrame>
      <CardPiece>
        <CardFront>fff</CardFront>
        <CardBack>fff</CardBack>
      </CardPiece>
    </CardFrame>
  );
}

const CardFrame = styled.div`
  width: 100px;
  height: 150px;
  perspective: 600px;
`;

const CardPiece = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
  background: ${theme.cardFront};
`;

const CardBack = styled(CardFace)`
  background: ${theme.cardBack};
  transform: rotateY(180deg);
`;
