import { ReactNode } from "react";
import { Routes } from "../../routes/Routes";
import * as S from "./Modal.style";

import { Button } from "../button/Button";
import useTranslation from "next-translate/useTranslation";

interface AllProps {}

type Props = HrefProps | WithoutHrefProps;

interface HrefProps extends AllProps {
    href?: Routes;
    type?: never;
}

interface WithoutHrefProps extends AllProps {
    type?: "button" | "submit";
    href?: never;
}

export const Modal = ({}: Props) => {
    const { t } = useTranslation("settings");
    return (
        <S.modalOverlay>
            <S.modalContent>
                <S.modalHeader>{t("delete_account_question")}</S.modalHeader>
                <S.modalInfo>{t("delete_account_info")}</S.modalInfo>
                <S.modalButtons>
                    <Button>{t("delete_account_yes")}</Button>
                    <Button variant="gradient">{t("delete_account_no")}</Button>
                </S.modalButtons>
            </S.modalContent>
        </S.modalOverlay>
    );
};
