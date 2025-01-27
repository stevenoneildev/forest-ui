import React from 'react';
import { StyledTypography } from "./styles";

export interface TypographyProps {
    children: React.ReactNode;
    variant?: string;
    color?: string;
    style?: React.CSSProperties;
    align?: string;
    // Add margin
}

const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'defaultVariant',
    color,
    style,
    align = "defaultAlign",
}) => {
    return (
        <StyledTypography variant={variant} color={color} style={style} align={align}>
            {children}
        </StyledTypography>
    );
};

export default Typography;