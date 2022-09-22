import { GetStaticProps } from "next"
import { ReactElement } from "react"
import Layout from "../../components/Layout"
import { useSession } from "next-auth/react"

type Props = {
  data: any
}

const Test = ({ data }: Props): ReactElement | null => {
  console.log(data)
  const session = useSession()
  console.log("session", session)
  return (
    <Layout>
      <div className="">This is another test page test 2</div>
      <h1>{data?.message}</h1>
    </Layout>
  )
}

export default Test

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch(`${process.env.HOST}/api/v1/hello`)
  const response = await request.json()

  return {
    props: {
      data: response,
    },
  }
}
