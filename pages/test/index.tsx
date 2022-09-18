import { GetStaticProps } from "next";
import { ReactElement } from "react";

type Props = {
  data: any;
};

const Test = ({ data }: Props): ReactElement | null => {
  console.log(data);
  return (
    <>
      <div className="">This is another test page test</div>
      <h1>{data?.message}</h1>
    </>
  );
};

export default Test;

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch(`${process.env.HOST}/api/v1/hello`);
  const response = await request.json();

  return {
    props: {
      data: response,
    },
  };
};
