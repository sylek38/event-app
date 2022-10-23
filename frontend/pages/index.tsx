import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../views/layout/Layout";

const Home: NextPage = () => (
    <Layout>
        <span>Tu będzie logowanie strony. Przejdź do: </span>
        <Link href="/events">/events</Link>
    </Layout>
);

export default Home;
