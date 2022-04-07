import styled from "styled-components"
import { keyframes } from "styled-components"
import theme from "./theme"

export default function Card({ data, handleClick }) {
  const { id, item, status, idx } = data

  const handleCard = (idx) => {
    if (handleClick) handleClick(idx)
  }

  return (
    <CardFrame onClick={() => status || handleCard(idx)}>
      <CardPiece checked={status}>
        <CardFront />
        <CardBack>{item}</CardBack>
      </CardPiece>
    </CardFrame>
  )
}

const CardFrame = styled.div`
  display: inline-block;
  height: 150px;
  perspective: 600px;
`

const CardPiece = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ checked }) => (checked ? `transform: rotateY(180deg)` : null)}
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

const CardFront = styled(CardFace)`
  background: ${theme.VIOLET};
`

const CardBack = styled(CardFace)`
  padding: 20px 0;
  text-align: center;
  background: ${theme.PURPLE};
  transform: rotateY(180deg);
  font-size: 80px;
`
