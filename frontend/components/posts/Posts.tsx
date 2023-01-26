import * as S from "./Posts.style";
// import { Post } from "./post/Post";
import ViewportList from "react-viewport-list";
import { useMemo, useRef } from "react";
import { useLastItemRef } from "../../hooks/useLastItemRef";
import { Loader } from "../loader/Loader";
import { useWallContext } from "../../context/WallContext";
import { useAPIPosts } from "../../api/posts/useAPIPosts";
import { useAuth } from "../../context/UserContext";
import { postItemsMock } from "./postItemsMock";
import { Post } from "./post/Post";

export const Posts = () => {
    const {
        posts,
        isError,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useWallContext();

    const ref = useRef<HTMLDivElement>(null);
    const intObserver = useRef<IntersectionObserver>();
    const lastItemRef = useLastItemRef({
        isFetchingNextPage,
        intObserver,
        fetchNextPage,
        hasNextPage,
    });

    if (!isLoading && isError) return <>problem z pobraniem postów. mock</>;

    if (posts && posts.length <= 0) {
        return <>Nie znaleziono takich wydarzeń</>;
    }

    // if (data.length <= 0) {
    //     return <div>no posts found</div>;
    // }
    if (isLoading) return <Loader />;
    return (
        <S.Posts ref={ref}>
            <ViewportList items={posts} viewportRef={ref}>
                {(post, index) => {
                    if (index + 1 === posts.length) {
                        return (
                            <Post ref={lastItemRef} key={post?.id} {...post} />
                        );
                    }

                    return <Post key={post.id} {...post} />;
                }}
            </ViewportList>

            {isFetchingNextPage && <Loader />}
        </S.Posts>
        // <S.Posts>
        //     {postItemsMock.map((post) => (
        //         <Post {...post} />
        //     ))}
        // </S.Posts>
    );
};
