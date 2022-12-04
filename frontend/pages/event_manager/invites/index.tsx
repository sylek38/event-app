import useTranslation from "next-translate/useTranslation";
import { EventManagerView } from "../../../views/eventManager/EventManager";
import { Layout } from "../../../views/layout/Layout";

const EventManagerInvites = () => {
    const { t } = useTranslation("eventManager");

    return (
        <Layout
            header={{
                title: t("invites.heading"),
                description: t("heading_desc"),
            }}
        >
            <EventManagerView activeTab={"invites"} />
        </Layout>
    );
};

export default EventManagerInvites;
