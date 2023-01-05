import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import { FetchUrl } from "../../api/types/Fetch";
import { Filters } from "../../components/filters/Filters";
import { Posts } from "../../components/posts/Posts";
import { BACKEND_URL } from "../../config";
import { Layout } from "../../views/layout/Layout";

interface Props {
    csrf: string;
}

const Events = ({ csrf }: Props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await fetch(`${BACKEND_URL}${FetchUrl.POSTS}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (data.status == 200) {
                }

                const posts = await data.json();
                setPosts(posts);
            } catch (err) {
                console.log(err);
                throw err;
            }
        }

        fetchPosts();
    }, []);

    return (
        <Layout csrf={csrf ?? ""} withoutBackground withoutTopPadding>
            <Filters>Filtry go here</Filters>
            <Posts posts={posts} />
        </Layout>
    );
};

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
