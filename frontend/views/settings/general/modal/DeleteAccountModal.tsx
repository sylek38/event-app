import useTranslation from "next-translate/useTranslation";
import { Modal } from "../../../../components/modal/Modal";
import * as S from "./DeleteAccountModal.style";

interface Props {
    open: boolean;
    setOpen: (el: boolean) => void;
}

export const DeleteAccountModal = ({ open, setOpen }: Props) => {
    const { t } = useTranslation("settings");

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            title="Delete account"
            size="sm"
            actions={{
                primaryButtonText: t("delete_account_yes"),
                secondaryButtonText: t("delete_account_no"),
                danger: true,
            }}
        >
            <S.Content>
                <p>{t("delete_account_question")}</p>
                <p>{t("delete_account_info")}</p>
            </S.Content>
        </Modal>
    );
};
