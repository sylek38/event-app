import useTranslation from "next-translate/useTranslation";
import { EventManagerView } from "../../../views/eventManager/EventManager";
import { Layout } from "../../../views/layout/Layout";

const EventManagerEvents = () => {
    const { t } = useTranslation("eventManager");

    return (
        <Layout
            header={{
                title: t("events.heading"),
                description: t("heading_desc"),
            }}
        >
            <EventManagerView activeTab="events" />
        </Layout>
    );
};

export default EventManagerEvents;
