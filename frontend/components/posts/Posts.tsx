import * as S from "./Posts.style";
// import { Post } from "./post/Post";
import ViewportList from "react-viewport-list";
import { useCallback, useMemo, useRef } from "react";
import { useLastItemRef } from "../../hooks/useLastItemRef";
import { Loader } from "../loader/Loader";
import { useWallContext } from "../../context/WallContext";
import { Post } from "./post/Post";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export const Posts = () => {
    const { t } = useTranslation("global");
    const { query, push, pathname } = useRouter();
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
    // const lastItemRef = useLastItemRef({
    //     isFetchingNextPage,
    //     intObserver,
    //     fetchNextPage,
    //     hasNextPage,
    // });
    const lastItemRef = useCallback(
        (item: HTMLAnchorElement) => {
            if (isFetchingNextPage) return;

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((items) => {
                console.log(hasNextPage);

                if (items[0].isIntersecting && hasNextPage) {
                    // fetchNextPage();
                    const { page } = query;
                    let currentQuery = { ...query };
                    currentQuery = {
                        ...currentQuery,
                        page: page && (+page + 1).toString(),
                    };

                    push(
                        {
                            pathname,
                            query: { ...currentQuery },
                        },
                        undefined,
                        { shallow: true }
                    );
                }
            });

            if (item) intObserver.current.observe(item);
        },
        [isFetchingNextPage, fetchNextPage, hasNextPage]
    );

    const currentPosts =
        posts && posts.pages.length > 0
            ? posts.pages.map((item) => item.results).flat()
            : [];

    if (!isLoading && isError) return <>problem z pobraniem postów. mock</>;

    if (!isLoading && currentPosts.length === 0) {
        return (
            <S.NotFound>
                <span>{t("results_not_found.title")}</span>
                <p>{t("results_not_found.desc")} </p>
                <span>¯\_(ツ)_/¯</span>
            </S.NotFound>
        );
    }

    if (isLoading)
        return (
            <S.LoaderContainer>
                <Loader />
            </S.LoaderContainer>
        );

    return (
        <S.Posts ref={ref}>
            {currentPosts.length > 0 ? (
                <>
                    <ViewportList
                        items={currentPosts}
                        viewportRef={ref}
                        scrollThreshold={4}
                    >
                        {(post, index) => {
                            if (index + 1 === currentPosts?.length) {
                                return (
                                    <Post
                                        ref={lastItemRef}
                                        key={post?.id}
                                        {...post}
                                    />
                                );
                            }

                            return <Post key={post.id} {...post} />;
                        }}
                    </ViewportList>

                    {isFetchingNextPage && <Loader />}
                </>
            ) : (
                <div>Pusta tablica</div>
            )}
        </S.Posts>
    );
};
