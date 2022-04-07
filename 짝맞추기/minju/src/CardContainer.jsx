import styled from "styled-components"
import Card from "./Card"
import theme from "./theme"
import GAMEDATA from "./constant/data"
import { useMemo, useState, useEffect } from "react"
import ModalPortal from "./Modal"

const DEFAULT_COUNT = 50

export const CardContainer = () => {
  const [count, setCount] = useState(DEFAULT_COUNT)
  const [clicked, setClicked] = useState(Array.from([]))
  const [finished, setFinished] = useState(false)

  const MixedCardList = useMemo(() => MixedFruit(), [finished])

  const handleClick = (idx) => {
    // 선택한 카드 뒤집기
    MixedCardList.some((e) => {
      if (e.idx === idx) {
        e.status = !e.status
        return true
      }
      return false
    })

    setClicked([...clicked, idx])
    setCount((prev) => prev - 1)
  }

  useEffect(() => {
    setTimeout(() => {
      if (clicked.length === 2) {
        let a = MixedCardList.find((e) => e.idx === clicked[0]).id
        let b = MixedCardList.find((e) => e.idx === clicked[1]).id
        // 두 카드가 같지 않은 경우
        if (a !== b) {
          MixedCardList.forEach((e) => {
            if (e.idx === clicked[0] || e.idx === clicked[1]) {
              e.status = false
            }
          })
        }
        setClicked(Array.from([]))
      }
    }, 800)
  }, [clicked])

  useEffect(() => {
    if (MixedCardList.every((e) => e.status === true) || count === 0) {
      setFinished(true)
      setCount(DEFAULT_COUNT)
    }
  }, [clicked])

  const handleFinished = () => {
    setFinished(false)
  }

  return (
    <Container>
      {finished && (
        <ModalPortal>
          <span>다시 시작하시겠습니까?</span>
          <button type="button" onClick={handleFinished}>
            다시 시작
          </button>
        </ModalPortal>
      )}
      <Countdown>남은 횟수 : {count}</Countdown>
      <GameStage>
        {MixedCardList.map((e, i) => (
          <Card
            data={e}
            key={`${e.idx}-${e.item}`}
            handleClick={clicked.length < 2 ? handleClick : null}
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

const Countdown = styled.div`
  color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  font-size: 18px;
`

function MixedFruit() {
  let busket = Array.from({ length: 16 }, () => {
    return {}
  })
  let mixed = [...GAMEDATA, ...GAMEDATA].sort((a, b) => 0.5 - Math.random())

  busket.forEach((e, i) => {
    e.id = mixed[i].id
    e.item = mixed[i].item
    e.status = false
    e.idx = i
  })

  return busket
}
