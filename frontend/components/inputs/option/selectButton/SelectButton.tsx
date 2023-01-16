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
} from "@fortawesome/free-solid-svg-icons";

interface Props<T> {
    getReferenceProps: (
        userProps?: HTMLProps<Element> | undefined
    ) => Record<string, unknown>;
    id: Path<NonNullable<T>>;
    reference: (node: HTMLButtonElement | null) => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setValue: UseFormSetValue<NonNullable<T>>;
    titleItems: string | string[];
    disabled?: boolean;
    loading?: boolean;
    multi?: boolean;
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
        titleItems,
    }: Props<T>,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const { t } = useTranslation("inputs");

    const currentRef = useMemo(() => mergeRefs([reference, ref]), [reference]);

    return (
        <S.Wrapper
            type="button"
            disabled={disabled || loading}
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
                <S.Desc>{t(`select.${id}_placeholder`)}</S.Desc>
            )}

            <span>titleItems</span>
            <FontAwesomeIcon icon={faCaretDown} />
        </S.Wrapper>
    );
}

export const ButtonSelect = forwardRef(ButtonSelectInner) as unknown as <T>(
    props: Props<T> & { ref?: ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof ButtonSelectInner>;
