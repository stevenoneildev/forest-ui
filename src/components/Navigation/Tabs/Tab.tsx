import React from "react";
import { StyledTab } from "./styles";
interface TabProps {
    label: string;
    value: string;
    selected: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, value, selected, onClick }) => {
    return (
        <StyledTab selected={selected} onClick={onClick}>
            {label}
        </StyledTab>
    );
};

export default Tab;