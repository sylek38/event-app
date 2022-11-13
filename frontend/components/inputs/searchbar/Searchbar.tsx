import { ChangeEventHandler, useState } from "react";
import {
    Control,
    Path,
    UseFormRegister,
    Validate,
    ValidationRule,
} from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import * as S from "./Searchbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props<T> {
    id: Path<NonNullable<T>>;
    isError?: boolean;
    type?: "text";
    placeholder?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    minLength?: number;
    maxLength?: number;
    blackVariant?: boolean;
}

export function Search<T>({
    id,
    isError,
    type,
    placeholder,
    disabled,
    fullWidth,
    minLength,
    maxLength,
    blackVariant,
}: Props<T>) {
    const { t } = useTranslation("inputs");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [search, setSearch] = useState(message);

    const handleChange = (e: any) => {
        setMessage(e.target.value);
    };

    const handleClick = () => {
        setSearch(message);
        console.log(message);
    };

    return (
        <>
            <S.Container fullWidth={fullWidth} blackVariant={blackVariant}>
                <S.Searchbar
                    type={type}
                    placeholder={placeholder ? t(`text_${id}`) : undefined}
                    onChange={handleChange}
                    minLength={minLength}
                    maxLength={maxLength}
                ></S.Searchbar>
                <S.Button onClick={handleClick}>
                    {" "}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                </S.Button>
            </S.Container>
        </>
    );
}
