import CustomTextField from "../../components/Common/CustomTextField/CustomTextField"
import { useForm } from "react-hook-form"
import CustomButton from "../../components/Common/CustomButton/CustomButton"
import Layout from "../../components/Layout"
import CustomSlider from "../../components/Common/CustomSlider/CustomSlider"

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
]

const Test = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField
          control={control}
          name="email"
          label="E-mail address"
          type="email"
          variant="outlined"
          sx={{ margin: "15px 0" }}
        />
        <CustomTextField
          control={control}
          name="phone"
          label="Phone"
          type="phone"
          variant="outlined"
        />
        <CustomSlider
          name="slider_value"
          control={control}
          aria-label="Temperature"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={1}
          max={5}
        />

        <CustomButton
          variant="contained"
          color="success"
          type="submit"
          sx={{ marginTop: "15px" }}
        >
          Submit
        </CustomButton>
      </form>
    </Layout>
  )
}

export default Test
