import styled from "styled-components";

export const StyledButtonGroup = styled.div<{ direction: string, size: string }>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    gap: ${({ theme, size }) => {
        switch (size) {
            case "large":
                return theme.spacing.spacingXS;
            case "medium":
                return theme.spacing.spacingXXS;
            case "small":
                return theme.spacing.spacingXXS;
            default:
                return theme.spacing.spacingXS;
        }
    }};
`;