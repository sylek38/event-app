import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { KeyboardEvent, RefObject, useRef, useState } from "react";
import { Routes } from "../../routes/Routes";
import { Hr } from "../hr/Hr";
import { Tab } from "./tab/Tab";
import { TabPanel } from "./tabPanel/TabPanel";
import * as S from "./Tabs.style";

const DEFAULT_TAB = "1";

type PanelProps = {
    id: string;
    Content: JSX.Element;
};

// Provide text & href if url has to change

interface TabElementsProps {
    index: string;
    title: string;
    text?: string;
    href?: Routes;
}

interface TabElementsWithRef extends TabElementsProps {
    ref: RefObject<HTMLAnchorElement> | RefObject<HTMLButtonElement>;
}

// Provide activeTab if url has to change

interface Props {
    panels: PanelProps[];
    activeTab?: string;
    tabElements: TabElementsProps[];
}

export const Tabs = ({ panels, activeTab, tabElements }: Props) => {
    const { t } = useTranslation("global");
    const { push } = useRouter();
    const activeTabIndex = tabElements.find(
        (tab) => tab.text === activeTab
    )?.index;

    const [selectedTab, setSelectedTab] = useState(
        activeTabIndex ?? DEFAULT_TAB
    );

    const tabElementsWithRef: TabElementsWithRef[] = tabElements.map((tab) => ({
        ...tab,
        ref: useRef(null),
    }));

    const handleClick = (index: string) => setSelectedTab(index);

    const handleNextTab = (
        firstTabInRound: string,
        nextTab: string,
        lastTabInRound: string
    ) => {
        const tabToSelect =
            selectedTab === lastTabInRound ? firstTabInRound : nextTab;

        tabElementsWithRef[+tabToSelect - 1].ref.current?.focus();

        // If tabs are gonna change url
        if (activeTab) {
            push(`/${tabElementsWithRef[+selectedTab - 1].href}`);
        } else {
            setSelectedTab(String(tabToSelect));
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        const tabCount = String(tabElementsWithRef.length);

        if (e.key === "ArrowLeft") {
            const last = tabCount;
            const next = String(+selectedTab - 1);
            const first = "1";
            handleNextTab(last, next, first);
        }

        if (e.key === "ArrowRight") {
            const first = "1";
            const next = String(+selectedTab + 1);
            handleNextTab(first, next, tabCount);
        }
    };

    return (
        <section>
            <S.TabList
                role="tablist"
                aria-label={t("tabs.event_manager_tabs")}
                onKeyDown={handleKeyPress}
            >
                {/* TABS */}
                {tabElementsWithRef.map((tab) => (
                    <Tab
                        key={tab.index}
                        id={`tab-${tab.index}`}
                        tabPanelId={`tabPanelId-${tab.index}`}
                        index={tab.index}
                        href={tab.href}
                        handleTabChange={handleClick}
                        selectedTab={selectedTab}
                        title={tab.title}
                        tabRef={tab.ref}
                    />
                ))}
            </S.TabList>

            <Hr />

            {/* PANELS */}
            {tabElementsWithRef.map((panel) => (
                <TabPanel
                    key={panel.index}
                    id={`tabPanel-${panel.index}`}
                    tabId={`tab-${panel.index}`}
                    tabIndex={panel.index}
                    selectedTab={selectedTab}
                    panelContent={
                        panels.find(
                            (panelContent) => panelContent.id === panel.index
                        )?.Content
                    }
                ></TabPanel>
            ))}
        </section>
    );
};
