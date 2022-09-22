import { GetStaticProps } from "next"
import { ReactElement } from "react"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"

type Props = {
  data: any
}

const Test = ({ data }: Props): ReactElement | null => {
  console.log(data)
  return (
    <Layout>
      <PageTitle
        title="Assessment"
        description={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            <br />
            minima nihil unde nulla, modi corporis iure libero soluta saepe rem!
          </>
        }
      />
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
