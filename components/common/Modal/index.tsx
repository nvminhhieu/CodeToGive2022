import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import * as React from "react"
import CloseIcon from "@mui/icons-material/Close"
import styled from "@emotion/styled"
import { Dialog } from "@mui/material"

type ModalWrapperProps = {
  buttonTitle: string
  title: string
  text?: string
  isDisabled?: boolean
  children: any
  onClickCallBack: any
  isOpen: boolean
}

const ModalWrapper = ({
  buttonTitle,
  title,
  text,
  isDisabled,
  children,
  onClickCallBack,
  isOpen,
  ...props
}: ModalWrapperProps) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClickCallBack}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          style: {
            padding: 24,
            borderRadius: 16,
            background: "#FFFFFF",
            border: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.1)",
            boxShadow:
              "0px 0px 7px rgba(0, 0, 0, 0.04), 0px 15px 17px -1px rgba(0, 0, 0, 0.05); }",
          },
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <IconWrapper>
            <CloseIcon
              sx={{
                cursor: "pointer",
                color: "rgba(0, 0, 0, 0.54);",
              }}
              onClick={onClickCallBack}
            />
          </IconWrapper>
          <div style={{ marginBottom: 48 }}>
            <Title>{title}</Title>
            {text && <Text>{text}</Text>}
          </div>
          {children}
        </div>
      </Dialog>
    </div>
  )
}

export default ModalWrapper

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
`
const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  line-height: 40px;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 6px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 25px;
`
