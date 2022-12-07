import useTranslation from "next-translate/useTranslation";
import { SettingsView } from "../../../views/settings/SettingsView";
import { Layout } from "../../../views/layout/Layout";

const SettingsGeneral = () => {
    const { t } = useTranslation("settings");

    return (
        <Layout
            small
            header={{
                title: t("heading"),
            }}
        >
            <SettingsView activeTab={"general"} />
        </Layout>
    );
};

export default SettingsGeneral;
