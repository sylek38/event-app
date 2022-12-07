import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs/text/TextInput";
import { Tabs } from "../../components/tabs/Tabs";
import { Routes } from "../../routes/Routes";
import { Password } from "./password/Password";
import { General } from "./general/General";
import React from "react";

interface FormTypes {
    input: string;
}

interface Props {
    activeTab: string;
}

export const SettingsView = ({ activeTab }: Props) => {
    const { register, control } = useForm<FormTypes>();

    const { t } = useTranslation("global");
    return (
        <>
            <Tabs
                activeTab={activeTab}
                tabElements={[
                    {
                        index: "1",
                        title: t("tabs.general"),
                        text: "general",
                        href: Routes.SETTINGS_GENERAL,
                    },
                    {
                        index: "2",
                        title: t("tabs.password"),
                        text: "password",
                        href: Routes.SETTINGS_PASSWORD,
                    },
                ]}
                panels={[
                    { id: "1", Content: <General /> },
                    { id: "2", Content: <Password /> },
                ]}
            />
        </>
    );
};
