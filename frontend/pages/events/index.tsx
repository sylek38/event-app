import { Button } from "../../components/button/Button";
import { Posts } from "../../components/posts/Posts";
import { Layout } from "../../views/layout/Layout";

import { BACKEND_URL } from "./../../config";
import { useEffect, useState } from "react";
import { FetchErrorsType, FetchUrl } from "../../api/types/Fetch";

const Events = () => {
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
        <Layout withoutBackground>
            <Posts posts={posts} />
        </Layout>
    );
};
export default Events;
