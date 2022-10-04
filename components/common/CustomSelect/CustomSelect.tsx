import { MenuItem, Select } from "@mui/material"
import { Controller } from "react-hook-form"

export default function CustomSelect() {
  return (
    <Controller
      name="level"
      defaultValue={""}
      //control={control}
      render={({ field }) => (
        <Select labelId="level-label" {...field}>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </Select>
      )}
    />
  )
}
