import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const modalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: ${pxToRem(50)}; //przesunięcie ze zwględu na nawigacje z lewej strony
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const modalContent = styled.div`
    background-color: var(--tertiary-background);
    border-radius: ${pxToRem(30)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: ${pxToRem(550)};
    width: 90%;
    padding: ${pxToRem(30)};
    text-align: center;
`;

export const modalHeader = styled.h2`
    font-size: var(--font-size-20);
    margin-bottom: 1rem;
    color: var(--color-white);
`;
export const modalInfo = styled.p`
    color: var(--color-red);
    font-weight: bold;
    font-style: italic;
`;

export const modalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
        /* cursor: pointer; */
    }

    button:hover {
        background-color: #0069d9;
    }
`;
