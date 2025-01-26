import styled from "styled-components";

export const StyledTab = styled.button<{ selected: boolean }>`
    font-family: ${({ theme }) => theme.typography.bodyMBold.fontFamily};
    font-size: ${({ theme }) => theme.typography.bodyMBold.fontSize};
    font-weight: ${({ theme }) => theme.typography.bodyMBold.fontWeight};
    line-height: ${({ theme }) => theme.typography.bodyMBold.lineHeight};
    color: ${({ theme, selected }) => selected ? theme.colors.foreground.onPrimary : theme.colors.foreground.primaryFaded};
    background-color: ${({ theme, selected }) => selected ? theme.colors.background.primary : theme.colors.background.primaryFaded};
    height: ${({ theme }) => theme.size.sizeXL};
    padding-left: ${({ theme }) => theme.spacing.spacingXS};
    padding-right: ${({ theme }) => theme.spacing.spacingXS};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusRounded};
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-out;
    &:hover {
        background-color: ${({ theme, selected }) => selected ? theme.colors.background.primaryHover : theme.colors.background.primaryFadedHover};
    }
    &:active {
        background-color: ${({ theme, selected }) => selected ? theme.colors.background.primaryActive : theme.colors.background.primaryFadedActive};
    }
`;

export const StyledTabContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingS};
    width: 100%;
`;

export const StyledTabGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.spacingXS};
    width: 100%;
`;

export const StyledTabContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingS};
    width: 100%;
`;