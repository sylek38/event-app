import { InfiniteData } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { DEFAULT_CATEGORY } from "../config";
import { WallFiltersType } from "../types/posts.type";
import { PostsResponse } from "../types/responses/postsResponse.type";

interface Props {
    posts?: InfiniteData<PostsResponse>;
    wallFiltersSSR?: WallFiltersType;
    isError: boolean;
    isLoading: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    hasNextPage?: boolean;
}

export const WallContext = createContext<Props>({
    wallFiltersSSR: {
        city: "",
        category: DEFAULT_CATEGORY,
        date: "",
    },
    isError: false,
    isLoading: false,
    fetchNextPage: () => {},
    isFetchingNextPage: false,
});

export const useWallContext = () => useContext(WallContext);
