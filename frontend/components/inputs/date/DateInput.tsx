import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import * as S from "./DateInput.style";

import { ChangeEventHandler, useEffect, useRef, useState } from "react";

import { Control, Path, UseFormRegister, Controller } from "react-hook-form";
import { GenerateDescription } from "../../generateDescription/GenerateDescription";

const KEY_PREFIX = "date";

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    hideLabel?: boolean;
    isError: boolean;
    customErrorPrefix?: string;
    textError?: boolean;
    required?: boolean;
    dark?: boolean;
    withoutDesc?: boolean;
    fullTime?: boolean;
}

export function DateInput<T>({
    id,
    register,
    control,
    hideLabel,
    onChange,
    isError,
    customErrorPrefix,
    textError,
    required,
    dark,
    withoutDesc,
    fullTime,
}: Props<T>) {
    const { t } = useTranslation("inputs");

    const { ref, ...rest } = register(id, {
        valueAsDate: true,
        required,
    });

    const today = new Date();
    const minDate = today.toISOString().slice(0, -8);
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear());
    maxDate.setMonth(today.getMonth() + 12);
    maxDate.setHours(today.getHours() + 1);

    return (
        <S.Container withoutDesc={withoutDesc}>
            {!hideLabel && (
                <S.Label>
                    <span>{t(`${KEY_PREFIX}.${id}_label`)}</span>
                </S.Label>
            )}

            <S.DateInput
                type={fullTime ? "datetime-local" : "date"}
                isError={isError}
                dark={dark}
                className="datepicker"
                min={minDate}
                max={maxDate.toISOString().slice(0, -8)}
                ref={ref}
                {...rest}
            />

            {!withoutDesc && (
                <GenerateDescription
                    id={id}
                    keyPrefix={KEY_PREFIX}
                    customErrorPrefix={customErrorPrefix}
                    textError={textError}
                    error={isError}
                />
            )}
        </S.Container>
    );
}
