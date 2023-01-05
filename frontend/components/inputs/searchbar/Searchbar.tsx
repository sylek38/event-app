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
import { ChangeEvent } from "react";

const KEY_PREFIX = "text_searchbar";

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

export function SearchInput<T>({
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

    return (
        <>
            <S.Container fullWidth={fullWidth} blackVariant={blackVariant}>
                <S.Searchbar
                    type={type}
                    placeholder={
                        placeholder
                            ? t(`${KEY_PREFIX}.${id}_placeholder`)
                            : undefined
                    }
                ></S.Searchbar>
                <S.Button /*onClick={!register ? onChange : undefined} */>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                </S.Button>
            </S.Container>
        </>
    );
}
