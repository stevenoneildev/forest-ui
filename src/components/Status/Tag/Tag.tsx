import React from "react";
import { StyledTag } from "./styles";

export interface TagProps {
    children: React.ReactNode;
    variant?: "small" | "medium";
    color?: "neutral" | "accent";
}

const Tag: React.FC<TagProps> = ({ children, variant = "medium", color = "neutral" }) => {
    return (
        <StyledTag variant={variant} color={color}>
            {children}
        </StyledTag>
    );
}

export default Tag;