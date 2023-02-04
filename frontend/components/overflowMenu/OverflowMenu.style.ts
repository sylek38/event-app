import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
    padding: 0.5rem;
    background-color: var(--secondary-background);
    color: inherit;
    border-radius: 1rem;
    font-size: 0.875rem;
    transition-property: transform, visibility, opacity;
    box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.6);
    /* max-width: 18.75rem; */
    z-index: 1000;

    & li:first-of-type {
        button,
        a {
            border-top-left-radius: var(--radius);
            border-top-right-radius: var(--radius);
        }
    }

    & li:last-of-type {
        button,
        a {
            border-bottom-left-radius: var(--radius);
            border-bottom-right-radius: var(--radius);
        }
    }

    &[data-animation="fade"][data-state="hidden"] {
        opacity: 0;
    }

    &[data-placement^="top"] > .overflow-menu-arrow {
        bottom: 0;
    }

    &[data-placement^="top"] > .overflow-menu-arrow:before {
        bottom: -0.5rem;
        left: 0;
        border-width: 0.5625rem 0.5rem 0;
        border-top-color: initial;
        transform-origin: center top;
    }

    &[data-placement^="bottom"] > .overflow-menu-arrow {
        top: 0;
    }

    &[data-placement^="bottom"] > .overflow-menu-arrow:before {
        top: -0.5rem;
        left: 0;
        border-width: 0 0.5rem 0.5625rem;
        border-bottom-color: initial;
        transform-origin: center bottom;
    }

    &[data-placement^="left"] > .overflow-menu-arrow {
        right: 0;
        width: 0.5625rem;
        height: 1rem;
    }

    &[data-placement^="left"] > .overflow-menu-arrow:before {
        border-width: 0.5rem 0 0.5rem 0.5625rem;
        border-left-color: initial;
        right: -0.5rem;
        transform-origin: center left;
    }

    &[data-placement^="right"] > .overflow-menu-arrow {
        left: 0;
        width: 0.5625rem;
        height: 1rem;
    }

    &[data-placement^="right"] > .overflow-menu-arrow:before {
        left: -0.5rem;
        border-width: 0.5rem 0.5625rem 0.5rem 0;
        border-right-color: initial;
        transform-origin: center right;
    }

    &[data-inertia][data-state="visible"] {
        transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
    }
`;
export const MenuArrow = styled.div`
    width: 1rem;
    height: 0.5625rem;
    color: var(--overflow-menu-background);

    &::before {
        content: "";
        position: absolute;
        border-color: transparent;
        border-style: solid;
        z-index: -1;
    }
`;
