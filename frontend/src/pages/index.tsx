import type { NextPage } from "next";
import { Posts } from "../components/posts/Posts";
import { Layout } from "../views/layout/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Posts />
		</Layout>
	);
};

export default Home;
