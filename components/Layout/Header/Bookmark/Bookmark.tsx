import styled from "@emotion/styled"
import JobCard from "../../../RecommendedProfessions/JobCard/JobCard"

const Bookmark = () => {
  return (
    <Container>
      <JobCard match_value={28} />
      <JobCard match_value={28} />
      <JobCard match_value={28} />
    </Container>
  )
}

export default Bookmark

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  max-height: 40vh;
  overflow: auto;
  gap: 20px;
  background: linear-gradient(
      270deg,
      rgba(77, 197, 110, 0.06) 1.98%,
      rgba(255, 255, 255, 0) 55.09%
    ),
    #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 5px;
`
