import React from 'react';
import { StyledTextFieldContainer, StyledInput, StyledLabel, StyledHelperText } from './styles';

export interface TextFieldProps {
    hasLabel?: boolean;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    hasHelperText?: boolean;
    helperText: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, hasLabel = true, value, onChange, placeholder = '', type = 'text', hasHelperText = true, helperText = "Helper text goes here" }) => {
    return (
        <StyledTextFieldContainer>
            {hasLabel && <StyledLabel>{label}</StyledLabel>}
            <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} />
            {hasHelperText && <StyledHelperText>{helperText}</StyledHelperText>}
        </StyledTextFieldContainer>
    );
};

export default TextField;