import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingXXS};
`;

export const StyledLabel = styled.label`
    font-family: ${({ theme }) => theme.typography.bodySBold.fontFamily};
    font-weight: ${({ theme }) => theme.typography.bodySBold.fontWeight};
    font-size: ${({ theme }) => theme.typography.bodySBold.fontSize};
    color: ${({ theme }) => theme.colors.foreground.primary};
    text-align: left; 
`;

export const StyledHelperText = styled.label`
    font-family: ${({ theme }) => theme.typography.bodyS.fontFamily};
    font-weight: ${({ theme }) => theme.typography.bodyS.fontWeight};
    font-size: ${({ theme }) => theme.typography.bodyS.fontSize};
    color: ${({ theme }) => theme.colors.foreground.primaryFaded};
    text-align: left; 
`;

export const StyledSelectWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const StyledSelect = styled.select`
    padding: ${({ theme }) => theme.spacing.spacingXS};
    padding-right: ${({ theme }) => theme.spacing.spacingXL}; // Add padding to the right to make room for the icon
    font-family: ${({ theme }) => theme.typography.bodyM.fontFamily};
    font-weight: ${({ theme }) => theme.typography.bodyM.fontWeight};
    font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
    color: ${({ theme }) => theme.colors.foreground.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.neutral};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusM};
    background-color: ${({ theme }) => theme.colors.background.base};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    &:hover {
       border: 1px solid ${({ theme }) => theme.colors.border.neutralHover};
       background-color: ${({ theme }) => theme.colors.background.baseHover}; 
    }
    &:active {
       border: 1px solid ${({ theme }) => theme.colors.border.neutralActive}; 
       background-color: ${({ theme }) => theme.colors.background.baseActive};
    }   
    &:focus {
        border-color: ${({ theme }) => theme.colors.border.primary};
        outline: none;
    }
`;