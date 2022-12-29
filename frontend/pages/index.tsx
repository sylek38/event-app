import type { GetServerSideProps, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { fetchAPIAuth } from "../api/auth/useAPIAuth";
import { useAPISignIn } from "../api/auth/useAPISignIn";
import { HomeView } from "../views/home/HomeView";
import { Layout } from "../views/layout/Layout";
import { LoginView } from "../views/login/Login";

const Home: NextPage = () => <LoginView />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const csrf = req.cookies["csrf"] ?? "";

    try {
        const auth = await fetchAPIAuth({ csrf });
        if (auth) {
            return {
                redirect: {
                    destination: "/events",
                    permanent: false,
                },
            };
        }
    } catch (err) {
        delete req.cookies["csrf"];
        console.log(err);
    }

    return { props: {} };
};

export default Home;
