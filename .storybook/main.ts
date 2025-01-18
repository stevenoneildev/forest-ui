import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react-webpack5',
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      });
    }
    if (config.resolve && config.resolve.extensions) {
      config.resolve.extensions.push('.ts', '.tsx');
    }
    return config;
  },
};

export default config;