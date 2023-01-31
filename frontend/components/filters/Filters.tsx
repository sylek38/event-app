import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { FormEvent, ReactNode, SyntheticEvent } from "react";
import {
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormReset,
} from "react-hook-form";
import { FormTypes } from "../../views/events/components/PostFilters";
import { Button } from "../button/Button";
import * as S from "./Filters.style";

interface Props {
    children?: ReactNode;
    resetFiltersFunction?: () => void;
}

export const Filters = ({ children, resetFiltersFunction }: Props) => {
    const { t } = useTranslation("global");

    return (
        <>
            <S.Container>
                {t("filters")} <img src="/icons/filterIcon.svg" />
                <Button
                    variant="gray"
                    size="sm"
                    onClick={() => resetFiltersFunction?.()}
                >
                    {t("clear")}
                </Button>
            </S.Container>
            {children}
        </>
    );
};
