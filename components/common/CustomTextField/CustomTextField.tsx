import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Controller } from "react-hook-form"

const CusTextField = styled(TextField)`
  width: 100%;
  div {
    border-radius: 8px;
    background-color: white;
  }
`

export default function CustomTextField(props: any) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => <CusTextField onChange={onChange} {...props} />}
    />
  )
}
