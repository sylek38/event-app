import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ withBorder: boolean; $size: string }>`
    position: relative;
    ${({ $size }) =>
        $size &&
        css`
            width: $size;
            height: $size;
        `}

    ${({ withBorder }) =>
        withBorder &&
        css`
            border: 3px solid var(--color-white);
        `}

    img {
        border-radius: 50%;
    }
`;
