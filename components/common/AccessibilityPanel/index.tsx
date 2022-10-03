import accessibilityLogo from "../../../assets/accessibilty.svg"
import Image from "next/image"
import styled from "@emotion/styled"
import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import CloseIcon from "@mui/icons-material/Close"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import ZoomOutIcon from "@mui/icons-material/ZoomOut"
import FilterBAndWIcon from "@mui/icons-material/FilterBAndW"
import ContrastIcon from "@mui/icons-material/Contrast"
import HdrAutoIcon from "@mui/icons-material/HdrAuto"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import WallpaperIcon from "@mui/icons-material/Wallpaper"
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice"

type Props = {
  toggleDrawer: () => void
  onClick: () => void
}

const DrawerContent = ({ toggleDrawer, onClick }: Props) => {
  const drawerItems = [
    { name: "Larger text", icon: ZoomInIcon },
    { name: "Smaller text", icon: ZoomOutIcon },
    { name: "Grayscale", icon: FilterBAndWIcon },
    { name: "High contrast", icon: ContrastIcon },
    { name: "Negative contrast", icon: ContrastIcon },
    { name: "Light background", icon: WallpaperIcon },
    { name: "Most readable letters", icon: HdrAutoIcon },
    { name: "Reset", icon: RestartAltIcon },
  ]
  return (
    <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <>
        <Title>Readability</Title>
        <List>
          {drawerItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Title>Voice</Title>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClick}>
              <ListItemIcon>
                <KeyboardVoiceIcon />
              </ListItemIcon>
              <ListItemText primary={"Voice navigation"} />
            </ListItemButton>
          </ListItem>
        </List>
      </>
    </Box>
  )
}

type PropsPanel = {
  onClick: () => void
}

export const AccessibilityPanel = ({ onClick }: PropsPanel) => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  return (
    <Container>
      <ImageWrapper>
        <Image
          onClick={toggleDrawer(true)}
          src={accessibilityLogo}
          alt="Accessibility panel button"
        />
      </ImageWrapper>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <IconWrapper>
          <CloseIcon
            sx={{
              cursor: "pointer",
              color: "rgba(0, 0, 0, 0.54);",
            }}
            onClick={toggleDrawer(false)}
          />
        </IconWrapper>
        <DrawerContent toggleDrawer={toggleDrawer(false)} onClick={onClick} />
      </Drawer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 50vh;
  right: 0;
`

const ImageWrapper = styled.div`
  height: 86px;
  width: 86px;
  cursor: pointer;
`
const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
  line-height: 40px;
  padding: 12px 0 0 12px;
`
const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
`
