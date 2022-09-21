import CustomTextField from '../../components/common/CustomTextField'
import { useForm } from 'react-hook-form'
import CustomButton from '../../components/common/CustomButton'
import { signIn, signOut } from 'next-auth/react'
import Router from 'next/router'

const Login = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = async (data: any) => {
    const response = await signIn('credentials', {
      username: 'admin',
      password: 'admin',
      redirect: false,
    })

    if (response?.ok) {
      Router.push('/admin')
    }

    console.log('signIn', response)
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextField
          control={control}
          name="email"
          label="E-mail address"
          type="email"
          variant="outlined"
          sx={{ margin: '15px 0' }}
        />
        <CustomTextField
          control={control}
          name="phone"
          label="Phone"
          type="phone"
          variant="outlined"
        />

        <CustomButton
          variant="outlined"
          type="submit"
          sx={{ marginTop: '15px' }}
        >
          Submit
        </CustomButton>
      </form>
      <button
        onClick={() => {
          signOut()
        }}
      >
        signout
      </button>
    </>
  )
}

export default Login
