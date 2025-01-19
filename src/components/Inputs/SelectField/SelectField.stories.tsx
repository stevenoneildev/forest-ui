import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectField, {SelectFieldProps} from './SelectField';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: 'Inputs/SelectField',
    component: SelectField,
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

const Template: StoryFn<SelectFieldProps> = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
    hasLabel: true,
    label: 'Label',
    value: '',
    onChange: () => {},
    hasHelperText: true,
    helperText: 'Helper text goes here',
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
};