import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { ReactNode } from "react";
import * as S from "./Filters.style";

interface Props {
    children: ReactNode;
}

export const Filters = ({ children }: Props) => {
    const { t } = useTranslation("global");

    return (
        <>
            <S.Title>
                {t("filters")} <img src="/icons/filterIcon.svg" />
            </S.Title>
            {children}
        </>
    );
};
