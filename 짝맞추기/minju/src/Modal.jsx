import reactDom from "react-dom"
import styled from "styled-components"
import theme from "./theme"

const ModalPortal = ({ children }) => {
  const modalElement = document.querySelector(".modal")

  return reactDom.createPortal(
    <Modal>
      <ModalBox>{children}</ModalBox>
    </Modal>,
    modalElement,
  )
}

export default ModalPortal

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
