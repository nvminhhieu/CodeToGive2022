import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const CusBtn = styled(Button)<any>`
  border-radius: 8px;
  text-transform: none;
  font-weight: 700;
`

export default function CustomButton(props: any) {
  return <CusBtn {...props} />
}
