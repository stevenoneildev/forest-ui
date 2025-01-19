import React from 'react';
import { StyledTextFieldContainer, StyledInput, StyledLabel } from './styles';

export interface TextFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, placeholder = '', type = 'text' }) => {
    return (
        <StyledTextFieldContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </StyledTextFieldContainer>
    );
};

export default TextField;