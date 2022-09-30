import { Controller } from "react-hook-form"
import { Slider } from "@mui/material"

const CustomSlider = (props: any) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Slider
          {...props}
          onChange={onChange}
          value={value || props.defaultValue}
        />
      )}
    />
  )
}

export default CustomSlider
