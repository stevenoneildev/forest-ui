import React from "react";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { StyledSplitButton, StyledDivider } from "./styles";

export interface SplitButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick: () => void;
    style?: React.CSSProperties;
}

export interface DividerProps {
    variant: "primary" | "secondary" | "tertiary";
    size: "small" | "medium" | "large";
}

const SplitButton: React.FC<SplitButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    onClick,
    style,
}) => {
    return (
        <StyledSplitButton 
            variant={variant}
            size={size}
            onClick={onClick} 
            style={style}
        >
            <Button variant={variant} size={size} disabled={disabled} onClick={onClick} style={{ borderRadius: "0px", border: "none" }}>
                {children}
            </Button>
            <StyledDivider variant={variant} size={size} />
            <IconButton iconName="caretDown" buttonVariant={variant} buttonSize={size} disabled={disabled} onClick={onClick} buttonStyle={{ borderRadius: "0px", border: "none" }} />
        </StyledSplitButton>
    );
};

export default SplitButton;