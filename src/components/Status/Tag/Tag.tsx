import React from "react";
import { StyledTag } from "./styles";

export interface TagProps {
    children: React.ReactNode;
    variant?: "small" | "medium";
}

const Tag: React.FC<TagProps> = ({ children, variant = "medium" }) => {
    return (
        <StyledTag variant={variant}>
            {children}
        </StyledTag>
    );
}

export default Tag;