import React from 'react';
import { IconPaths } from './IconURIs';
import { StyledIcon } from './styles';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    iconName: keyof typeof IconPaths;
    iconSize: string;
    iconColor: string;
    iconStyle?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ iconName, iconSize = 'medium', iconColor = 'primary', iconStyle }) => {
    const pathData = IconPaths[iconName];
    return (
        <StyledIcon
            iconSize={iconSize}
            iconColor={iconColor}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={iconStyle}
        >
            <path d={pathData} />
        </StyledIcon>
    );
};

export default Icon;