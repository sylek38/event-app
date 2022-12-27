import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FetchUrl } from "../../api/types/Fetch";
import { postItemsMock } from "../../components/posts/postItemsMock";
import { BACKEND_URL } from "../../config";
import { SinglePost } from "./components/SinglePost";

interface PostData {
    _id: string;
    name: string;
    surname: string;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    photo: string;
    map: string;
    // avatar: string;
    width?: number;
    date: Date;
    createdAt: Date;
}

export const PostView = () => {
    const router = useRouter();

    const [posts, setPosts] = useState<PostData[]>([]);

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

    const eventId = router.query.eventId;
    const postData = posts.filter((postData) => postData._id === eventId);

    return <SinglePost {...postData[0]} />;
};
