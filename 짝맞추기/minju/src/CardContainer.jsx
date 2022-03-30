import styled from "styled-components"
import Card from "./Card"
import theme from "./theme"
import GAMEDATA from "./constant/data"
import { useMemo, useState, useEffect } from "react"

export const CardContainer = () => {
  const MixedCardList = useMemo(() => MixedFruit(), [])

  const [clicked, setClicked] = useState(Array.from([]))
  const [finished, setFinished] = useState(false)

  const handleClick = (idx) => {
    // 선택한 카드 뒤집기
    MixedCardList.some((e) => {
      if (e.idx === idx) {
        e.status = !e.status
        return true
      }
      return false
    })
    if (clicked.includes(idx)) {
      setClicked(Array.from([]))
    } else {
      setClicked([...clicked, idx])
    }
  }

  const handleCheck = (idx) => {
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
      if (clicked.includes(idx)) {
        setClicked(Array.from([]))
      } else {
        setClicked(Array.from([idx]))
      }
    }
  }

  useEffect(() => {
    if (MixedCardList.every((e) => e.status === true)) {
      setFinished(true)
    }
  }, [clicked])

  const handleFinished = () => {
    window.location.reload()
  }

  return (
    <Container>
      {finished && (
        <Modal>
          <ModalBox>
            <span>다시 시작하시겠습니까?</span>
            <button type="button" onClick={handleFinished}>
              다시 시작
            </button>
          </ModalBox>
        </Modal>
      )}
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

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff2;
  z-index: 1000;
`

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: ${theme.BLACK};
  border-radius: 30px;

  & > span {
    margin: 20px auto;
    color: #fff;
  }

  & > button {
    height: 50px;
    background: ${theme.GREEN};
    border: none;
    border-radius: 20px;
  }
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
