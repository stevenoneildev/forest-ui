import styled, { keyframes } from "styled-components";

export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(4rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledModal = styled.div`
    background-color: ${({ theme }) => theme.colors.background.base};
    border-radius: ${({ theme }) => theme.borderRadius.borderRadiusL};
    padding: ${({ theme }) => theme.spacing.spacingS};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingXS};
    position: relative;
    width: 100%;
    max-width: 24rem;
    overflow: auto;
    max-height: 80vh;
    animation: ${slideIn} 0.2s ease-out;
`;

export const StyledModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacingXXS};
`;