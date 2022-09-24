import CustomTextField from "../../components/Common/CustomTextField/CustomTextField"
import { useForm } from "react-hook-form"
import CustomButton from "../../components/Common/CustomButton/CustomButton"
import Layout from "../../components/Layout"

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
