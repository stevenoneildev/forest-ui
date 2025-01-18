import React, { useState } from 'react';
import RadioButton from './RadioButton';
import { StyledRadioButtonGroup } from './styles';

interface RadioButtonOption {
    label: string;
    value: string;
}

interface RadioButtonGroupProps {
    options: RadioButtonOption[];
    name: string;
    variant: string;
    onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, name, variant, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleRadioButtonChange = (checked: boolean, value: string) => {
        if (checked) {
            setSelectedValue(value);
            onChange(value);
        }
    };

    return (
        <StyledRadioButtonGroup variant={variant}>
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={(checked) => handleRadioButtonChange(checked, option.value)}
                    variant={variant}
                />
            ))}
        </StyledRadioButtonGroup>
    );
};

export default RadioButtonGroup;