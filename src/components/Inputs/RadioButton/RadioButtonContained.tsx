import React from 'react';
import { StyledRadioButton, StyledRadioButtonContainedLabel } from './styles';

interface RadioButtonContainedProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    variant: string;
}

const RadioButtonContained: React.FC<RadioButtonContainedProps> = ({ label, checked, onChange, variant }) => {
    return (
        <StyledRadioButtonContainedLabel variant={variant}>
            <StyledRadioButton
                type="radio"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                variant={variant}
            />
            {label}
        </StyledRadioButtonContainedLabel>
    );
};

export default RadioButtonContained;