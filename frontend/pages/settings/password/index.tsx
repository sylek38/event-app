import useTranslation from "next-translate/useTranslation";
import { SettingsView } from "../../../views/settings/SettingsView";
import { Layout } from "../../../views/layout/Layout";

const SettingsPassword = () => {
    const { t } = useTranslation("settings");

    return (
        <Layout
            small
            header={{
                title: t("heading"),
            }}
        >
            <SettingsView activeTab="password" />
        </Layout>
    );
};

export default SettingsPassword;
