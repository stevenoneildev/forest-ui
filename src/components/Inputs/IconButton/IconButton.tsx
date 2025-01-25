import React from "react";
import { IconPaths } from "../../Foundations/Icon/IconURIs";
import { StyledIconButton } from "./styles";
import Icon from "../../Foundations/Icon/Icon";

export interface IconButtonProps {
    iconName?: keyof typeof IconPaths;
    buttonSize?: "large" | "medium" | "small";
    buttonVariant?: "primary" | "secondary" | "tertiary";
    disabled?: boolean;
    onClick?: () => void;
    buttonStyle?: React.CSSProperties;
}

const IconButton: React.FC<IconButtonProps> = ({
    iconName = "plus",
    buttonSize = "large",
    buttonVariant = "primary",
    disabled,
    onClick,
    buttonStyle
}) => {
    return (
        <StyledIconButton
            type="button"
            buttonSize={buttonSize}
            buttonVariant={buttonVariant}
            disabled={disabled}
            onClick={onClick}
            style={buttonStyle}
        >
            <Icon iconName={iconName} iconSize={buttonSize} iconColor={buttonVariant} />
        </StyledIconButton>
    );
};

export default IconButton;