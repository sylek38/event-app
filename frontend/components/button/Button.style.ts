import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

const generateStyle = (
    size: string,
    variant: string,
    fullWidth: boolean
) => css`
    ${variant === "gradient" &&
    css`
        background: linear-gradient(45deg, #16ada8, #24eca4) padding-box;

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
    

    width: ${fullWidth ? "100%" : "initial"};
    padding: var(--button-padding-${size});
    background-color: var(--button-bg-${variant});
    color: var(--color-white);
    font-size: var(--button-size-${size});
    font-weight: 600;
    border: none;
    border-radius: ${pxToRem(25)};
    transition: 0.25s;

    ${variant !== "gradient" &&
    variant !== "blue" &&
    css`
        &:hover {
            filter: brightness(1.25);
        }
    `}
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
