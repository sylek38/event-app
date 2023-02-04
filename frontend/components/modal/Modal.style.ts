import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

interface Args {
    $parentId?: boolean;
}

export const BackgroundOverlay = styled(motion.div)<Args>`
    position: fixed;
    left: 60px;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    ${({ $parentId }) => css`
        z-index: ${$parentId ? 110 : 100};
    `};
`;

export const Main = styled.div<Args>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${({ $parentId }) => css`
        z-index: ${$parentId ? 111 : 101};
    `};
`;

export const Wrapper = styled(motion.div)<{ size: string }>`
    position: relative;
    width: 90%;
    left: ${pxToRem(82)};
    top: ${pxToRem(100)};
    max-width: ${({ size }) => (size === "sm" ? "600px" : "1200px")};
    background-color: var(--secondary-background);
    border-radius: ${pxToRem(25)};
    padding: ${pxToRem(30)};
    margin: 0 auto;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    color: var(--color-white);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(var(--text-color-light--code), 0.1);
    position: relative;

    > h3 {
        font-size: 1.25rem;
        font-weight: bold;
    }

    > button {
        position: absolute;
        right: 0;
        top: -0.5rem;
        height: 2.5rem;
        width: 2.5rem;
        border: 0;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        > svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--secondary-text);
        }
    }
`;

export const Container = styled.div<{ alert?: boolean }>`
    margin-top: 2rem;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
`;
