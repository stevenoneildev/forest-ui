import React, { useState } from 'react';
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
    argTypes: {
        hasLabel: { control: 'boolean' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        hasHelperText: { control: 'boolean' },
        helperText: { control: 'text' },
    }
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => {
    const [value, setValue] = useState(args.value || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        args.onChange && args.onChange(e);
    };

    return <TextField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    hasLabel: true,
    label: 'Label',
    placeholder: 'Placeholder',
    value: '',
    onChange: () => {},
    type: 'text',
    hasHelperText: true,
    helperText: 'Helper text goes here',
};