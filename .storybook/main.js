module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  refs: {
    'react-ts': {
      url: 'http://localhost:9011',
    },
  },
  logLevel: 'debug',
};
