import type { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { fetchAPIAuth } from "../api/auth/useAPIAuth";
import { CONFIG_TITLE } from "../config";
import { LoginView } from "../views/login/LoginView";

const Home: NextPage = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <NextSeo title={`${t("sign_in_title")} - ${CONFIG_TITLE}`} />
            <LoginView />
        </>
    );
};

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
