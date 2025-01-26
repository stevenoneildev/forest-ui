import React from "react";
import { StyledTab, StyledTabGroup, StyledTabContainer, StyledTabContent } from "./styles";

export interface TabGroupProps {
    tabs: Array<{ label: string; content: React.ReactNode }>;
}

const TabGroup: React.FC<TabGroupProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    return (
        <StyledTabContainer>
            <StyledTabGroup>
                {tabs.map((tab, index) => (
                    <StyledTab
                        key={index}
                        selected={index === selectedTab}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab.label}
                    </StyledTab>
                ))}
            </StyledTabGroup>
            <StyledTabContent>
                {tabs[selectedTab].content}
            </StyledTabContent>
        </StyledTabContainer>
    );
};

export default TabGroup;