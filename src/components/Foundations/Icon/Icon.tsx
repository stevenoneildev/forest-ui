import React from 'react';
import { IconPaths } from './IconURIs';
import { StyledIcon } from './styles';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: keyof typeof IconPaths;
    size: string;
    color: string;
    style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ name, size = 'medium', color = 'primary', style }) => {
    const pathData = IconPaths[name];
    return (
        <StyledIcon
            size={size}
            color={color}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <path d={pathData} />
        </StyledIcon>
    );
};

export default Icon;