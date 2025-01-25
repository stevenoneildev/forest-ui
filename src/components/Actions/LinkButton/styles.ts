import styled from "styled-components";

export const StyledLinkButton = styled.button<{ buttonSize: string, buttonVariant: string }>`
    appearance: none;
    -webkit-appearance: none;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    display: inline-flex;
    flex-shrink: 0;
    flex-grow: 0;    
    align-self: flex-start;
    transition: color 0.1s ease-out;
    cursor: pointer;
    color: ${({ theme, buttonVariant }) => {
        switch (buttonVariant) {
            case "accent":
                return theme.colors.foreground.accent;
            case "primary":
                return theme.colors.foreground.primary;
            default:
                return theme.colors.foreground.primary;
        }
    }};
    font-family: ${({ buttonSize, theme }) => {
        switch (buttonSize) {
            case "medium":
                return theme.typography.bodyMBold.fontFamily;
            case "small":
                return theme.typography.bodySBold.fontFamily;
            default:
                return theme.typography.bodyMBold.fontFamily;
        }
    }};      
    font-weight: ${({ buttonSize, theme }) => {
        switch (buttonSize) {
            case "medium":
                return theme.typography.bodyMBold.fontWeight;
            case "small":
                return theme.typography.bodySBold.fontWeight;
            default:
                return theme.typography.bodyMBold.fontWeight;
        }
    }};    
    font-size: ${({ buttonSize, theme }) => {
        switch (buttonSize) {
            case "medium":
                return theme.typography.bodyMBold.fontSize;
            case "small":
                return theme.typography.bodySBold.fontSize;
            default:
                return theme.typography.bodyMBold.fontSize;
        }
    }};
    line-height: ${({ buttonSize, theme }) => {
        switch (buttonSize) {
            case "medium":
                return theme.typography.bodyMBold.lineHeight;
            case "small":
                return theme.typography.bodySBold.lineHeight;
            default:
                return theme.typography.bodyMBold.lineHeight;
        }
    }};
    &:hover {
        color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
                case "accent":
                    return theme.colors.foreground.accentHover;
                case "primary":
                    return theme.colors.foreground.primaryHover;
            }
        }};
    }
    &:active {
        color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
                case "accent":
                    return theme.colors.foreground.accentActive;
                case "primary":
                    return theme.colors.foreground.primaryActive;
            }
        }};
    }
    &:disabled {
        color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
                case "accent":
                    return theme.colors.foreground.primaryDisabled;
                case "primary":
                    return theme.colors.foreground.primaryDisabled;
            }
        }};
    }
`;