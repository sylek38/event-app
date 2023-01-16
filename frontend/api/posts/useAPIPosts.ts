import { BACKEND_URL } from "../../config";
import { FetchUrl } from "../types/Fetch";
import {
    useInfiniteQuery,
    UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { useAuth } from "../../context/UserContext";
import { useRouter } from "next/router";
import { fetchAPI } from "./fetchAPI";
import { PostsResponse } from "../../types/responses/postsResponse.type";

interface Args {
    csrf: string;
}

interface WallSearchParams extends Args {
    category: string;
    city: string;
    date: string;
    peopleLimit: string;
    page: string;
    signal?: AbortSignal;
}

export const fetchAPIPosts = async ({
    category,
    city,
    date,
    peopleLimit,
    page,
    csrf,
    signal,
}: WallSearchParams) => {
    try {
        // return await fetchAPI(FetchUrl.POSTS, {
        //     csrf,
        //     signal,
        //     query: { page, category, city, date, peopleLimit },
        // });
        const data = await fetch(
            `${BACKEND_URL}${FetchUrl.POSTS}?category=${category}&city=${city}&date=${date}&peopleLimit=${peopleLimit}&page=${page}`,
            {
                credentials: "include",
                headers: {
                    "Content-Type:": "application/json",
                    Authorization: `Bearer ${csrf}`,
                },
                signal,
            }
        );

        return data.json();
        // return await fetchAPI(FetchUrl.POSTS, {
        //     token: csrf,
        //     query: { city, category, date, peopleLimit },
        // });
    } catch (err) {
        if (typeof err === "string") {
            throw JSON.parse(err);
        }
        throw err;
        // console.log(err);
        // throw err;
    }
};

export const useAPIPosts = ({ csrf }: Args) => {
    const { query } = useRouter();
    const { category, city, date, peopleLimit } = query;

    return useInfiniteQuery<PostsResponse>(
        // ...useInfiniteQuery<Promise<any>>(
        ["posts.infinite", [category, city, date, peopleLimit]],
        async ({ pageParam, signal }) =>
            fetchAPIPosts({
                category: (category as string) ?? "",
                city: (city as string) ?? "",
                date: (date as string) ?? "",
                peopleLimit: (peopleLimit as string) ?? "",
                page: pageParam,
                csrf,
                signal,
            }),

        {
            getNextPageParam: (lastPage, page) => {
                if (lastPage.next) {
                    return page.length + 1;
                }
            },
        }
    );
};
