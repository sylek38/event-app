import { pxToRem } from "../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{ fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    min-width: 12.5rem;
    width: 100%;
    gap: ${pxToRem(30)};
    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        border: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-gradient);
        cursor: pointer;
    }

    input::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        border: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
    }

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}

    /** FF*/
    input[type="range"]::-moz-range-progress {
        background: var(--primary-gradient);
    }
    input[type="range"]::-moz-range-track {
        background-color: var(--secondary-background);
    }
    /* IE*/
    input[type="range"]::-ms-fill-lower {
        background: var(--primary-gradient);
    }
    input[type="range"]::-ms-fill-upper {
        background-color: var(--secondary-background);
    }
`;

export const Content = styled.div`
    display: flex;
    position: relative;
    width: 80%;
`;

export const Slider = styled.input`
    height: 2px;
    border-radius: 10px;
    width: 100%;
`;

export const Counter = styled.div`
    width: 25px;
    height: 25px;
    margin: 0 !important;
    border-radius: 5px;
    background-color: var(--secondary-background);
    color: var(--secondary-text);
    font-size: ${pxToRem(10)};
    font-weight: bold;
    text-align: center;
    line-height: 25px;

    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const Bubble = styled.span`
    display: inline-block;
    position: absolute;
    top: 20px;
    text-align: center;
    font-size: var(--font-size-12);
    font-weight: bold;
    color: var(--primary-color);
    z-index: 5;
    min-width: 20px;
`;

export const Icon = styled.span`
    display: inline-block;
    position: absolute;
    top: -35px;
    text-align: center;
    font-size: var(--font-size-20);
    color: var(--tertiary-background);
    z-index: 5;
    min-width: 20px;
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
    margin-bottom: ${pxToRem(6)};
    line-height: 1;
`;

export const Element = styled.label`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${pxToRem(10)};
    min-width: 200px;
`;
