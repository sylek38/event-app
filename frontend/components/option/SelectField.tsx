import { ChangeEventHandler, useEffect, useRef, useState } from "react";

import { Control, Path, UseFormRegister, Controller } from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import * as S from "./SelectField.style";
import React from "react";
import { GenerateDescription } from "../generateDescription/GenerateDescription";

const KEY_PREFIX = "select";

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    isError?: boolean;
    disabled?: boolean;
    required?: boolean;
    hideLabel?: boolean;
    fullWidth?: boolean;
    values?: string[];
    dark?: boolean;
}

export function Select<T>({
    id,
    values,
    fullWidth,
    hideLabel,
    dark,
    required,
    register,
    onChange,
    isError,
    disabled,
}: Props<T>) {
    const { t } = useTranslation("inputs");
    const Placeholder = t(`${KEY_PREFIX}.${id}_placeholder`);

    const [value, setValue] = useState(Placeholder);
    const [selected, setSelected] = useState(false);
    const [open, setOpen] = useState(false);

    const { ref, ...rest } = register(id, {
        setValueAs: (value: string) => value.trim(),
        required,
    });

    const handleClick = (value: any) => {
        setValue(value);
        setSelected(true);
    };

    const clickSelect = () => {
        setOpen(true);
    };

    return (
        <S.Container fullWidth={fullWidth} selected={selected}>
            <S.Label>
                {!hideLabel && <span>{t(`${KEY_PREFIX}.${id}_label`)}</span>}
            </S.Label>

            <S.Select
                dark={dark}
                onClick={clickSelect}
                defaultValue={""}
                isError={!!isError}
                ref={ref}
                {...rest}
            >
                <S.Option value="" disabled hidden>
                    {value}
                </S.Option>
                {values!.map((value: any, index: any): any => (
                    <S.Option
                        key={index}
                        onClick={() => {
                            handleClick(value);
                        }}
                    >
                        {value}
                    </S.Option>
                ))}
            </S.Select>
            <GenerateDescription
                id={id}
                keyPrefix={KEY_PREFIX}
                error={isError}
            />
        </S.Container>
    );
}
