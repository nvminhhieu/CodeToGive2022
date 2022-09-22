import { Alert } from "@mui/material"
import { GetStaticProps } from "next"
import { ReactElement, useState } from "react"

type Props = {
  data: any
}

const Test = ({ data }: Props): ReactElement | null => {
  const [alertIsOpen, setAlertIsOpen] = useState(true)
  return (
    <>
      {alertIsOpen && (
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
      )}
      <div className="">This is another test page test 2</div>
      <h1>{data?.message}</h1>
    </>
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
