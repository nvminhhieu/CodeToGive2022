import { Alert, Slider } from "@mui/material"
import { GetStaticProps } from "next"
import { ReactElement, useState } from "react"
import PageTitle from "../../components/Common/PageTitle"
import Layout from "../../components/Layout"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"

type Props = {
  data: any
}

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

const Test = ({ data }: Props): ReactElement | null => {
  const [alertIsOpen, setAlertIsOpen] = useState(true)
  console.log(data)
  const session = useSession()
  console.log("session", session)
  console.log("env", process.env.HOST)
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
      {alertIsOpen ? (
        <Alert
          variant="filled"
          severity="info"
          onClose={() => {
            console.log("close")
            setAlertIsOpen(false)
          }}
        >
          Finish all the tests and one of our colleagues will reach out to you
          with the further steps.
        </Alert>
      ) : null}
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
