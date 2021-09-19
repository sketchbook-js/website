import { default as GlobalStyles } from "../styles/Global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <>
      <GlobalStyles />
      <Story {...context} />
    </>
  ),
];
