import NextAuth from 'next-auth';

const authOptions = () => {
	session: {
		strategy: 'jwt';
	}
};

export default NextAuth();
