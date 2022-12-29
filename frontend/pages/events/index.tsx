import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import { Button } from "../../components/button/Button";
import { Posts } from "../../components/posts/Posts";
import { Layout } from "../../views/layout/Layout";

interface Props {
    csrf: string;
}

const Events = ({ csrf }: Props) => (
    <Layout csrf={csrf ?? ""} withoutBackground>
        <Posts />
    </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const queryClient = new QueryClient();
    const csrf = req.cookies["csrf"] ?? "";

    await queryClient.prefetchQuery(
        ["authorization"],
        async () => await fetchAPIAuth({ csrf })
    );

    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
            csrf,
        },
    };
};

export default Events;
