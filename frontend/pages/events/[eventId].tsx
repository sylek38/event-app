import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import {
    fetchAPISinglePost,
    useAPISinglePost,
} from "../../api/posts/singlePost/useAPISinglePost";

import { Layout } from "../../views/layout/Layout";
import { SinglePost } from "../../views/singlePost/components/SinglePost";

interface Props {
    csrf: string;
    id: string;
}

const Event = ({ csrf, id }: Props) => {
    // const { query } = useRouter();
    // const { id } = query;
    const { data, isLoading, isError } = useAPISinglePost({
        id: (id as string) ?? "",
    });
    return (
        <Layout csrf={csrf} withoutBackground small>
            <SinglePost
                {...data?.results}
                isLoading={isLoading}
                isError={isError}
            />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
    req,
    query,
}) => {
    const queryClient = new QueryClient();
    const csrf = req.cookies["csrf"] ?? "";

    await queryClient.prefetchQuery(
        ["authorization"],
        async () => await fetchAPIAuth({ csrf })
    );

    await queryClient.prefetchQuery(
        ["single.post"],
        async () => await fetchAPISinglePost({ id: query.id as string })
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            id: (query.eventId as string | undefined) ?? null,
            csrf,
        },
    };
};

export default Event;
