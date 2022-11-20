import { pxToRem } from "./../../utils/pxToRem";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Tooltip = styled(motion.div)`
    background-color: var(--tertiary-background);
    color: var(--color-white);
    padding: ${pxToRem(8)} 1rem;
    border-radius: ${pxToRem(50)};
    font-size: 14px;
    z-index: 1000;

    &[data-placement^="top"] > .tooltip-arrow {
        bottom: 0;

        &::before {
            bottom: -0.5rem;
            left: 0;
            border-width: 0.5rem 0.5rem 0;
            border-top-color: initial;
            transform-origin: center bottom;
        }
    }

    &[data-placement^="right"] > .tooltip-arrow {
        left: 0;
        width: 0.5rem;
        height: 1rem;

        &::before {
            left: -1rem;
            border-width: 0.5rem 0.5659rem 0.5rem;
            border-right-color: initial;
            transform-origin: center right;
        }
    }

    &[data-placement^="bottom"] > .tooltip-arrow {
        top: 0;

        &::before {
            top: -1rem;
            border-width: 0.5rem 0.5rem 0.5rem;
            border-bottom-color: initial;
            transform-origin: center top;
        }
    }

    &[data-placement^="left"] > .tooltip-arrow {
        right: 0;
        width: 0.5rem;
        height: 1rem;

        &::before {
            right: -1rem;
            border-width: 0.5rem 0.6rem 0.5rem;
            border-left-color: initial;
            transform-origin: center right;
        }
    }

    .tooltip-arrow {
        width: 1rem;
        height: 0.6rem;
        color: var(--tertiary-background);

        &::before {
            content: "";
            position: absolute;
            border-color: transparent;
            border-style: solid;
        }
    }
`;
