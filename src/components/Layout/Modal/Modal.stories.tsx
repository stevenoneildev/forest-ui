import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../tokens/theme';
import Modal from './Modal';
import Button from '../../Actions/Button/Button';

export default {
    title: 'Layout/Modal',
    component: Modal,
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
} as Meta;

export const Default: StoryFn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                heading="Heading goes here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
    );
};