import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import TabGroup, { TabGroupProps } from './TabGroup';
import { lightTheme } from '../../../tokens/theme';
import Typography from '../../Foundations/Typography/Typography';

export default {
    title: 'Navigation/TabGroup',
    component: TabGroup,
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as Meta;

const Template: StoryFn<TabGroupProps> = (args) => <TabGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs: [
        { label: 'Tab 1', content: <Typography variant="bodyM">Content for tab 1</Typography> },
        { label: 'Tab 2', content: <Typography variant="bodyM">Content for tab 2</Typography> },
        { label: 'Tab 3', content: <Typography variant="bodyM">Content for tab 3</Typography> },
    ],
};