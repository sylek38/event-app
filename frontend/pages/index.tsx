import type { GetServerSideProps, NextPage } from "next";
import { fetchAPIAuth } from "../api/auth/useAPIAuth";
import { LoginView } from "../views/login/LoginView";

const Home: NextPage = () => <LoginView />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const csrf = req.cookies["csrf"] ?? "";

    try {
        const auth = await fetchAPIAuth({ csrf });
        // if (auth) {
        //     return {
        //         redirect: {
        //             destination: "/events",
        //             permanent: false,
        //         },
        //     };
        // }
    } catch (err) {
        delete req.cookies["csrf"];
        console.log(err);
    }

    return { props: {} };
};

export default Home;
