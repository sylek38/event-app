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
    children: ReactNode;
    reset: UseFormReset<FormTypes>;
}

export const Filters = ({ children, reset }: Props) => {
    const { t } = useTranslation("global");

    const resetValues = () => {
        reset({
            city: "",
            category: "",
            date: new Date().toISOString().substring(0, 10),
        });
    };

    return (
        <>
            <S.Title>
                {t("filters")} <img src="/icons/filterIcon.svg" />
                <Button variant="gray" size="sm" onClick={resetValues}>
                    Clear
                </Button>
            </S.Title>
            {children}
        </>
    );
};
