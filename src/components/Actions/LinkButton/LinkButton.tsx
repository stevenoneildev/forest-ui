import React from "react";
import { StyledLinkButton } from "./styles";
export interface LinkButtonProps {
    buttonSize: "medium" | "small";
    buttonVariant: "accent" | "primary";
    children: React.ReactNode;
    onClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
    buttonSize,
    buttonVariant,
    children,
    onClick
}) => {
    return (
        <StyledLinkButton buttonSize={buttonSize} buttonVariant={buttonVariant} onClick={onClick}>
            {children}
        </StyledLinkButton>);
}

export default LinkButton;