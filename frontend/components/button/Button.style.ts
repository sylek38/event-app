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
