import { ChangeEventHandler, useEffect, useRef, useState } from "react";

import {
    Control,
    Path,
    UseFormRegister,
    Controller,
    UseFormSetValue,
} from "react-hook-form";

import useTranslation from "next-translate/useTranslation";

import * as S from "./SelectInput.style";
import React from "react";
import { GenerateDescription } from "../../generateDescription/GenerateDescription";
import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingNode,
    offset,
    shift,
    size,
    useDismiss,
    useFloating,
    useFloatingNodeId,
    useInteractions,
    useRole,
} from "@floating-ui/react-dom-interactions";
import { ButtonSelect } from "./selectButton/SelectButton";
import { RadioItemSelect } from "./itemSelect/ItemSelect";

const KEY_PREFIX = "select";

export interface SelectItemProps {
    id: string;
    text: string;
}

interface Props<T> {
    id: Path<NonNullable<T>>;
    register: UseFormRegister<NonNullable<T>>;
    control: Control<NonNullable<T>>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    setValue: UseFormSetValue<NonNullable<T>>;
    titleItem: string;
    isError?: boolean;
    disabled?: boolean;
    required?: boolean;
    hideLabel?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
    items: SelectItemProps[];
    dark?: boolean;
    withoutDesc?: boolean;
}

export function SelectInput<T>({
    id,
    items,
    fullWidth,
    hideLabel,
    dark,
    required,
    loading,
    setValue,
    register,
    onChange,
    isError,
    disabled,
    titleItem,
    withoutDesc,
}: Props<T>) {
    const { t } = useTranslation("inputs");
    const ref = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);

    const nodeId = useFloatingNodeId();
    const returnRegister = register(id, {
        required,
        disabled,
    });

    const { context, floating, reference, strategy, x, y } =
        useFloating<HTMLButtonElement>({
            open,
            onOpenChange: setOpen,
            middleware: [
                flip(),
                shift(),
                offset(5),
                size({
                    apply({ availableHeight, elements, rects }) {
                        Object.assign(elements.floating.style, {
                            width: `${rects.reference.width}px`,
                            maxHeight: `${availableHeight}px`,
                        });
                    },
                    padding: 20,
                }),
            ],
            nodeId,
            whileElementsMounted: autoUpdate,
        });

    const { getFloatingProps, getReferenceProps } = useInteractions([
        useRole(context, { role: "listbox" }),
        useDismiss(context),
    ]);

    return (
        <FloatingNode id={nodeId}>
            <S.Container fullWidth={fullWidth} withoutDesc={withoutDesc}>
                {!hideLabel && (
                    <S.Label>
                        <span>{t(`${KEY_PREFIX}.${id}_label`)}</span>
                    </S.Label>
                )}

                <ButtonSelect
                    id={id}
                    ref={ref}
                    setValue={setValue}
                    getReferenceProps={getReferenceProps}
                    reference={reference}
                    setOpen={setOpen}
                    titleItem={titleItem}
                    disabled={disabled}
                    loading={loading}
                    dark={dark}
                    open={open}
                    keyPrefix={KEY_PREFIX}
                    isError={isError}
                />
                {/* 
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
                {items?.map((value, index) => (
                    <S.Option
                        key={index}
                        onClick={() => {
                            handleClick(value);
                        }}
                    >
                        {value}
                    </S.Option>
                ))}
            </S.Select> */}

                {!withoutDesc && (
                    <GenerateDescription
                        id={id}
                        keyPrefix={KEY_PREFIX}
                        error={isError}
                    />
                )}
                <GenerateDescription
                    id={id}
                    keyPrefix={KEY_PREFIX}
                    error={isError}
                />
                {open && (
                    <FloatingFocusManager context={context}>
                        <S.Content
                            dark={dark}
                            {...getFloatingProps({
                                ref: floating,
                                style: {
                                    position: strategy,
                                    top: y ?? 0,
                                    left: x ?? 0,
                                },
                            })}
                        >
                            {items?.map((item) => (
                                <RadioItemSelect
                                    returnRegister={returnRegister}
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </S.Content>
                    </FloatingFocusManager>
                )}
            </S.Container>
        </FloatingNode>
    );
}
