import * as S from "./Posts.style";
import ViewportList from "react-viewport-list";
import { useCallback, useMemo, useRef } from "react";
import { Loader } from "../loader/Loader";
import { Post } from "./post/Post";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useAPIPosts } from "../../api/posts/useAPIPosts";
import { useAuth } from "../../context/UserContext";
import { StatusWrapper } from "../../views/status/statusWrapper/StatusWrapper";
import { ErrorView } from "../../views/status/ErrorView";

export const Posts = () => {
    const { t } = useTranslation("global");
    const ref = useRef<HTMLDivElement>(null);

    const { query, push, pathname } = useRouter();
    const { csrf } = useAuth();

    const {
        data,
        isError,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useAPIPosts({ csrf });

    // const currentPosts =
    //     posts && posts.pages.length > 0
    //         ? posts.pages.map((item) => item.results).flat()
    //         : [];

    const currentPosts = useMemo(() => {
        const current = data?.pages.map((item) => item.results).flat() ?? [];

        return [...new Map(current.map((m) => [m.id, m])).values()];
    }, [data]);

    const intObserver = useRef<IntersectionObserver>();
    console.log(ref, "ref");
    const lastItemRef = useCallback(
        (item: HTMLAnchorElement) => {
            if (isFetchingNextPage) return;

            if (hasNextPage) console.log("has next page...");

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((items) => {
                console.log(items[0].isIntersecting, "is intersectin");

                if (items[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            if (item) intObserver.current.observe(item);
        },
        [isFetchingNextPage, fetchNextPage, hasNextPage]
    );

    if (!isLoading && isError)
        return (
            <StatusWrapper>
                <ErrorView errorCode="500" />
            </StatusWrapper>
        );

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
        // <div ref={ref}>
        <S.Posts ref={ref}>
            {currentPosts.length > 0 ? (
                <ViewportList
                    items={currentPosts}
                    viewportRef={ref}
                    scrollThreshold={0.5}
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
            ) : (
                <div>{t("events_empty")}</div>
            )}
            {isFetchingNextPage && <Loader />}
        </S.Posts>
    );
};
