import styled from "@emotion/styled"

export const AssessmentCard = ({ assessment }: any) => {
  return (
    <Container>
      <Flex>
        <div>
          <Title>{assessment.title}</Title>
          <Description>{assessment.description}</Description>
        </div>
        <Icon>hello</Icon>
      </Flex>
    </Container>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  background: linear-gradient(
      270deg,
      rgba(77, 197, 110, 0.06) 1.98%,
      rgba(255, 255, 255, 0) 55.09%
    ),
    #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px;

  margin-top: 32px;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  padding-bottom: 6px;
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6); ;
`

const Icon = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: red;
`
