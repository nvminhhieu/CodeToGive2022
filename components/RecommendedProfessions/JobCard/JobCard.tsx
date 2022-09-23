import styled from "@emotion/styled"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import InfoIcon from "@mui/icons-material/Info"
import { SvgIcon } from "@mui/material"

const JobCard = () => {
  return (
    <Container>
      <AbsoluteInnerContainer>
        <SvgIcon sx={{ color: "white" }}>
          <InfoIcon />
        </SvgIcon>
        <SvgIcon sx={{ color: "white" }}>
          <AddCircleIcon />
        </SvgIcon>
      </AbsoluteInnerContainer>
      <Title>Shop assistant</Title>
      <Match>20% match</Match>
    </Container>
  )
}

export default JobCard

const Container = styled.div`
  position: relative;
  width: 20vw;
  max-width: 300px;
  height: 20vh;
  padding: 20px 17px;
  background: radial-gradient(
    216.18% 577.81% at 75.41% 171.32%,
    rgba(6, 70, 159, 1) 0%,
    rgb(151, 186, 236, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
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
  gap: 12px;
  display: flex;
  justify-content: flex-end;
`
