import React from 'react';
import { StyledContainer, StyledLabel, StyledSelect, StyledHelperText, StyledSelectWrapper } from './styles';
import Icon from '../../Foundations/Icon/Icon';

export interface SelectFieldProps {
    hasLabel?: boolean;
    label: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    hasHelperText?: boolean;
    helperText: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ hasLabel = true, label, options, value, onChange, hasHelperText = true, helperText="Helper text goes here" }) => {
    return (
        <StyledContainer>
            {hasLabel && <StyledLabel>{label}</StyledLabel>}
            <StyledSelectWrapper>
                <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </StyledSelect>
                <Icon iconStyle={{ position: "absolute", right: `0.75rem`}} iconName="caretDown" iconSize="small" iconColor="primary"/>
            </StyledSelectWrapper>
            {hasHelperText && <StyledHelperText>{helperText}</StyledHelperText>}
        </StyledContainer>
    );
};

export default SelectField;