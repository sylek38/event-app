import * as S from "./Posts.style";
import ViewportList from "react-viewport-list";
import { useCallback, useMemo, useRef } from "react";
import { Loader } from "../loader/Loader";
import { Post } from "./post/Post";
import useTranslation from "next-translate/useTranslation";
import { useAPIPosts } from "../../api/posts/useAPIPosts";
import { useAuth } from "../../context/UserContext";

export const Posts = () => {
    const { t } = useTranslation("global");

    const { csrf } = useAuth();

    const {
        data,
        isError,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useAPIPosts({ csrf });

    const currentPosts = useMemo(() => {
        const current = data?.pages.map((item) => item.results).flat() ?? [];

        return [...new Map(current.map((m) => [m.id, m])).values()];
    }, [data]);

    const intObserver = useRef<IntersectionObserver>();
    const lastItemRef = useCallback(
        (item: HTMLAnchorElement) => {
            if (isFetchingNextPage) return;

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((items) => {
                if (items[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            if (item) intObserver.current.observe(item);
        },
        [isFetchingNextPage, fetchNextPage, hasNextPage]
    );

    if (!isLoading && isError) return <>problem z pobraniem postów</>;

    //     if (!isLoading && isError)
    //         return (
    //             <StatusWrapper>
    //                 <ErrorView errorCode="500" />
    //             </StatusWrapper>
    //         );

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
        <S.Posts>
            {currentPosts.length > 0 ? (
                <ViewportList items={currentPosts}>
                    {(post, index) => {
                        if (index === currentPosts?.length - 1) {
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
