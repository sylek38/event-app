import { Placement } from "@floating-ui/core";
import {
    mdiCheckboxBlankCircleOutline,
    mdiCheckboxMarkedCircle,
    mdiMenuRight,
} from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { ReactNode } from "react";

import { OverflowMenu } from "../OverflowMenu";
import style from "./OverflowMenuItem.module.scss";

import { RouteUrl } from "../../../configs/routes";

export interface OverflowMenuItemProps {
    id: string;
    text: string;
    active?: boolean;
    childItems?: { content: ReactNode; placement?: Placement };
    disabled?: boolean;
    divider?: boolean;
    href?: RouteUrl;
    icon?: string;
    locale?: string;
    onClick?: () => void;
    stopPagination?: boolean;
}

export const OverflowMenuItem = ({
    active,
    childItems,
    disabled,
    divider,
    href,
    icon,
    id,
    locale,
    onClick,
    stopPagination,
    text,
}: OverflowMenuItemProps) => {
    const generateItem = () => {
        if (childItems) {
            return (
                <div className={style.wrapper}>
                    {divider && (
                        <hr className="hr" style={{ margin: "1.25rem 0" }} />
                    )}
                    <button
                        disabled={disabled}
                        onClick={(e) => {
                            if (stopPagination) {
                                e.preventDefault();
                                e.stopPropagation();
                            }

                            !disabled ? onClick?.() : undefined;
                        }}
                        type="button"
                        data-testid={`overflow_menu_item_${id}`}
                    >
                        {icon && <Icon path={icon} />}
                        {text}
                        <Icon className="expand" path={mdiMenuRight} />
                    </button>
                </div>
            );
        }

        if (href) {
            return (
                <div className={style.wrapper}>
                    {divider && (
                        <hr className="hr" style={{ margin: "1.25rem 0" }} />
                    )}
                    {!disabled ? (
                        <Link
                            href={href}
                            locale={locale}
                            data-testid={`overflow_menu_item_${id}`}
                        >
                            {typeof active !== "undefined" ? (
                                active ? (
                                    <Icon
                                        className={
                                            style.mdiCheckboxMarkedCircle
                                        }
                                        path={mdiCheckboxMarkedCircle}
                                    />
                                ) : (
                                    <Icon
                                        className={
                                            style.mdiCheckboxBlankCircleOutline
                                        }
                                        path={mdiCheckboxBlankCircleOutline}
                                    />
                                )
                            ) : (
                                icon && <Icon path={icon} />
                            )}
                            {text}
                        </Link>
                    ) : (
                        <a>
                            {icon && <Icon path={icon} />}
                            {text}
                        </a>
                    )}
                </div>
            );
        }

        return (
            <div className={style.wrapper}>
                {divider && (
                    <hr className="hr" style={{ margin: "1.25rem 0" }} />
                )}
                <button
                    type="button"
                    disabled={disabled}
                    onClick={(e) => {
                        if (stopPagination) {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        !disabled ? onClick?.() : undefined;
                    }}
                    data-testid={`overflow_menu_item_${id}`}
                >
                    {typeof active !== "undefined" ? (
                        active ? (
                            <Icon
                                className={style.mdiCheckboxMarkedCircle}
                                path={mdiCheckboxMarkedCircle}
                            />
                        ) : (
                            <Icon
                                className={style.mdiCheckboxBlankCircleOutline}
                                path={mdiCheckboxBlankCircleOutline}
                            />
                        )
                    ) : (
                        icon && <Icon path={icon} />
                    )}

                    {text}
                </button>
            </div>
        );
    };

    if (!childItems) {
        return generateItem();
    }

    return (
        <OverflowMenu
            id={id}
            content={childItems.content}
            placement={childItems.placement}
        >
            {generateItem()}
        </OverflowMenu>
    );
};
