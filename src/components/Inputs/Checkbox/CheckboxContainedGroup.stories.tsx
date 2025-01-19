import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckboxContainedGroup from './CheckboxContainedGroup';
import { CheckboxGroupProps } from './CheckboxContainedGroup';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: 'Inputs/CheckboxContained',
    component: CheckboxContainedGroup,
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

const Template: StoryFn<CheckboxGroupProps> = (args) => <CheckboxContainedGroup {...args} />;

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