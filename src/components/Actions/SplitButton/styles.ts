import styled from "styled-components";

export const StyledSplitButton = styled.div<{ variant: string; size: string }>`
    display: inline-flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    border: ${({ theme, variant }) => {
        switch (variant) {
            case "primary":
                return `1px solid transparent`;
            case "secondary":
                return `1px solid ${theme.colors.border.neutral}`;
            case "tertiary":
                return `1px solid transparent`;
            default:
                return `none`;
        }
    }};
    border-radius: ${({ theme, size }) => {
        switch (size) {
            case "large":
                return theme.borderRadius.borderRadiusM;
            case "medium":
                return theme.borderRadius.borderRadiusM;
            case "small":
                return theme.borderRadius.borderRadiusM;                                                 
            default:
                return theme.borderRadius.borderRadiusM;
        }
    }};
    overflow: hidden;
    align-self: flex-start;
`;

export const StyledDivider = styled.div<{ variant: string; size: string }>`
    width: 1px;
    height: ${({ theme, size }) => {
        switch (size) {
            case "large":
                return theme.size.sizeXXL;
            case "medium":
                return theme.size.sizeXL;
            case "small":
                return theme.size.sizeL;
            default:
                return theme.size.sizeXXL;
        }
    }};
    background-color: ${({ theme, variant }) => {
        switch (variant) {
            case "primary":
                return theme.colors.border.neutral;
            case "secondary":
                return theme.colors.border.neutral;
            case "tertiary":
                return theme.colors.border.neutral;                                                 
            default:
                return theme.colors.border.onPrimary;
        }
    }};
`;