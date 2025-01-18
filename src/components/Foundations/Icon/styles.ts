import styled from "styled-components";

export const StyledIcon = styled.svg<{ size: string; color: string }>`
    width: ${({ theme, size }) => {
        switch (size) {
            case "xxSmall":
                return theme.size.sizeXXS;
            case "xSmall":
                return theme.size.sizeXS;
            case "small":
                return theme.size.sizeS;
            case "medium":
                return theme.size.sizeM;
            case "large":
                return theme.size.sizeL;
            case "xLarge":
                return theme.size.sizeXL;
            case "xxLarge":
                return theme.size.sizeXXL;                                                    
            default:
                return theme.size.large;
        }
    }};
    height: ${({ theme, size }) => {
        switch (size) {
            case "xxSmall":
                return theme.size.sizeXXS;
            case "xSmall":
                return theme.size.sizeXS;
            case "small":
                return theme.size.sizeS;
            case "medium":
                return theme.size.sizeM;
            case "large":
                return theme.size.sizeL;
            case "xLarge":
                return theme.size.sizeXL;
            case "xxLarge":
                return theme.size.sizeXXL;                                                    
            default:
                return theme.size.large;
        }
    }};
    fill: ${({ theme, color }) => theme.colors.foreground[color]};    
`;