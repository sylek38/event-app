import {
    arrow,
    autoUpdate,
    flip,
    FloatingPortal,
    offset,
    Placement,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
} from "@floating-ui/react-dom-interactions";
import { AnimatePresence } from "framer-motion";
import {
    cloneElement,
    MutableRefObject,
    ReactElement,
    useMemo,
    useRef,
    useState,
} from "react";
import { mergeRefs } from "../../functions/mergeRefs";
import * as S from "./Tooltip.style";

interface Props {
    children: ReactElement;
    placement: Placement;
    shiftValue?: "sidebar";
    text: string;
}

interface ChildrenProps {
    ref: MutableRefObject<unknown>;
}

export const Tooltip = ({
    children,
    placement,
    text,
    shiftValue = "sidebar",
}: Props) => {
    const [open, setOpen] = useState(false);
    const arrowRef = useRef<HTMLDivElement>(null);

    const {
        x,
        y,
        context,
        reference,
        floating,
        strategy,
        middlewareData,
        placement: currentPlacement,
    } = useFloating({
        open,
        onOpenChange: setOpen,
        placement,
        middleware: [
            flip(),
            offset(shiftValue === "sidebar" ? 0 : 16),
            arrow({ element: arrowRef }),
        ],
        whileElementsMounted: autoUpdate,
    });

    const { getFloatingProps, getReferenceProps } = useInteractions([
        useHover(context),
        useRole(context, { role: "tooltip" }),
        useDismiss(context),
        useFocus(context),
    ]);

    const ref = useMemo(
        () =>
            mergeRefs([reference, (children as unknown as ChildrenProps).ref]),
        [reference, children]
    );

    const styleValues = {
        position: strategy,
        top:
            currentPlacement === "bottom" ||
            currentPlacement === "right" ||
            currentPlacement === "left"
                ? middlewareData.arrow?.y ?? 0
                : undefined,
        right:
            currentPlacement === "left" ||
            currentPlacement === "top" ||
            currentPlacement === "bottom"
                ? middlewareData.arrow?.x ?? 0
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
    };

    return (
        <div>
            {cloneElement(children, {
                ref,
                ...children.props,
                ...getReferenceProps(),
            })}

            <FloatingPortal>
                <AnimatePresence>
                    {open && (
                        <S.Tooltip
                            ref={floating}
                            data-placement={currentPlacement}
                            style={{
                                position: strategy,
                                top: y ?? 0,
                                left: x ?? 0,
                            }}
                            animate={{ x: 50 }}
                            {...getFloatingProps()}
                        >
                            <div
                                ref={arrowRef}
                                className="tooltip-arrow"
                                style={styleValues}
                            />
                            {text}
                        </S.Tooltip>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </div>
    );
};
