import styled from "@emotion/styled"
import { useBookmarkContext } from "../../../../context/BookmarkContext"
import IJob from "../../../../types/job"
import JobCard from "../../../RecommendedProfessions/JobCard/JobCard"

const Bookmark = () => {
  const { addBookmarkedJobs, removeBookmarkedJobs, bookmarkedJobs } =
    useBookmarkContext()

  const handleBookmarkCallback = (job?: IJob) => {
    if (job) removeBookmarkedJobs(job)
  }
  return (
    <Container>
      <InnerContainer>
        <Title>Bookmarked Jobs</Title>
        {bookmarkedJobs.map((job: IJob, i: number) => (
          <JobContainer key={i}>
            <JobCard
              jobData={job}
              bookmarked
              onClickBookmarkCallback={handleBookmarkCallback}
            />
          </JobContainer>
        ))}
        {bookmarkedJobs.length === 0 ? (
          <JobContainer>
            <p>So empty, lets bookmarked some jobs</p>
          </JobContainer>
        ) : null}
      </InnerContainer>
    </Container>
  )
}

export default Bookmark

const Container = styled.div`
  display: flex;
  width: 300px;
  background: linear-gradient(
      270deg,
      rgba(77, 197, 110, 0.06) 1.98%,
      rgba(255, 255, 255, 0) 55.09%
    ),
    #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 10px 9px 15px 15px;
`

const InnerContainer = styled.div`
  width: 100%;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 40vh;
  overflow: auto;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background-color: #fafafa38;
    border-radius: 7px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    /*background-color: #eaff2f81;*/
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #7472728a;
  }
`

const JobContainer = styled.div`
  max-height: 20vh;
  width: 100%;
`

const Title = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-top: 7px;
`
