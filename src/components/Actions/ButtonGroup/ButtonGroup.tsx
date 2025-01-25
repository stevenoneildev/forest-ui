import React from "react";
import { StyledButtonGroup } from "./styles";

export interface ButtonGroupProps {
    children: React.ReactNode;
    direction?: "row" | "column";
    size?: "small" | "medium" | "large";
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    direction = "row",
    size = "medium",
}) => {
    return (
        <StyledButtonGroup direction={direction} size={size}>
            {children}
        </StyledButtonGroup>
    );
};

export default ButtonGroup;