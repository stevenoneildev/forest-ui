import styled from "styled-components";

export const StyledTextFieldContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingXXS};
`;

export const StyledInputContainer = styled.div`
    position: relative;
    width: 100%;
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

export const StyledInput = styled.input<{ $hasLeadingIcon?: boolean }>`
    padding: ${({ theme, $hasLeadingIcon }) => 
        $hasLeadingIcon 
            ? `${theme.spacing.spacingXS} ${theme.spacing.spacingXS} ${theme.spacing.spacingXS} 2.5rem`
            : theme.spacing.spacingXS};
    font-family: ${({ theme }) => theme.typography.bodyM.fontFamily};
    font-weight: ${({ theme }) => theme.typography.bodyM.fontWeight};
    font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
    color: ${({ theme }) => theme.colors.foreground.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.neutral};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusM};
    background-color: ${({ theme }) => theme.colors.background.base};
    width: 100%;
    box-sizing: border-box;
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

interface StyledIconWrapperProps {
    position: 'leading' | 'trailing';
}

export const StyledIconWrapper = styled.div<StyledIconWrapperProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ position, theme }) => position === 'leading' ? `
        left: ${theme.spacing.spacingXS};
    ` : `
        right: ${theme.spacing.spacingXS};
    `}
    display: flex;
    align-items: center;
    pointer-events: none;
`;