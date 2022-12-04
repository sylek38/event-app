import useTranslation from "next-translate/useTranslation";
import { EventManagerView } from "../../../views/eventManager/EventManager";
import { Layout } from "../../../views/layout/Layout";

const EventManagerHistory = () => {
    const { t } = useTranslation("eventManager");

    return (
        <Layout
            header={{
                title: t("history.heading"),
                description: t("heading_desc"),
            }}
        >
            <EventManagerView activeTab="history" />
        </Layout>
    );
};

export default EventManagerHistory;
