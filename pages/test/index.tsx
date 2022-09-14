import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

type Props = {
	data: any;
};

const Test = ({ data }: Props): ReactElement | null => {
	return (
		<>
			<div className=''>Hello :)</div>
			<h1>{data}</h1>
		</>
	);
};

export default Test;

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			data: process.env.IS_CLOUD,
		},
	};
};
