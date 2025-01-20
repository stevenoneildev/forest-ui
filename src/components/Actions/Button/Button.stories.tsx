import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Button, { ButtonProps } from './Button';
import { lightTheme } from '../../../tokens/theme';

export default {
  title: 'Inputs/Button',
  component: Button,
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
            options: ['primary', 'secondary', 'tertiary'],
        },
    },
    size: {
        control: {
            type: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
    children: {
        control: {
            type: 'text',
        },
    },
    disabled: {
        control: {
            type: 'boolean',
        },
    }
  }
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button',
  size: 'large',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
  size: 'large',
  disabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button',
  size: 'large',
  disabled: false,
};