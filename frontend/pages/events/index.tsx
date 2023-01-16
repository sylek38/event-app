import {
    dehydrate,
    QueryClient,
    UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import {
    fetchAPICategories,
    useAPICategories,
} from "../../api/categories/useAPICategories";
import { fetchAPIPosts, useAPIPosts } from "../../api/posts/useAPIPosts";
import { WallContext } from "../../context/WallContext";
import { PostsType, WallFiltersType } from "../../types/posts.type";
import { PostsResponse } from "../../types/responses/postsResponse.type";
import { EventsView } from "../../views/events/EventsView";
import { Layout } from "../../views/layout/Layout";

interface Props {
    csrf: string;
    wallFiltersSSR: WallFiltersType;
}

const Events = ({ csrf, wallFiltersSSR }: Props) => {
    // JAK COŚ SIĘ ROZJEBIE TO WRÓĆ TU BO TO PEWKO TUTAJ :D
    // const {
    //     data,
    //     isError,
    //     isLoading,
    //     isFetchingNextPage,
    //     hasNextPage,
    //     fetchNextPage,
    // } = useAPIPosts({ csrf }) as unknown as UseInfiniteQueryResult<
    //     PostsResponse,
    //     unknown
    // >;
    const {
        data: categoriesData,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
    } = useAPICategories({ csrf });

    const {
        data,
        isError,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useAPIPosts({ csrf });

    console.log(data, "WALL CONTEXT DATA");

    return (
        <WallContext.Provider
            value={{
                wallFiltersSSR,
                posts: data as unknown as PostsType[],
                categories: categoriesData?.results?.map(
                    (category) => category
                ),
                isError: isError || isCategoriesError,
                isLoading: isLoading || isCategoriesLoading,
                isFetchingNextPage,
                hasNextPage,
                fetchNextPage,
            }}
        >
            <Layout csrf={csrf ?? ""} withoutBackground withoutTopPadding>
                <EventsView />
            </Layout>
        </WallContext.Provider>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
    query,
    req,
}) => {
    const queryClient = new QueryClient();
    const csrf = req.cookies["csrf"] ?? "";

    await queryClient.prefetchQuery(
        ["authorization"],
        async () => await fetchAPIAuth({ csrf })
    );

    await queryClient.prefetchQuery(
        ["categories"],
        async () => await fetchAPICategories({ csrf })
    );

    await queryClient.prefetchQuery(["posts.infinite"], async () =>
        fetchAPIPosts({
            page: (query.page as string) ?? 1,
            city: (query.city as string) ?? "",
            category: (query.category as string) ?? "",
            date: (query.date as string) ?? "",
            peopleLimit: (query.peopleLimit as string) ?? "",
            csrf,
        })
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            csrf,
            wallFiltersSSR: {
                city: query.city ?? "",
                category: query.category ?? "",
                date: query.date ?? "",
                peopleLimit: query.peopleLimit ?? "",
            },
        },
    };
};

export default Events;
