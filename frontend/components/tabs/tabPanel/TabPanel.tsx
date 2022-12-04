import { ReactNode } from "react";
import * as S from "./TabPanel.style";

interface Props {
    id: string;
    tabId: string;
    selectedTab: string;
    tabIndex: string;
    panelContent: ReactNode;
}

export const TabPanel = ({
    id,
    tabId,
    selectedTab,
    tabIndex,
    panelContent,
}: Props) => (
    <S.TabPanel
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        hidden={selectedTab !== tabIndex}
        tabIndex={0}
    >
        {panelContent}
    </S.TabPanel>
);
