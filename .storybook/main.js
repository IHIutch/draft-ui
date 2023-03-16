module.exports = {
  core: {
    builder: "@storybook/builder-vite", // Using vite because webpack keeps breaking with react-aria-component import
    disableTelemetry: true,
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
  ],
  typescript: {
    reactDocgen: false,
  },
};
