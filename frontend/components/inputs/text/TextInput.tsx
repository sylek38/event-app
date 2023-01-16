import { ChangeEventHandler } from "react";
import {
    Control,
    Path,
    UseFormRegister,
    useWatch,
    Validate,
    ValidationRule,
} from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import * as S from "./TextInput.style";
import { GenerateDescription } from "../../generateDescription/GenerateDescription";

const KEY_PREFIX = "text";

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
    dark?: boolean;
    customErrorPrefix?: string;
    textError?: boolean;
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
    dark,
    customErrorPrefix,
    textError,
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

    const valueFromWatch = useWatch({ control, name: id });

    const length = valueFromWatch ? `${valueFromWatch}`.length : 0;

    return (
        <S.Container>
            <S.Label>
                {!hideLabel && <span>{t(`${KEY_PREFIX}.${id}_label`)}</span>}
            </S.Label>
            <S.TextInput
                type={type}
                isError={!!isError}
                placeholder={
                    placeholder
                        ? t(`${KEY_PREFIX}.${id}_placeholder`)
                        : undefined
                }
                dark={dark}
                ref={ref}
                {...rest}
            />

            <GenerateDescription
                id={id}
                keyPrefix={KEY_PREFIX}
                customErrorPrefix={customErrorPrefix}
                textError={textError}
                length={length}
                maxLength={maxLength}
                error={isError}
            />
        </S.Container>
    );
}
