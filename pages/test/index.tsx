import { Alert, Slider } from "@mui/material"
import { GetStaticProps } from "next"
import { ReactElement, useEffect, useState } from "react"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"

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

const Test = (): ReactElement | null => {
  const [alertIsOpen, setAlertIsOpen] = useState(true)
  const [assessments, setAssessments] = useState([])
  const session = useSession()
  console.log("session", session)
  console.log("env", process.env.HOST)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.HOST}/api/v1/assessments`)
      const req = await res.json()

      console.log("Data", req)
    }

    fetchData()
  }, [])

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
