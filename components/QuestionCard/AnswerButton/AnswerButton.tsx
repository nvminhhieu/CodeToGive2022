import { css } from "@emotion/react"
import styled from "@emotion/styled"

const AnswerButton = (props: any) => {
  return (
    <ContainerButton {...props}>
      <InnerContainer>
        <span>{props.children}</span>
        {props?.icon}
      </InnerContainer>
    </ContainerButton>
  )
}

export default AnswerButton

const ContainerButton = styled.button<{ active: boolean }>`
  background: #f0f7fb;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  color: #06459f;
  outline: 3px solid #f0f7fb;
  outline-offset: -3px;
  transition: background 0.3s, outline 0.3s, box-shadow 0.3s;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          background: #ffffff;
          outline: 3px solid #0097f2;
          box-shadow: 0px 0px 0px 2px #b8e4ff, 0px 2px 5px rgba(1, 68, 7, 0.1);
        `
      : ""}
  &:hover {
    ${({ active }) =>
      active
        ? css`
            background: #ffffff;
            outline: 3px solid #0097f2;
            box-shadow: 0px 0px 0px 2px #b8e4ff, 0px 2px 5px rgba(1, 68, 7, 0.1);
          `
        : css`
            background: #ffffff;
            outline: 2px solid #0097f2;
            box-shadow: 0px 0px 0px 2px #b8e4ff, 0px 2px 5px rgba(1, 68, 7, 0.1);
          `}
  }
`
const InnerContainer = styled.div`
  display: flex;
  gap: 10px;
`
