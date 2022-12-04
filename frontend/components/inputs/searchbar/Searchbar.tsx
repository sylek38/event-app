mport { ChangeEvent, ChangeEventHandler, useState } from "react";
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
    register: UseFormRegister<NonNullable<T>>;
    isError?: boolean;
    type?: "text";
    placeholder?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    minLength?: number;
    maxLength?: number;
    blackVariant?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLButtonElement>) => void;
}

export function Search<T>({
    id,
    register,
    isError,
    type,
    placeholder,
    disabled,
    fullWidth,
    blackVariant,
}: Props<T>) {
    const { t } = useTranslation("inputs");
    const [message, setMessage] = useState("");
    const [search, setSearch] = useState(message);

    const handleChange = (e: any) => {
    blackVariant,
    onChange,
}: Props<T>) {
    const { t } = useTranslation("inputs");
    const [message, setMessage] = useState("");
    const [search, setSearch] = useState(message);

    const handleSearch = (e: any) => {
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
                ></S.Searchbar>
                <S.Button /*onClick={!register ? onChange : undefined} */
                >
                    {" "}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                </S.Button>
            </S.Container>
        </>
    );
}
