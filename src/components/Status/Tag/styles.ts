import styled from "styled-components";

export const StyledTag = styled.div<{ variant: string; color: string; }>`
    display: inline-flex;
    flex-shrink: 0;
    flex-grow: 0;    
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
    font-family: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.typography.bodyS.fontFamily;
            case "medium":
                return theme.typography.bodyM.fontFamily;
            default:
                return theme.typography.bodyM.fontFamily;;
        }
    }};
    font-size: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.typography.bodyS.fontSize;
            case "medium":
                return theme.typography.bodyM.fontSize;
            default:
                return theme.typography.bodyM.fontSize;;
        }
    }};
    font-weight: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.typography.bodyS.fontWeight;
            case "medium":
                return theme.typography.bodyM.fontWeight;
            default:
                return theme.typography.bodyM.fontWeight;;
        }
    }};
    line-height: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.typography.bodyS.lineHeight;
            case "medium":
                return theme.typography.bodyM.lineHeight;
            default:
                return theme.typography.bodyM.lineHeight;
        }
    }};
    padding-left: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.spacing.spacingXXS;
            case "medium":
                return theme.spacing.spacingXS;
            default:
                return theme.spacing.spacingXS;
        }
    }};
    padding-right: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.spacing.spacingXXS;
            case "medium":
                return theme.spacing.spacingXS;
            default:
                return theme.spacing.spacingXS;
        }
    }};
    height: ${({ theme, variant }) => {
        switch (variant) {
            case "small":
                return theme.size.sizeL;
            case "medium":
                return theme.size.sizeXL;
            default:
                return theme.size.sizeXL;
        }
    }};        
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusM};
    background-color: ${({ theme, color }) => {
        switch (color) {
            case "neutral":
                return theme.colors.background.primaryFaded;
            case "accent":
                return theme.colors.background.accentFaded;
            default:
                return theme.colors.background.primaryFaded;
        }
    }};
    color: ${({ theme, color }) => {
        switch (color) {
            case "neutral":
                return theme.colors.foreground.primaryFaded;
            case "accent":
                return theme.colors.foreground.accent;
            default:
                return theme.colors.foreground.primaryFaded;
        }
    }};
`