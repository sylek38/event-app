import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";
import { CircleButtonType } from "./CircleButton";

const generateStyle = (variant: CircleButtonType) => css`
    ${variant === "black" &&
    css`
        background-color: var(--secondary-background);

        &:hover {
            filter: brightness(1.25);
        }
    `}

    ${variant === "gradient" &&
    css`
        background: var(--primary-gradient);

        &:hover {
            filter: drop-shadow(0 0 3px #24eca4);
        }
    `}
`;

export const Button = styled.button<{
    size: number;
    variant: CircleButtonType;
}>`
    ${({ variant }) => generateStyle(variant)}

    ${({ size }) =>
        size &&
        css`
            width: ${pxToRem(size)};
            height: ${pxToRem(size)};
        `}

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: 0.25s;

    > svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;
