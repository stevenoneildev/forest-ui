import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Tag, { TagProps } from './Tag';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: 'Status/Tag',
    component: Tag,
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
                options: ['small', 'medium'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['neutral', 'accent'],
            },
        },
        children: {
            control: {
                type: 'text',
            },
        },
    }
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'medium',
  color: 'neutral',
  children: 'Label'
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'medium',
  color: 'accent',
  children: 'Label'
};