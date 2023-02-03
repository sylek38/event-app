import { pxToRem } from "./../../utils/pxToRem";
import { css } from "styled-components";

export const buttonStyle = css`
    --button-padding-sm: ${pxToRem(5)} 1rem;
    --button-padding-md: ${pxToRem(12)} ${pxToRem(30)};
    /* --button-padding-lg:  */

    --button-size-sm: ${pxToRem(12)};
    --button-size-smd: ${pxToRem(14)};

    --button-bg-gradient: linear-gradient(#232323, #232323) padding-box,
        linear-gradient(45deg, #16ada8, #24eca4) border-box;
    --button-bg-gradient--hover: linear-gradient(45deg, #16ada8, #24eca4)
            padding-box,
        linear-gradient(45deg, #16ada8, #24eca4) border-box;
    --button-bg-danger: var(--error-color);
    --button-bg-gray: var(--tertiary-background);
    --button-bg-blue: var(--primary-green-color);
`;
