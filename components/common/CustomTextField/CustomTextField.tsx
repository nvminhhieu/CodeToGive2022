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
  const propsObj = { ...props }
  delete propsObj.setValue
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={""}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <CusTextField
          value={value}
          onChange={({ target: { value } }) => {
            onChange(value)
            if (props?.setValue) props.setValue(props.name, value)
          }}
          {...propsObj}
        />
      )}
    />
  )
}
