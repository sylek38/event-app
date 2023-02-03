import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Container = styled.div<{ border?: boolean }>`
    > svg,
    img {
        object-fit: cover;
        border-radius: 50%;
        background-color: var(--tertiary-background);
        cursor: pointer;

        ${({ border }) =>
            border &&
            css`
                border: 3px solid var(--color-white);
            `}
    }
`;
