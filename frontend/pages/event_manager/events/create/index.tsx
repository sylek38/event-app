import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { fetchAPIAuth } from "../../../../api/auth/useAPIAuth";
import {
    fetchAPICategories,
    useAPICategories,
} from "../../../../api/categories/useAPICategories";
import { EventCreatorView } from "../../../../views/eventCreator/EventCreatorView";
import { Layout } from "../../../../views/layout/Layout";

interface Props {
    csrf: string;
}

const EventManagerCreate = ({ csrf }: Props) => {
    const { t } = useTranslation("eventManager");

    return (
        <Layout
            small
            csrf={csrf}
            header={{
                title: t("creator.heading"),
            }}
        >
            <EventCreatorView />
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

export default EventManagerCreate;
