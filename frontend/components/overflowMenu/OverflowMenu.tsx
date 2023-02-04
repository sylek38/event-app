import {
    arrow,
    autoUpdate,
    flip,
    offset,
    Placement,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useInteractions,
    useRole,
} from "@floating-ui/react-dom-interactions";
import { AnimatePresence, motion } from "framer-motion";
import {
    cloneElement,
    MutableRefObject,
    ReactElement,
    ReactNode,
    useRef,
    useState,
} from "react";

import * as S from "./OverflowMenu.style";

import { mergeRefs } from "../../functions/mergeRefs";

interface ChildrenProps {
    ref: MutableRefObject<unknown>;
}

interface Props {
    children: ReactElement;
    content: ReactNode;
    id: string;
    placement?: Placement;
}

export const OverflowMenu = ({
    children,
    content,
    id,
    placement = "bottom",
}: Props) => {
    const [open, setOpen] = useState(false);
    const refArrow = useRef<HTMLDivElement>(null);

    const {
        context,
        floating,
        middlewareData,
        placement: currentPlacement,
        reference,
        strategy,
        x,
        y,
    } = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        middleware: [
            offset(12),
            flip(),
            shift({ padding: 8 }),
            arrow({
                element: refArrow,
            }),
        ],
        whileElementsMounted: autoUpdate,
    });

    const ref = mergeRefs([
        reference,
        (children as unknown as ChildrenProps).ref,
    ]);

    const { getFloatingProps, getReferenceProps } = useInteractions([
        useClick(context),
        useDismiss(context),
        useFocus(context),
        useRole(context, { role: "menu" }),
    ]);

    return (
        <>
            {cloneElement(children, {
                ref,
                ...children.props,
                ["data-testid"]: `overflow-menu-trigger_${id}`,
                ...getReferenceProps({
                    onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    },
                }),
            })}

            <AnimatePresence>
                {open && (
                    <S.Wrapper
                        data-testid={`overflow-menu_${id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-placement={currentPlacement}
                        transition={{ ease: "easeOut", duration: 0.25 }}
                        ref={floating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }}
                        {...getFloatingProps()}
                    >
                        <S.MenuArrow
                            ref={refArrow}
                            style={{
                                position: strategy,
                                top:
                                    currentPlacement === "bottom" ||
                                    currentPlacement === "right" ||
                                    currentPlacement === "left"
                                        ? middlewareData.arrow?.y ?? 0
                                        : undefined,
                                bottom:
                                    currentPlacement === "top" ||
                                    currentPlacement === "right" ||
                                    currentPlacement === "left"
                                        ? middlewareData.arrow?.y ?? 0
                                        : undefined,
                                left:
                                    currentPlacement === "right" ||
                                    currentPlacement === "top" ||
                                    currentPlacement === "bottom"
                                        ? middlewareData.arrow?.x ?? 0
                                        : undefined,
                                right:
                                    currentPlacement === "left" ||
                                    currentPlacement === "top" ||
                                    currentPlacement === "bottom"
                                        ? middlewareData.arrow?.x ?? 0
                                        : undefined,
                            }}
                        />
                        {content}
                    </S.Wrapper>
                )}
            </AnimatePresence>
        </>
    );
};
