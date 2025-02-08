import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string; size: string }>`   
    font-family: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.typography.bodySBold.fontFamily;
            case "medium":
                return theme.typography.bodyMBold.fontFamily;
            case "large":
                return theme.typography.bodyLBold.fontFamily;;
            default:
                return theme.typography.bodyLBold.fontFamily;;
        }
    }};
    font-size: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.typography.bodySBold.fontSize;
            case "medium":
                return theme.typography.bodyMBold.fontSize;
            case "large":
                return theme.typography.bodyLBold.fontSize;;
            default:
                return theme.typography.bodyLBold.fontSize;;
        }
    }};
    font-weight: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.typography.bodySBold.fontWeight;
            case "medium":
                return theme.typography.bodyMBold.fontWeight;
            case "large":
                return theme.typography.bodyLBold.fontWeight;;
            default:
                return theme.typography.bodyLBold.fontWeight;;
        }
    }};
    line-height: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.typography.bodySBold.lineHeight;
            case "medium":
                return theme.typography.bodyMBold.lineHeight;
            case "large":
                return theme.typography.bodyLBold.lineHeight;
            default:
                return theme.typography.bodyLBold.lineHeight;
        }
    }};    
    background-color: ${({ theme, variant }) => {
        switch (variant) {
            case "primary":
                return theme.colors.background.primary;
            case "secondary":
                return theme.colors.background.base;
            case "tertiary":
                return theme.colors.background.base;
            default:
                return theme.colors.background.primary;
        }
    }};
    color: ${({ theme, variant }) => {
    switch (variant) {
        case "primary":
            return theme.colors.foreground.onPrimary;
        case "secondary":
            return theme.colors.foreground.primary;
        case "tertiary":
            return theme.colors.foreground.primary;
        default:
            return theme.colors.foreground.onPrimary;
    }
    }};
    padding-left: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.spacing.spacingXS;
            case "medium":
                return theme.spacing.spacingXS;
            case "large":
                return theme.spacing.spacingS;
            default:
                return theme.spacing.spacingM;
        }
    }};
    padding-right: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.spacing.spacingXS;
            case "medium":
                return theme.spacing.spacingXS;
            case "large":
                return theme.spacing.spacingS;
            default:
                return theme.spacing.spacingM;
        }
    }};
    height: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.size.sizeL;
            case "medium":
                return theme.size.sizeXL;
            case "large":
                return theme.size.sizeXXL;
            default:
                return theme.size.sizeXXL;
        }
    }};
    border: ${({ theme, variant }) => {
        switch (variant) {
            case "primary":
                return "none";
            case "secondary":
                return `1px solid ${theme.colors.border.neutral}`;
            case "tertiary":
                return "none";
            default:
                return "none";
        }
    }};    
    border-radius: ${({ theme, size }) => {
        switch (size) {
            case "small":
                return theme.borderRadius.borderRadiusM;
            case "medium":
                return theme.borderRadius.borderRadiusM;
            case "large":
                return theme.borderRadius.borderRadiusM;
            default:
                return theme.borderRadius.borderRadiusM;
        }
    }};    
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ theme, variant }) => {
            switch (variant) {
                case "primary":
                    return theme.colors.background.primaryHover;
                case "secondary":
                    return theme.colors.background.baseHover;
                case "tertiary":
                    return theme.colors.background.baseHover;
                default:
                    return theme.colors.background.primaryHover;
            }
        }};
    }
    &:active {
        background-color: ${({ theme, variant }) => {
            switch (variant) {
                case "primary":
                    return theme.colors.background.primaryActive;
                case "secondary":
                    return theme.colors.background.baseActive;
                case "tertiary":
                    return theme.colors.background.baseActive;
                default:
                    return theme.colors.background.primaryActive;
            }
        }};
    }
    &:disabled {
        background-color: ${({ theme, variant }) => {
            switch (variant) {
                case "primary":
                    return theme.colors.background.primaryDisabled;
                case "secondary":
                    return theme.colors.background.baseDisabled;
                case "tertiary":
                    return theme.colors.background.baseDisabled;
                default:
                    return theme.colors.background.primaryDisabled;
            }
        }};
        color: ${({ theme, variant }) => {
            switch (variant) {
                case "primary":
                    return theme.colors.foreground.primaryDisabled;
                case "secondary":
                    return theme.colors.foreground.primaryDisabled;
                case "tertiary":
                    return theme.colors.foreground.primaryDisabled;
                default:
                    return theme.colors.foreground.primaryDisabled;
            }
        }};    
        border: ${({ theme, variant }) => {
            switch (variant) {
                case "primary":
                    return "none";
                case "secondary":
                    return `1px solid ${theme.colors.border.neutralDisabled}`;
                case "tertiary":
                    return "none";
                default:
                    return "none";
            }
        }};
        cursor: not-allowed;             
    }
`