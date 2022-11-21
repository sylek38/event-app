import { ChangeEventHandler } from "react";
import {
    Control,
    Path,
    UseFormRegister,
    Validate,
    ValidationRule,
} from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import * as S from "./TextInput.style";
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
    type?: "text" | "email" | "password";
    disabled?: boolean;
    hideLabel?: boolean;
    fullWidth?: boolean;
}

export function TextInput<T>({
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
    type = "text",
    disabled,
    hideLabel,
    fullWidth,
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
                {!hideLabel && <span>{t(`text_label_${id}`)}</span>}
            </S.Label>
            <S.TextInput
                type={type}
                isError={!!isError}
                placeholder={
                    placeholder ? t(`text_placeholder_${id}`) : undefined
                }
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
