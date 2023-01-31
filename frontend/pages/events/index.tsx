import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { fetchAPIAuth } from "../../api/auth/useAPIAuth";
import { fetchAPICategories } from "../../api/categories/useAPICategories";

import { EventsView } from "../../views/events/EventsView";
import { Layout } from "../../views/layout/Layout";

interface Props {
    csrf: string;
}

const Events = ({ csrf }: Props) => {
    return (
        <Layout csrf={csrf ?? ""} withoutBackground withoutTopPadding>
            <EventsView />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            csrf,
        },
    };
};

export default Events;
