import styled from "@emotion/styled"
import { ReactElement } from "react"
import IconButton from "@mui/material/IconButton"
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { Fade } from "@mui/material"

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    TransitionComponent={Fade}
    classes={{ popper: className }}
    TransitionProps={{ timeout: 600 }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    height: "fit-content",
    width: "fit-content",
    color: "black",
    borderRadius: "16px",
    boxShadow:
      "0px 0px 7px rgba(0, 0, 0, 0.04), 0px 15px 17px -1px rgba(0, 0, 0, 0.05);",
    backgroundColor: "white",
    padding: "12px",
  },
}))

type Props = {
  title: string
  description?: string | ReactElement
  showTooltip?: boolean
}

const PageTitle = ({ title, description, showTooltip = false }: Props) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InnerContainer>
          <Title>{title}</Title>
          <Description>{description ? description : ""}</Description>
        </InnerContainer>
        {showTooltip && (
          <CustomTooltip
            title={
              <div>
                <TooltipTitle>Keyboard navigation</TooltipTitle>
                <TooltipText>Left Arrow: Previous Question</TooltipText>
                <TooltipText>Right Arrow: Next Question</TooltipText>
                <TooltipText>Space: Open Recommended Professions</TooltipText>
                <TooltipText>Numbers from 1 to 5: Answer Questions</TooltipText>

                <TooltipTitle style={{ marginTop: "30px" }}>
                  Voice command
                </TooltipTitle>
                <TooltipText>Hi: How Can I Help You?</TooltipText>
                <TooltipText>Next: Next Question</TooltipText>
                <TooltipText>Previous: Previous Question</TooltipText>
              </div>
            }
            style={{}}
          >
            <IconButton>
              <InfoOutlinedIcon
                style={{ height: "30px", width: "30px", color: "#0097F2" }}
              />
            </IconButton>
          </CustomTooltip>
        )}
      </div>
    </Container>
  )
}

export default PageTitle

const Container = styled.div`
  margin: 40px 0 60px 0;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h2`
  font-size: 68px;
  font-weight: 600;
  color: #191e28;
`

const Description = styled.p`
  font-size: 24px;
  color: #6a6e77;
`

const TooltipTitle = styled.h2`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 8px;
`

const TooltipText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: rgba(102, 102, 102, 1);
  margin-top: 6px;
`
