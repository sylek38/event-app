import type { NextPage } from "next";
import { HomeView } from "../views/home/HomeView";
import { Layout } from "../views/layout/Layout";

const Home: NextPage = () => (
    <Layout withoutBackground>
        <HomeView />
    </Layout>
);

export default Home;
