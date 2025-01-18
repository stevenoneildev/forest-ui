import React from 'react';
import { StyledRadioButton, StyledLabel } from './styles';

interface RadioButtonProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    variant: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange, variant }) => {
    return (
        <StyledLabel variant={variant}>
            <StyledRadioButton
                type="radio"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                variant={variant}
            />
            {label}
        </StyledLabel>
    );
};

export default RadioButton;