import styled from "styled-components";

export const StyledTypography = styled.p<{ variant: string, align: string }>`
    font-family: ${({ theme, variant }) => {
        switch (variant) {
            case "headingXS":
                return theme.typography.headingXS.fontFamily;
            case "headingS":
                return theme.typography.headingS.fontFamily;
            case "headingM":
                return theme.typography.headingM.fontFamily;
            case "headingL":
                return theme.typography.headingL.fontFamily;
            case "headingXL":
                return theme.typography.headingXL.fontFamily;
            case "bodyM":
                return theme.typography.bodyM.fontFamily;
            case "bodyMBold":
                return theme.typography.bodyMBold.fontFamily;
            case "bodyS":
                return theme.typography.bodyS.fontFamily;
            case "bodySBold":
                return theme.typography.bodySBold.fontFamily;               
            default:
                return "bodyM";
        }
    }};
    font-size: ${({ theme, variant }) => {
        switch (variant) {
            case "headingXS":
                return theme.typography.headingXS.fontSize;
            case "headingS":
                return theme.typography.headingS.fontSize;
            case "headingM":
                return theme.typography.headingM.fontSize;
            case "headingL":
                return theme.typography.headingL.fontSize;
            case "headingXL":
                return theme.typography.headingXL.fontSize;
            case "bodyM":
                return theme.typography.bodyM.fontSize;
            case "bodyMBold":
                return theme.typography.bodyMBold.fontSize;
            case "bodyS":
                return theme.typography.bodyS.fontSize;
            case "bodySBold":
                return theme.typography.bodySBold.fontSize;               
            default:
                return "bodyM";
        }
    }}; 
    font-weight: ${({ theme, variant }) => {
        switch (variant) {
            case "headingXS":
                return theme.typography.headingXS.fontWeight;
            case "headingS":
                return theme.typography.headingS.fontWeight;
            case "headingM":
                return theme.typography.headingM.fontWeight;
            case "headingL":
                return theme.typography.headingL.fontWeight;
            case "headingXL":
                return theme.typography.headingXL.fontWeight;
            case "bodyM":
                return theme.typography.bodyM.fontWeight;
            case "bodyMBold":
                return theme.typography.bodyMBold.fontWeight;
            case "bodyS":
                return theme.typography.bodyS.fontWeight;
            case "bodySBold":
                return theme.typography.bodySBold.fontWeight;               
            default:
                return "bodyM";
        }
    }};
    line-height: ${({ theme, variant }) => {
        switch (variant) {
            case "headingXS":
                return theme.typography.headingXS.lineHeight;
            case "headingS":
                return theme.typography.headingS.lineHeight;
            case "headingM":
                return theme.typography.headingM.lineHeight;
            case "headingL":
                return theme.typography.headingL.lineHeight;
            case "headingXL":
                return theme.typography.headingXL.lineHeight;
            case "bodyM":
                return theme.typography.bodyM.lineHeight;
            case "bodyMBold":
                return theme.typography.bodyMBold.lineHeight;
            case "bodyS":
                return theme.typography.bodyS.lineHeight;
            case "bodySBold":
                return theme.typography.bodySBold.lineHeight;               
            default:
                return "bodyM";
        }
    }};
    text-align: ${({ theme, align }) => {
        switch (align) {
            case "left":
                return "left";
            case "center":
                return "center";
            case "right":
                return "right";              
            default:
                return "left";
        }
    }};              
`