import useTranslation from "next-translate/useTranslation";
import { Layout } from "../../views/layout/Layout";
import { UserView } from "../../views/user/UserView";

const User = () => {
    const { t } = useTranslation("global");

    return (
        <Layout small header={t("user_profile")}>
            <UserView />
        </Layout>
    );
};

export default User;
