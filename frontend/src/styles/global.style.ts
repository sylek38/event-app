
import { createGlobalStyle, css } from "styled-components";
import { colors } from "./colors.style";

const global = css`
*::before, *::after, * {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--color-mint);

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
  ${colors}
}
`

export default createGlobalStyle`${global}`;