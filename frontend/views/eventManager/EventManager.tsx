import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { Filters } from "../../components/filters/Filters";
import { TextInput } from "../../components/inputs/text/TextInput";
import { Tabs } from "../../components/tabs/Tabs";
import { Routes } from "../../routes/Routes";
import { Events } from "./events/Events";
import { History } from "./history/History";
import { Invites } from "./invites/Invites";

interface FormTypes {
    input: string;
}

interface Props {
    activeTab: string;
}

export const EventManagerView = ({ activeTab }: Props) => {
    const { register, control } = useForm<FormTypes>();

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
                    { id: "1", Content: <Invites /> },
                    { id: "2", Content: <Events /> },
                    { id: "3", Content: <History /> },
                ]}
            />
        </>
    );
};
