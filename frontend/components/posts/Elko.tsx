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
    const lastItemRef = useCallback(
        (item: HTMLAnchorElement) => {
            if (isFetchingNextPage) return;

            if (intObserver.current) intObserver.current.disconnect();

            intObserver.current = new IntersectionObserver((items) => {
                console.log(hasNextPage);

                if (items[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
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
