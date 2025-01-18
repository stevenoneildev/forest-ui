import styled from "styled-components";

export const StyledIcon = styled.svg<{ iconSize: string; iconColor: string }>`
    width: ${({ theme, iconSize }) => {
        switch (iconSize) {
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
    height: ${({ theme, iconSize }) => {
        switch (iconSize) {
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
    fill: ${({ theme, iconColor }) => theme.colors.foreground[iconColor]};    
`;