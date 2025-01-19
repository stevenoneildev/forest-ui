import React from 'react';
import { StyledCheckbox, StyledCheckboxContainedLabel } from './styles';

interface CheckboxContainedProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    variant: string;
}

const CheckboxContained: React.FC<CheckboxContainedProps> = ({ label, checked, onChange, variant }) => {
    return (
        <StyledCheckboxContainedLabel variant={variant}>
            <StyledCheckbox
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                variant={variant}
            />
            {label}
        </StyledCheckboxContainedLabel>
    );
};

export default CheckboxContained;