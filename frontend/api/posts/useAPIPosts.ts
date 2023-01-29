import { BACKEND_URL } from "../../config";
import { FetchUrl } from "../types/Fetch";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PostsResponse } from "../../types/responses/postsResponse.type";

interface Args {
    csrf: string;
}

interface WallSearchParams extends Args {
    category?: string;
    city?: string;
    date?: string;
    page?: string;
    signal?: AbortSignal;
}

export const fetchAPIPosts = async ({
    category,
    city,
    date,
    page = "1",
    csrf,
    signal,
}: WallSearchParams) => {
    // TODO: convert date and time from yyyy-MM-dd and HH:mm to epoch
    try {
        // return await fetchAPI(FetchUrl.POSTS, {
        //     csrf,
        //     signal,
        //     query: { page, category, city, date, peopleLimit },
        // });
        const data = await fetch(
            `${BACKEND_URL}${FetchUrl.POSTS}/infinite?category=${category}&city=${city}&date=${date}&page=${page}`,
            {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
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
    const { category, city, date, time } = query;

    return useInfiniteQuery<PostsResponse>(
        // ...useInfiniteQuery<Promise<any>>(
        ["posts.infinite", [category, city, date]],
        async ({ pageParam, signal }) =>
            fetchAPIPosts({
                category: (category as string) ?? "",
                city: (city as string) ?? "",
                date: (date as string) ?? "",
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
