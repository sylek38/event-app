import { Posts } from "../../components/posts/Posts";
import { PostFilters } from "./components/PostFilters";

export const EventsView = () => (
    <>
        <PostFilters />
        <Posts />
    </>
);
