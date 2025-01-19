import React, { useState } from 'react';
import CheckboxContained from './CheckboxContained';
import { StyledCheckboxGroup } from './styles';

export interface CheckboxOption {
    label: string;
    value: string;
}

export interface CheckboxGroupProps {
    options: CheckboxOption[];
    variant: string;
    onChange: (selectedValues: string[]) => void;
}

const CheckboxContainedGroup: React.FC<CheckboxGroupProps> = ({ options, variant, onChange }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (checked: boolean, value: string) => {
        let updatedValues = [...selectedValues];
        if (checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((v) => v !== value);
        }
        setSelectedValues(updatedValues);
        onChange(updatedValues);
    };

    return (
        <StyledCheckboxGroup variant={variant}>
            {options.map((option) => (
                <CheckboxContained
                    key={option.value}
                    label={option.label}
                    checked={selectedValues.includes(option.value)}
                    onChange={(checked) => handleCheckboxChange(checked, option.value)}
                    variant={variant}
                />
            ))}
        </StyledCheckboxGroup>            
    );
};

export default CheckboxContainedGroup;