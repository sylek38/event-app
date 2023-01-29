import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { fetchAPIAuth } from "../../../api/auth/useAPIAuth";
import { EventManagerView } from "../../../views/eventManager/EventManagerView";
import { Layout } from "../../../views/layout/Layout";

interface Props {
    csrf: string;
}

const EventManagerEvents = ({ csrf }: Props) => {
    const { t } = useTranslation("eventManager");

    return (
        <Layout
            csrf={csrf}
            header={{
                title: t("events.heading"),
                description: t("heading_desc"),
            }}
        >
            <EventManagerView activeTab="events" />
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

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            csrf,
        },
    };
};

export default EventManagerEvents;
