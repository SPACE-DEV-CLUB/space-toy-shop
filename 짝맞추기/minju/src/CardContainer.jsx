import styled from "styled-components"
import Card from "./Card"
import theme from "./theme"
import GAMEDATA from "./constant/data"
import { useMemo, useState } from "react"

export const CardContainer = () => {
  const MixedCardList = useMemo(() => MixedFruit(), [])

  const [clicked, setClicked] = useState(Array.from([]))

  const handleClick = (idx) => {
    // 선택한 카드 뒤집기
    MixedCardList.some((e) => {
      if (e.idx === idx) {
        e.status = !e.status
        return true
      }
      return false
    })
    if (clicked.length === 1 && clicked[0] === idx) {
      setClicked(Array.from([]))
    } else {
      setClicked([...clicked, idx])
    }
  }

  const handleCheck = (idx) => {
    if (clicked.length === 1) {
      let a = MixedCardList.find((e) => e.idx === clicked[0]).id
      let b = MixedCardList.find((e) => e.idx === idx).id
      // 두 카드가 같지 않은 경우
      if (a !== b) {
        MixedCardList.forEach((e) => {
          if (e.idx === clicked[0] || e.idx === idx) {
            e.status = false
          }
        })
      }
      setClicked(Array.from([idx]))
    }
  }

  console.log(clicked)
  return (
    <Container>
      <GameStage>
        {MixedCardList.map((e, i) => (
          <Card
            data={e}
            key={`${e.idx}-${e.item}`}
            handleClick={handleClick}
            handleCheck={handleCheck}
          />
        ))}
      </GameStage>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.BLACK};
`

const GameStage = styled.article`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`

function MixedFruit() {
  let busket = Array.from({ length: 16 }, () => {
    return {}
  })
  let mixed = [...GAMEDATA, ...GAMEDATA].sort((a, b) => 0.5 - Math.random())

  busket.forEach((e, i) => {
    e.id = mixed[i].id
    e.item = mixed[i].item
    e.status = mixed[i].status
    e.idx = i
  })

  return busket
}
