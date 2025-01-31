import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../../Actions/Button/Button";
import ButtonGroup from "../../Actions/ButtonGroup/ButtonGroup";
import LinkButton from "../../Actions/LinkButton/LinkButton";
import { StyledModal, StyledModalOverlay, StyledModalBody } from "./styles";
import Typography from "../../Foundations/Typography/Typography";
import { Theme } from "../../../tokens/theme";
import { useTheme } from "styled-components";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    heading?: string;
    description: React.ReactNode;
    hasLinkButton?: boolean;
    hasCloseButton?: boolean;
    hasConfirmButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, heading, description, hasCloseButton = true, hasConfirmButton = true, hasLinkButton = false }) => {
    
    const modalRef = useRef<HTMLDivElement>(null);
    const theme = useTheme() as Theme;

    useEffect(() => {
        
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
              onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }
      
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        }

    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <StyledModalOverlay>
            <StyledModal ref={modalRef}>
                <StyledModalBody>
                    {heading && <Typography variant="headingXS">{heading}</Typography>}
                    <Typography variant="bodyM" color={theme.colors.foreground.primaryFaded}>{description}</Typography>
                </StyledModalBody>
                <div>
                    {hasLinkButton && <LinkButton href="/" buttonSize="medium" buttonVariant="accent" onClick={() => console.log("Link clicked!")}>Link button</LinkButton>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ButtonGroup size="medium">
                        {hasCloseButton && <Button onClick={onClose} size="medium" variant="secondary">Cancel</Button>}
                        {hasConfirmButton && <Button onClick={onClose} size="medium" variant="primary">Confirm</Button>}
                    </ButtonGroup>
                </div>
            </StyledModal>
        </StyledModalOverlay>,
        document.body
      );
};

export default Modal;