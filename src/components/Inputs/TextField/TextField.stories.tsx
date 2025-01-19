import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: 'Inputs/TextField',
    component: TextField,
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    value: '',
    onChange: () => {},
    type: 'text',
};