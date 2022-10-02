import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"

type CustomIconButtonProps = {
  _onClick: () => void
  icon: any
  align?: string
  onMouseDown?: (e: any) => Promise<void>
  onMouseUp?: (e: any) => Promise<void>
}

export const CustomIconButton = ({
  _onClick,
  icon,
  align,
  onMouseDown,
  onMouseUp,
  ...props
}: CustomIconButtonProps) => {
  return (
    <IconWrapper
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onClick={_onClick}
      style={{ alignSelf: align, ...props }}
    >
      <IconContainer style={{ padding: "20px" }}>
        <SvgIcon sx={{ fontSize: "30px", color: "#0097F2" }}>{icon}</SvgIcon>
      </IconContainer>
    </IconWrapper>
  )
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`

const IconWrapper = styled.div`
  position: fixed;
  bottom: 2vh;
  cursor: pointer;
`
