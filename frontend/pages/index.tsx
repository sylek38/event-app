import type { GetServerSideProps, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useAPISignIn } from "../api/auth/useAPISignIn";
import { HomeView } from "../views/home/HomeView";
import { Layout } from "../views/layout/Layout";
import { LoginView } from "../views/login/Login";

const Home: NextPage = () => <LoginView />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    try {
        const auth = await useAPISignIn();
        if (auth) {
            return {
                redirect: {
                    destination: "/events",
                    permanent: false,
                },
            };
        }
    } catch (err) {
        console.log(err);
    }

    return { props: {} };
};

export default Home;
