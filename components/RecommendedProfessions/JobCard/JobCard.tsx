import styled from "@emotion/styled"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import InfoIcon from "@mui/icons-material/Info"
import { SvgIcon } from "@mui/material"
import { motion } from "framer-motion"

type Props = {
  match_value: number
  image?: string
}

const FALL_BACK_IMAGE =
  "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"

const calculateFadeValue = (value: number): number => {
  return value / 100
}

const JobCard = ({ match_value }: Props) => {
  return (
    <Container
      value={match_value}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AbsoluteInnerContainer>
        <SvgIcon sx={{ color: "white" }}>
          <InfoIcon />
        </SvgIcon>
        <SvgIcon sx={{ color: "white" }}>
          <AddCircleIcon />
        </SvgIcon>
      </AbsoluteInnerContainer>
      <Title>Shop assistant</Title>
      <Match>{match_value}% match</Match>
    </Container>
  )
}

export default JobCard

const Container = styled(motion.div)<{ value: number; image?: string }>`
  position: relative;
  width: 100%;
  //max-width: 300px;
  height: 20vh;
  padding: 20px 17px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    border-radius: 8px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ value }) => calculateFadeValue(value) * 1.3};
    background: linear-gradient(
        25.8deg,
        rgba(0, 0, 0, 0.162) 14.33%,
        rgba(0, 0, 0, 0) 83.67%
      ),
      linear-gradient(
        288.1deg,
        rgba(6, 70, 159, ${({ value }) => calculateFadeValue(value)}) 17.87%,
        rgb(151, 186, 236, ${({ value }) => calculateFadeValue(value)}) 142.8%
      ),
      url(${({ image }) => (image ? image : FALL_BACK_IMAGE)});
    background-position: center;
    background-size: cover;
  }
`

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: white;
`
const Match = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #08eba7;
`

const AbsoluteInnerContainer = styled.div`
  position: absolute;
  top: 17px;
  right: 20px;
  gap: 10px;
  display: flex;
  justify-content: flex-end;
`
