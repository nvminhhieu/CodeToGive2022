import styled from "@emotion/styled"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import InfoIcon from "@mui/icons-material/Info"
import { SvgIcon } from "@mui/material"
import { motion } from "framer-motion"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot"
import { useState } from "react"

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
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <Container
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ImageThumbnail value={match_value} />
      <AbsoluteInnerContainer>
        <SvgIcon sx={{ color: "white" }}>
          <InfoIcon />
        </SvgIcon>
      </AbsoluteInnerContainer>
      <ContentContainer>
        <Content>
          <Title>Shop assistant</Title>
          <Match>{match_value}% match</Match>
        </Content>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          {isBookmarked ? (
            <BookmarkIcon sx={{ color: "#e6d113" }} />
          ) : (
            <TurnedInNotIcon />
          )}
        </div>
      </ContentContainer>
    </Container>
  )
}

export default JobCard

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  //max-width: 300px;
  height: 18vh;
  padding: 12px;
  z-index: 2;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
  background: radial-gradient(
    216.18% 577.81% at 75.41% 171.32%,
    rgba(6, 69, 159, 0.08) 0%,
    rgba(151, 186, 236, 0) 100%
  );
`

const ImageThumbnail = styled.div<{ value: number; image?: string }>`
  background: url(${({ image }) => (image ? image : FALL_BACK_IMAGE)});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  opacity: ${({ value }) => calculateFadeValue(value) * 1.3};
`

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #191e28;
`
const Match = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #6a6e77;
`

const AbsoluteInnerContainer = styled.div`
  position: absolute;
  top: 17px;
  right: 20px;
  gap: 10px;
  display: flex;
  justify-content: flex-end;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
