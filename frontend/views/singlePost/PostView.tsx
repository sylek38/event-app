import { useRouter } from "next/router";
import { postItemsMock } from "../../components/posts/postItemsMock";
import { SinglePost } from "./components/SinglePost";

export const PostView = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const postData = postItemsMock.filter(
        (postData) => postData.id === eventId
    );

    return <SinglePost {...postData[0]} />;
};
