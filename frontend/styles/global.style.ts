import { pxToRem } from "./../utils/pxToRem";
import { createGlobalStyle, css } from "styled-components";
import { buttonStyle } from "./components/button.style";
import { vars } from "./vars.style";

const global = css`
    *::before,
    *::after,
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        background-color: var(--primary-background);
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    h1 {
        font-size: ${pxToRem(24)};
    }

    h2 {
        font-size: ${pxToRem(20)};
    }

    h3 {
        font-size: ${pxToRem(16)};
    }

    p {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: initial;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    :root {
        ${vars}
        ${buttonStyle}
    }

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: var(--primary-green-color) var(--secondary-background);
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: ${pxToRem(8)};
    }

    *::-webkit-scrollbar-track {
        background: var(--secondary-background);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--primary-green-color);
        border-radius: ${pxToRem(16)};
        border: none;
    }
`;

export default createGlobalStyle`${global}`;
