import styled from "styled-components";

export const StyledLabel = styled.label<{ variant: string }>`
    display: flex;
    flex-direction: row;
    margin: 0;
    cursor: pointer;
    gap: ${({ theme, variant }) => {
        switch (variant) {
            case "medium":
                return theme.spacing.spacingS;
            case "small":
                return theme.spacing.spacingXS;           
            default:
                return theme.spacing.spacingS;
        }
    }};
    font-family: ${({ theme, variant }) => {
        switch (variant) {
            case "medium":
                return theme.typography.bodyM.fontFamily;
            case "small":
                return theme.typography.bodyS.fontFamily;             
            default:
                return theme.typography.bodyM.fontFamily;
        }
    }};
    font-size: ${({ theme, variant }) => {
        switch (variant) {
            case "medium":
                return theme.typography.bodyM.fontSize;
            case "small":
                return theme.typography.bodyS.fontSize;             
            default:
                return theme.typography.bodyM.fontSize;
        }
    }};
    font-weight: ${({ theme, variant }) => {
        switch (variant) {
            case "medium":
                return theme.typography.bodyM.fontWeight;
            case "small":
                return theme.typography.bodyS.fontWeight;             
            default:
                return theme.typography.bodyM.fontWeight;
        }
    }};
    line-height: ${({ theme, variant }) => {
        switch (variant) {
            case "medium":
                return theme.typography.bodyM.lineHeight;
            case "small":
                return theme.typography.bodyS.lineHeight;             
            default:
                return theme.typography.bodyM.lineHeight;
        }
    }};
`

export const StyledCheckbox = styled.input<{ variant: string }>`
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.border.neutral};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusS};
    color: ${({ theme }) => theme.colors.foreground.onPrimary};    
    margin: 0;
        height: ${({ theme, variant }) => {
            switch (variant) {
                case "medium":
                    return theme.size.sizeM;
                case "small":
                    return theme.size.sizeS;           
                default:
                    return theme.size.sizeM;
            }
        }};
        width: ${({ theme, variant }) => {
            switch (variant) {
                case "medium":
                    return theme.size.sizeM;
                case "small":
                    return theme.size.sizeS;           
                default:
                    return theme.size.sizeM;
            }
        }};
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.border.neutralHover};
    }
    &:active {
        border: 1px solid ${({ theme }) => theme.colors.border.neutralActive};
    }
    &:checked {
        background-color: ${({ theme }) => theme.colors.background.primary};
        border: none;
    }
    &:checked::after {
        content: '✔'; /* You can replace this with a custom icon */
        display: block;
        color: ${({ theme }) => theme.colors.foreground.onPrimary};
        font-size: ${({ theme, variant }) => {
            switch (variant) {
                case "medium":
                    return theme.size.sizeXS;
                case "small":
                    return theme.size.sizeXXS;           
                default:
                    return theme.size.sizeXS;
            }
        }};
        text-align: center;
        line-height: ${({ theme, variant }) => {
            switch (variant) {
                case "medium":
                    return theme.typography.bodyM.lineHeight;
                case "small":
                    return theme.typography.bodyS.lineHeight;             
                default:
                    return theme.typography.bodyM.lineHeight;
            }
        }};
    }        
`;

export const StyledCheckboxGroup = styled.div<{ variant: string }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, variant }) => {
        switch (variant) {
            case "medium":
                return theme.spacing.spacingS;
            case "small":
                return theme.spacing.spacingXS;           
            default:
                return theme.spacing.spacingS;
        }
    }};
`