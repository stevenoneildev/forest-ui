import styled from "styled-components";

export const StyledTextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingXXS};
`;

export const StyledLabel = styled.label`
    font-family: ${({ theme }) => theme.typography.bodySBold.fontFamily};
    font-weight: ${({ theme }) => theme.typography.bodySBold.fontWeight};
    font-size: ${({ theme }) => theme.typography.bodySBold.fontSize};
    color: ${({ theme }) => theme.colors.foreground.primary}; 
`;

export const StyledInput = styled.input`
    padding: ${({ theme }) => theme.spacing.spacingXS};
    font-family: ${({ theme }) => theme.typography.bodyM.fontFamily};
    font-weight: ${({ theme }) => theme.typography.bodyM.fontWeight};
    font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
    border: 1px solid ${({ theme }) => theme.colors.border.neutral};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusM};
    background-color: ${({ theme }) => theme.colors.background.base};
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