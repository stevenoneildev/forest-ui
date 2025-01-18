import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Icon, { IconProps } from './Icon';
import { lightTheme } from '../../../tokens/theme';
import { ThemeProvider } from 'styled-components';
import { IconPaths } from './IconURIs';

export default {
    title: 'Foundations/Icon',
    component: Icon,
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    argTypes: {
        name: {
            control: {
                type: 'select',
                options: typeof IconPaths,
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['xxSmall', 'xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary'],
            },
        },
    },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'plus',
    size: 'large',
    color: 'primary',
};