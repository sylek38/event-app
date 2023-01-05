import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

const gradientStyle = css`
    color: var(--color-white);
    border: ${pxToRem(3)} solid transparent;
    border-radius: ${pxToRem(25)};
`;

const generateStyle = (
    size: string,
    variant: string,
    fullWidth: boolean
) => css`
    /* TODO: figure out how to make transition for background */

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
    `}
    
    ${variant === "glowing" &&
    css`
        background: linear-gradient(#232323, #232323) padding-box,
            linear-gradient(45deg, #24eca4, #24eca4) border-box;
        ${gradientStyle}

        box-shadow: 0 0 35px var(--primary-green-color);

        &:hover {
            background: linear-gradient(#333, #333) padding-box,
                linear-gradient(45deg, #24eca4, #24eca4) border-box;
        }
    `}

    ${variant === "glowingBlue" &&
    css`
        background: linear-gradient(#232323, #232323) padding-box,
            linear-gradient(45deg, #1cd8d2, #1cd8d2) border-box;
        ${gradientStyle}

        box-shadow: 0 0 35px var(--primary-color);

        &:hover {
            background: linear-gradient(#333, #333) padding-box,
                linear-gradient(45deg, #1cd8d2, #1cd8d2) border-box;
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
