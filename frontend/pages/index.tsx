import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../views/layout/Layout";
import { Login } from "../views/login/Login";
import { Register } from "../views/register/Register";

const Home: NextPage = () => (
    // <Login />
    <Register />
    // <Layout></Layout>
);

export default Home;
