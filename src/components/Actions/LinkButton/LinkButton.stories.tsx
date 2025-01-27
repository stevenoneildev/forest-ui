import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../tokens/theme";
import LinkButton, { LinkButtonProps } from "./LinkButton";

export default {
    title: "Actions/LinkButton",
    component: LinkButton,
    decorators: [
        (Story) => (
          <ThemeProvider theme={lightTheme}>
            <Story />
          </ThemeProvider>
        ),
    ],
    argTypes: {
        buttonSize: {
            control: {
                type: 'select',
                options: ['medium', 'small'],
            },
        },
        buttonVariant: {
            control: {
                type: 'select',
                options: ['primary', 'accent'],
            },
        },
        children: {
            control: {
                type: 'text',
            },
        },
    }
} as Meta;

const Template: StoryFn<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Accent = Template.bind({});
Accent.args = {
    buttonSize: "medium",
    buttonVariant: "accent",
    children: "Link button",
    onClick: () => console.log("Link button clicked"),
};

export const Primary = Template.bind({});
Primary.args = {
    buttonSize: "medium",
    buttonVariant: "primary",
    children: "Link button",
    onClick: () => console.log("Link button clicked"),
};