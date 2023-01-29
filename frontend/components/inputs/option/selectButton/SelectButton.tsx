import useTranslation from "next-translate/useTranslation";
import {
    Dispatch,
    ForwardedRef,
    forwardRef,
    HTMLProps,
    SetStateAction,
    useMemo,
} from "react";
import { Path, UseFormSetValue } from "react-hook-form";

import * as S from "./SelectButton.style";

import { mergeRefs } from "../../../../functions/mergeRefs";
import { Loader } from "../../../loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleDown,
    faArrowDown,
    faCaretDown,
    faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

interface Props<T> {
    getReferenceProps: (
        userProps?: HTMLProps<Element> | undefined
    ) => Record<string, unknown>;
    id: Path<NonNullable<T>>;
    reference: (node: HTMLButtonElement | null) => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setValue: UseFormSetValue<NonNullable<T>>;
    titleItem: string | string[];
    disabled?: boolean;
    loading?: boolean;
    multi?: boolean;
    dark?: boolean;
    open: boolean;
    keyPrefix?: string;
    isError?: boolean;
}

export function ButtonSelectInner<T>(
    {
        disabled,
        getReferenceProps,
        id,
        loading,
        multi,
        reference,
        setOpen,
        setValue,
        titleItem,
        dark,
        open,
        keyPrefix,
        isError,
    }: Props<T>,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const { t } = useTranslation("inputs");

    const currentRef = useMemo(() => mergeRefs([reference, ref]), [reference]);

    return (
        <S.Wrapper
            type="button"
            dark={dark}
            disabled={disabled || loading}
            isError={isError}
            {...getReferenceProps({
                ref: currentRef,
                onClick(event) {
                    event.stopPropagation();
                    setOpen((val) => !val);
                },
            })}
        >
            {loading ? (
                <>
                    <Loader />
                    <S.Loading>{t("loading")}</S.Loading>
                </>
            ) : (
                <S.Desc>
                    {titleItem
                        ? titleItem
                        : t(`${keyPrefix}.${id}_placeholder`)}
                </S.Desc>
            )}

            <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
        </S.Wrapper>
    );
}

export const ButtonSelect = forwardRef(ButtonSelectInner) as unknown as <T>(
    props: Props<T> & { ref?: ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof ButtonSelectInner>;
