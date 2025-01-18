import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick: () => void;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    onClick,
    disabled,
    style,
}) => {
    return (
        <StyledButton variant={variant} size={size} onClick={onClick} disabled={disabled} style={style}>
            {children}
        </StyledButton>
    );
};

export default Button;