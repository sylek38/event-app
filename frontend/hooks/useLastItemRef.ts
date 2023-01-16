import { MutableRefObject, useCallback } from "react";

interface Args {
    fetchNextPage: () => void;
    intObserver: MutableRefObject<IntersectionObserver | undefined>;
    isFetchingNextPage: boolean;
    hasNextPage?: boolean;
}

export const useLastItemRef = ({
    fetchNextPage,
    hasNextPage,
    intObserver,
    isFetchingNextPage,
}: Args) => {
    return useCallback(
        (
            item: HTMLDivElement | HTMLAnchorElement | HTMLButtonElement | null
        ) => {
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
};
