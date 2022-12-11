import type { GetServerSideProps, NextPage } from "next";
import { useAPISignIn } from "../api/auth/useAPISignIn";
import { LoginView } from "../views/login/LoginView";

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
