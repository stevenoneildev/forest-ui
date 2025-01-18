import React from 'react';
import { StyledCheckbox, StyledLabel } from './styles';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    variant: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, variant }) => {
    return (
        <StyledLabel variant={variant}>
            <StyledCheckbox
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                variant={variant}
            />
            {label}
        </StyledLabel>
    );
};

export default Checkbox;