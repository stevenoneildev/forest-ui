import React from "react";
import { StyledLinkButton } from "./styles";
export interface LinkButtonProps {
    buttonSize: "medium" | "small";
    buttonVariant: "accent" | "primary";
    children: React.ReactNode;
    onClick: () => void;
    href?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
    buttonSize,
    buttonVariant,
    children,
    onClick,
    href
}) => {
    return (
        <StyledLinkButton 
            as="a"
            buttonSize={buttonSize} 
            buttonVariant={buttonVariant} 
            onClick={onClick} 
            href={href}
        >
            {children}
        </StyledLinkButton>
    );
}

export default LinkButton;