import { Placement } from "@floating-ui/core";

import Link from "next/link";
import { ReactNode } from "react";
import { Routes } from "../../../routes/Routes";
import * as S from "./OverflowMenuItem.style";
import { OverflowMenu } from "../OverflowMenu";

export interface OverflowMenuItemProps {
    id: string;
    text: string;
    active?: boolean;
    disabled?: boolean;
    divider?: boolean;
    href?: Routes;
    icon?: string;
    locale?: string;
    onClick?: () => void;
    stopPagination?: boolean;
}

export const OverflowMenuItem = ({
    active,
    disabled,
    divider,
    href,
    id,
    locale,
    onClick,
    stopPagination,
    text,
}: OverflowMenuItemProps) => {
    const generateItem = () => {
        if (href) {
            return (
                <S.Wrapper>
                    {divider && (
                        <hr className="hr" style={{ margin: "1.25rem 0" }} />
                    )}
                    {!disabled ? (
                        <Link
                            href={href}
                            locale={locale}
                            data-testid={`overflow_menu_item_${id}`}
                        >
                            {text}
                        </Link>
                    ) : (
                        <a>{text}</a>
                    )}
                </S.Wrapper>
            );
        }

        return (
            <S.Wrapper>
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
                    {text}
                </button>
            </S.Wrapper>
        );
    };

    return generateItem();
};
