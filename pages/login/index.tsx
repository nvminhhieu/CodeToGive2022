import CustomTextField from "../../components/common/CustomTextField/CustomTextField"
import { useForm } from "react-hook-form"
import CustomButton from "../../components/common/CustomButton/CustomButton"
import { signIn, signOut } from "next-auth/react"
import Router from "next/router"
import Layout from "../../components/Layout"
import styled from "@emotion/styled"

const Login = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = async (data: any) => {
    const response = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    })

    if (response?.ok) {
      Router.push("/admin")
    }

    console.log("signIn", response)
    console.log(data)
  }

  return (
    <Layout>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <CustomTextField
          control={control}
          name="username"
          label="Usernames"
          type="text"
          variant="outlined"
          sx={{ margin: "15px 0" }}
        />
        <CustomTextField
          control={control}
          name="password"
          label="Password"
          type="password"
          variant="outlined"
        />

        <CustomButton
          variant="contained"
          type="submit"
          sx={{ marginTop: "15px" }}
        >
          Login
        </CustomButton>
      </LoginForm>
    </Layout>
  )
}

export default Login

const LoginForm = styled.form`
  width: 50%;
  align-self: center;
  margin: auto 0;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  padding: 24px 22px;
  flex-direction: column;
  h1 {
    align-self: center;
    font-size: 54px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`
