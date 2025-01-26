import type { Preview } from "@storybook/react";
import { lightTheme, darkTheme } from "../src/tokens/theme";

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};