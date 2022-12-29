import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import * as S from "./DateInput.style";

import { ChangeEventHandler, useEffect, useRef, useState } from "react";

import { Control, Path, UseFormRegister, Controller } from "react-hook-form";

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    hideLabel?: boolean;
    isError: boolean;
}

export function DateInput<T>({
    id,
    register,
    control,
    hideLabel,
    onChange,
    isError,
}: Props<T>) {
    const { t } = useTranslation("inputs");

    const { ref, ...rest } = register(id, {
        // valueAsDate: true,
    });

    const today = new Date();
    const minDate = today.toISOString().slice(0, -8);
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear());
    maxDate.setMonth(today.getMonth() + 12);
    maxDate.setHours(today.getHours() + 1);

    return (
        <S.Container>
            <S.Label>
                {!hideLabel && <span>{t(`date_label_${id}`)}</span>}
            </S.Label>
            <S.DateInput
                type="datetime-local"
                isError={isError}
                className="datepicker"
                min={minDate}
                max={maxDate.toISOString().slice(0, -8)}
                required
                ref={ref}
                {...rest}
            />
            {isError && (
                <S.Error>
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    {t(`text_error_${id}`)}
                </S.Error>
            )}
        </S.Container>
    );
}
