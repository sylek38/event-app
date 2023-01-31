import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FetchUrl } from "../../api/types/Fetch";
import { postItemsMock } from "../../components/posts/postItemsMock";
import { BACKEND_URL } from "../../config";
import { UserType } from "../../types/posts.type";
import { SinglePost } from "./components/SinglePost";

interface PostData {
    id: string;
    user: UserType;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    imageUrl: string;
    map: string;
    width?: number;
    date: Date;
}

export const PostView = () => {
    const router = useRouter();

    const [posts, setPosts] = useState<PostData[]>([]);

    // useEffect(() => {
    //     async function fetchPosts() {
    //         try {
    //             const data = await fetch(`${BACKEND_URL}${FetchUrl.POSTS}`, {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             });

    //             if (data.status == 200) {
    //             }

    //             const posts = await data.json();
    //             setPosts(posts);
    //         } catch (err) {
    //             console.log(err);
    //             throw err;
    //         }
    //     }

    //     fetchPosts();
    // }, []);

    const eventId = router.query.eventId;
    // const postData = posts.filter((postData) => postData._id === eventId);

    return <div>elko</div>;
};
