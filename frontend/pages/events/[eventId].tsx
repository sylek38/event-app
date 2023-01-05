import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import { Layout } from "../../views/layout/Layout";
import { PostView } from "../../views/singlePost/PostView";

interface Props {
    csrf: string;
}

const Event = ({ csrf }: Props) => (
    <Layout csrf={csrf}>
        <PostView />
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

export default Event;
