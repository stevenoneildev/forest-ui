import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "./Typography";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../tokens/theme';

export default {
    title: "Foundations/Typography",
    component: Typography,
    decorators: [
        (Story) => (
          <ThemeProvider theme={lightTheme}>
            <Story />
          </ThemeProvider>
        ),
    ],
} as Meta;

export const Default: StoryFn = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>HeadingXL</Typography>
            <Typography variant="headingXL">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Heading L</Typography>
            <Typography variant="headingL">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Heading M</Typography>
            <Typography variant="headingM">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Heading S</Typography>
            <Typography variant="headingS">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Heading XS</Typography>
            <Typography variant="headingXS">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Body M Bold</Typography>
            <Typography variant="bodyMBold">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Body M</Typography>
            <Typography variant="bodyM">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Body S Bold</Typography>
            <Typography variant="bodySBold">The quick brown fox jumps over the lazy dog</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <Typography variant="bodyS" style={{ minWidth: "15%"}}>Body S</Typography>
            <Typography variant="bodyS">The quick brown fox jumps over the lazy dog</Typography>
        </div>
    </div>
);