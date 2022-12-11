import Link from "next/link";
import { MouseEventHandler, RefObject } from "react";

import * as S from "./Tab.style";

interface Props {
    id: string;
    index: string;
    selectedTab: string;
    tabPanelId: string;
    title: string;
    href?: string;
    handleTabChange: (el: string) => void;
    tabRef: RefObject<HTMLAnchorElement> | RefObject<HTMLButtonElement>;
}

export const Tab = ({
    id,
    index,
    selectedTab,
    tabPanelId,
    title,
    handleTabChange,
    tabRef,
    href,
}: Props) => {
    const handleTabClick: MouseEventHandler<HTMLLIElement> = () =>
        handleTabChange(index);

    return (
        <li role="presentation" onClick={handleTabClick}>
            {href ? (
                <Link href={href} passHref>
                    <S.LinkTab
                        role="tab"
                        id={id}
                        aria-selected={selectedTab === index}
                        aria-controls={tabPanelId}
                        tabIndex={selectedTab === index ? 0 : -1}
                        ref={tabRef as RefObject<HTMLAnchorElement>}
                        isSelected={selectedTab === index}
                    >
                        {title}
                    </S.LinkTab>
                </Link>
            ) : (
                <S.ButtonTab
                    role="tab"
                    id={id}
                    aria-selected={selectedTab === index}
                    aria-controls={tabPanelId}
                    tabIndex={selectedTab === index ? 0 : -1}
                    ref={tabRef as RefObject<HTMLButtonElement>}
                    isSelected={selectedTab === index}
                >
                    {title}
                </S.ButtonTab>
            )}
        </li>
    );
};
