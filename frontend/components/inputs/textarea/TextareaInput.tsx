import { ChangeEventHandler } from "react";
import {
    Control,
    Path,
    UseFormRegister,
    Validate,
    ValidationRule,
} from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import * as S from "./TextareaInput.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    isError?: boolean;
    minLength?: number;
    maxLength?: number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    pattern?: ValidationRule<RegExp>;
    placeholder?: boolean;
    required?: boolean;
    validate?: Validate<string>;
    disabled?: boolean;
    hideLabel?: boolean;
    fullWidth?: boolean;
    dark?: boolean;
    rows?: number;
    cols?: number;
}

export function TextareaInput<T>({
    id,
    register,
    control,
    isError,
    minLength,
    maxLength,
    onChange,
    pattern,
    placeholder,
    required,
    validate,
    disabled,
    hideLabel,
    fullWidth,
    dark,
    rows,
    cols,
}: Props<T>) {
    const { t } = useTranslation("inputs");

    const { ref, ...rest } = register(id, {
        disabled,
        setValueAs: (value: string) => value.trim(),
        onChange,
        validate,
        required,
        minLength,
        maxLength,
        pattern,
    });

    return (
        <S.Container fullWidth={fullWidth}>
            <S.Label>
                {!hideLabel && <span>{t(`textarea_label_${id}`)}</span>}
            </S.Label>
            <S.TextareaInput
                rows={rows}
                cols={cols}
                isError={!!isError}
                placeholder={
                    placeholder ? t(`textarea_placeholder_${id}`) : undefined
                }
                dark={dark}
                ref={ref}
                {...rest}
            />
        </S.Container>
    );
}
