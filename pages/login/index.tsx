import CustomTextField from '../../components/common/CustomTextField'
import { useForm } from 'react-hook-form'
import CustomButton from '../../components/common/CustomButton'
import { signIn } from 'next-auth/react'

const Login = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    const signingIn = signIn('credentials', {
      username: 'admin',
      password: 'ds',
    })

    console.log('signIn', signingIn)
    console.log(data)
  }

  return (
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

      <CustomButton variant="outlined" type="submit" sx={{ marginTop: '15px' }}>
        Submit
      </CustomButton>
    </form>
  )
}

export default Login
