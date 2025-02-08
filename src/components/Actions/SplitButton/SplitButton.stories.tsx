import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import SplitButton, { SplitButtonProps } from './SplitButton';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: 'Actions/SplitButton',
    component: SplitButton,
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
} as Meta;

const Template: StoryFn<SplitButtonProps> = (args) => <SplitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
    onClick: () => console.log('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    size: 'medium',
    children: 'Button',
    onClick: () => console.log('clicked'),
};