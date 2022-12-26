import useTranslation from "next-translate/useTranslation";
import { Tabs } from "../../components/tabs/Tabs";
import { Routes } from "../../routes/Routes";
import { EventsView } from "./events/EventsView";
import { HistoryView } from "./history/HistoryView";
import { InvitesView } from "./invites/InvitesView";

interface Props {
    activeTab: string;
}

export const EventManagerView = ({ activeTab }: Props) => {
    const { t } = useTranslation("global");

    return (
        <>
            <Tabs
                activeTab={activeTab}
                tabElements={[
                    {
                        index: "1",
                        title: t("tabs.invites"),
                        text: "invites",
                        href: Routes.EVENT_MANAGER_INVITES,
                    },
                    {
                        index: "2",
                        title: t("tabs.events"),
                        text: "events",
                        href: Routes.EVENT_MANAGER_EVENTS,
                    },
                    {
                        index: "3",
                        title: t("tabs.history"),
                        text: "history",
                        href: Routes.EVENT_MANAGER_HISTORY,
                    },
                ]}
                panels={[
                    { id: "1", Content: <InvitesView /> },
                    { id: "2", Content: <EventsView /> },
                    { id: "3", Content: <HistoryView /> },
                ]}
            />
        </>
    );
};
