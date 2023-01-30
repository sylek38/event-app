import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

const gradientStyle = css`
    /* color: var(--color-white); */
    /* border: ${pxToRem(3)} solid transparent; */
    border: none;
    border-radius: ${pxToRem(25)};
`;

const generateStyle = (
    size: string,
    variant: string,
    fullWidth: boolean
) => css`
    /* TODO: figure out how to make transition for background */
    transition: 0.25s;

    ${variant === "gradientHover" &&
    css`
        background: linear-gradient(#232323, #232323) padding-box,
            linear-gradient(45deg, #16ada8, #24eca4) border-box;
        ${gradientStyle}

        &:hover {
            background: linear-gradient(45deg, #16ada8, #24eca4) padding-box,
                linear-gradient(45deg, #16ada8, #24eca4) border-box;
        }
    `}

    ${variant === "gradient" &&
    css`
        background: linear-gradient(45deg, #16ada8, #24eca4) padding-box;
        ${gradientStyle}

        &:hover {
            filter: drop-shadow(0 0 3px #24eca4);
        }
    `}

    ${variant === "blue" &&
    css`
        /* background: #16ada8 */
        &:hover {
            filter: drop-shadow(0 0 3px #16ada8);
        }
    `}
    

    ${variant === "danger" &&
    css`
        background-color: var(--error-color);
        border: none;
        border-radius: ${pxToRem(25)};
    `}

    ${variant === "gray" &&
    css`
        background-color: var(--tertiary-background);
        border: none;
        border-radius: ${pxToRem(25)};
    `}

    width: ${fullWidth ? "100%" : "initial"};
    padding: var(--button-padding-${size});
    background-color: var(--button-bg-${variant});
    color: var(--color-white);
    font-size: ${pxToRem(14)};
    font-weight: 600;
    border: none;
    border-radius: ${pxToRem(25)};
`;

export const Anchor = styled.a<{
    href: string;
    size: string;
    variant: string;
    fullWidth: boolean;
}>`
    ${({ size, variant, fullWidth }) =>
        generateStyle(size, variant, fullWidth)};
`;

export const Button = styled.button<{
    size: string;
    variant: string;
    type: string;
    fullWidth: boolean;
}>`
    ${({ size, variant, fullWidth }) =>
        generateStyle(size, variant, fullWidth)};

    cursor: pointer;
`;
