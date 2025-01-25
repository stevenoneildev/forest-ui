import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import IconButton, { IconButtonProps } from "./IconButton";
import { lightTheme } from "../../../tokens/theme";

export default {
    title: "Actions/IconButton",
    component: IconButton,
    decorators: [
        (Story) => (
          <ThemeProvider theme={lightTheme}>
            <Story />
          </ThemeProvider>
        ),
    ],
    argTypes: {
        buttonVariant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary'],
            },
        },
        buttonSize: {
            control: {
                type: 'select',
                options: ['large', 'medium', 'small'],
            },
        },
        iconName: {
            control: {
                type: 'select',
                options: ['plus', 'minus', 'times', 'divide', 'multiply', 'equals', 'backspace', 'clear', 'delete', 'undo', 'redo', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left-right', 'arrow-up-down', 'arrow-left-up', 'arrow-right-down', 'arrow-left-down', 'arrow-right-up'],
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
    },
} as Meta;

const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonVariant: 'primary',
  iconName: 'plus',
  buttonSize: 'large',
  disabled: false,
};