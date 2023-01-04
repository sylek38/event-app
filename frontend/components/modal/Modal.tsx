import {
    FloatingFocusManager,
    FloatingPortal,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
} from "@floating-ui/react-dom-interactions";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneElement, ReactNode, useMemo, useState } from "react";

import { Button } from "../button/Button";
import * as S from "./Modal.style";

type ModalSize = "sm" | "md";

interface Props {
    children: ReactNode;
    open: boolean;
    setOpen: (el: boolean) => void;
    size?: ModalSize;
    title: string;
    actions?: {
        primaryButtonText: string;
        secondaryButtonText: string;
        primaryButtonAction?: () => void;
        secondaryButtonAction?: () => void;
        danger?: boolean;
    };
}

export const Modal = ({
    children,
    open,
    setOpen,
    size = "md",
    title,
    actions,
}: Props) => {
    const positionTopModal = useMemo(
        () =>
            typeof window !== "undefined"
                ? document.documentElement.scrollTop
                : 0,
        [open]
    );

    const { context, floating } = useFloating({
        open,
        onOpenChange: setOpen,
    });

    const { getFloatingProps } = useInteractions([
        useClick(context),
        useRole(context, { role: actions?.danger ? "alertdialog" : "dialog" }),
        useDismiss(context),
    ]);

    return (
        <FloatingPortal>
            <S.BackgroundOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
            />

            <S.Main
                style={{
                    top: positionTopModal,
                }}
            >
                <FloatingFocusManager context={context}>
                    <S.Wrapper
                        size={size}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                        }}
                        ref={floating}
                        {...getFloatingProps({
                            onClick: (e) => e.preventDefault(),
                        })}
                    >
                        <S.Header>
                            <h3>{title}</h3>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </S.Header>

                        <S.Container>{children}</S.Container>

                        {actions && (
                            <S.ActionsContainer>
                                <Button
                                    variant="gray"
                                    onClick={() => setOpen(false)}
                                >
                                    {actions?.secondaryButtonText}
                                </Button>
                                {actions?.danger ? (
                                    <Button
                                        variant="danger"
                                        onClick={() => setOpen(false)}
                                    >
                                        {actions?.primaryButtonText}
                                    </Button>
                                ) : (
                                    <Button
                                        variant="gradient"
                                        onClick={() => setOpen(false)}
                                    >
                                        {actions?.primaryButtonText}
                                    </Button>
                                )}
                            </S.ActionsContainer>
                        )}
                    </S.Wrapper>
                </FloatingFocusManager>
            </S.Main>
        </FloatingPortal>
    );
};
