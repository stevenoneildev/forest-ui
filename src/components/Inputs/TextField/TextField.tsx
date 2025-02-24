import React from 'react';
import { StyledTextFieldContainer, StyledInput, StyledLabel, StyledHelperText, StyledInputContainer, StyledIconWrapper } from './styles';
import { IconPaths } from '../../Foundations/Icon/IconURIs';
import Icon from '../../Foundations/Icon/Icon';

export interface TextFieldProps {
    hasLabel?: boolean;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    hasHelperText?: boolean;
    helperText: string;
    hasLeadingIcon?: boolean;
    leadingIcon?: keyof typeof IconPaths;
    hasTrailingIcon?: boolean;
    trailingIcon?: keyof typeof IconPaths;
}

const TextField: React.FC<TextFieldProps> = ({
    label,
    hasLabel = true,
    value, onChange,
    placeholder = '',
    type = 'text',
    hasHelperText = true,
    helperText = "Helper text goes here",
    hasLeadingIcon = false,
    leadingIcon = "moon",
    hasTrailingIcon = false,
    trailingIcon = "caretDown"
}) => {
    return (
        <StyledTextFieldContainer>
            {hasLabel && <StyledLabel>{label}</StyledLabel>}
            <StyledInputContainer>
                {hasLeadingIcon && <StyledIconWrapper position="leading"><Icon iconName={leadingIcon} iconSize="small" iconColor="primaryFaded" /></StyledIconWrapper>}
                <StyledInput 
                    type={type} 
                    value={value} 
                    onChange={onChange} 
                    placeholder={placeholder}
                    $hasLeadingIcon={hasLeadingIcon} 
                />
                {hasTrailingIcon && <StyledIconWrapper position="trailing"><Icon iconName={trailingIcon} iconSize="small" iconColor="primaryFaded" /></StyledIconWrapper>}
            </StyledInputContainer>
            {hasHelperText && <StyledHelperText>{helperText}</StyledHelperText>}
        </StyledTextFieldContainer>
    );
};

export default TextField;