import { styled } from "styled-components";

export const StyledIconButton = styled.button<{ buttonSize: string; buttonVariant: string }>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.1s ease-out, border-color 0.1s ease-out;
    height: ${({ theme, buttonSize }) => {
        switch (buttonSize) {
            case "large":
                return theme.size.sizeXL;
            case "medium":
                return theme.size.sizeL;
            case "small":
                return theme.size.sizeM;
            default:
                return theme.size.sizeXL;
        }
    }};
    width: ${({ theme, buttonSize }) => {
        switch (buttonSize) {
            case "large":
                return theme.size.sizeXL;
            case "medium":
                return theme.size.sizeL;
            case "small":
                return theme.size.sizeM;
            default:
                return theme.size.sizeXL;
        }
    }};
    border-radius: ${({ theme, buttonSize }) => {
        switch (buttonSize) {
            case "large":
                return theme.borderRadius.borderRadiusM;
            case "medium":
                return theme.borderRadius.borderRadiusS;
            case "small":
                return theme.borderRadius.borderRadiusS;                                                 
            default:
                return theme.borderRadius.borderRadiusM;
        }
    }};
    background-color: ${({ theme, buttonVariant }) => {
        switch (buttonVariant) {
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
    border: ${({ theme, buttonVariant }) => {
        switch (buttonVariant) {
            case "primary":
                return `none`;
            case "secondary":
                return `1px solid ${theme.colors.border.neutral}`;
            case "tertiary":
                return `none`;
            default:
                return `none`;
        }
    }};
    svg {
        fill: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
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
        width: ${({ theme, buttonSize }) => {
            switch (buttonSize) {
                case "large":
                    return theme.size.sizeL;
                case "medium":
                    return theme.size.sizeM;
                case "small":
                    return theme.size.sizeS;
                default:
                    return theme.size.sizeL;
            }
        }};
        height: ${({ theme, buttonSize }) => {
            switch (buttonSize) {
                case "large":
                    return theme.size.sizeL;
                case "medium":
                    return theme.size.sizeM;
                case "small":
                    return theme.size.sizeS;
                default:
                    return theme.size.sizeL;
            }
        }};
    },
    &:hover {
        background-color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
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
        border-color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
                case "primary":
                    return "none";
                case "secondary":
                    return theme.colors.border.neutralHover;
                case "tertiary":
                    return "none";
                default:
                    return "none";
            }
        }};
    }
    &:active {
        background-color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
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
        border-color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
                case "primary":
                    return "none";
                case "secondary":
                    return theme.colors.border.neutralActive;
                case "tertiary":
                    return "none";
                default:
                    return "none";
            }
        }}; 
    }
    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
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
        border-color: ${({ theme, buttonVariant }) => {
            switch (buttonVariant) {
                case "primary":
                    return "none";
                case "secondary":
                    return theme.colors.border.neutralDisabled;
                case "tertiary":
                    return "none";
                default:
                    return "none";
            }
        }};
        svg {
            fill: ${({ theme }) => theme.colors.foreground.primaryDisabled};
        }
    }
`;