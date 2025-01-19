import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButtonContainedGroup from './RadioButtonContainedGroup';
import { RadioButtonGroupProps } from './RadioButtonGroup';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: 'Inputs/RadioButtonContained',
    component: RadioButtonContainedGroup,
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
                options: ['medium', 'small'],
            },
        },
    }
} as Meta;

const Template: StoryFn<RadioButtonGroupProps> = (args) => <RadioButtonContainedGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    variant: 'medium',
    onChange: (value) => console.log(value),
};

export const Small = Template.bind({});
Small.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    variant: 'small',
    onChange: (value) => console.log(value),
};