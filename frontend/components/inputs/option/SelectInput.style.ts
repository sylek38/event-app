import { pxToRem } from "../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{
    fullWidth?: boolean;
    open?: boolean;
}>`
    display: flex;
    flex-direction: column;
    min-width: 12.5rem;
    width: 100%;
    height: ${pxToRem(72)};
    gap: ${pxToRem(10)};
    position: relative;
    color: var(--secondary-text);
    border-radius: 1.25rem;
    /* background-color: var(--secondary-background); */
    z-index: 1;

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}

    ${({ open }) =>
        open &&
        css`
            color: var(--primary-text);
            > div > svg {
                color: var(--primary-text);
            }
        `}
`;

// export const Select = styled.select<{ dark?: boolean; isError: boolean }>`
//     border-radius: 1.25rem;
//     padding: ${pxToRem(10)} 1.25rem;

//     -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
//     -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
//     box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);

//     background-color: ${({ dark }) =>
//         dark ? "var(--primary-background)" : "var(--secondary-background)"};
//     color: var(--color-white);
//     cursor: pointer;
//     transition: 0.2s;

//     :hover {
//         outline: 2px solid white;
//     }

//     > svg {
//         display: block;
//         position: absolute;
//         right: 0;
//         top: 50%;
//         margin-right: ${pxToRem(20)};
//     }

//     ${({ isError }) =>
//         isError &&
//         css`
//             outline: 1px solid var(--error-color);
//         `}
// `;

export const Content = styled.fieldset<{ dark?: boolean }>`
    background-color: ${({ dark }) =>
        dark ? "var(--primary-background)" : "var(--secondary-background)"};
    border: none;
    border-radius: 1.25rem;
    overflow: auto;
    padding: ${pxToRem(10)} 1.25rem;
    z-index: 1;
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
    margin-bottom: ${pxToRem(6)};
    line-height: 1;
`;

// export const Content = styled.div

//     margin-top: ${pxToRem(20)};
//     width: 100%;
//     position: absolute;

//     max-height: 180px;
//     overflow: scroll;

//     color: var(--primary-text);
//     background-color: var(--primary-background);
//     z-index: -1;
//     ::-webkit-scrollbar {
//         display: none;
//     }

//     ::before {
//         content: "";
//         display: block;
//         position: sticky;
//         width: 100%;
//         height: 25px;
//         top: 0;
//         left: 0;
//         background-color: var(--secondary-background);
//     }

//     ::after {
//         content: "";
//         display: block;
//         position: sticky;
//         width: 100%;
//         height: 20px;
//         bottom: 0;
//         left: 0;
//     }
// `;

// export const Option = styled.option`
//     padding: 10px 15px;
//     color: var(--color-white);
//     :nth-child(1) {
//         margin-top: ${pxToRem(30)};
//     }

//     cursor: pointer;

//     :hover {
//         background-color: var(--secondary-background--hover);
//     }

//     :active {
//         background-color: var(--tertiary-background);
//     }
// `;

// ${({ selected }) =>
// selected &&
// css`
//     color: var(--primary-color);
//     > div > svg {
//         color: var(--secondary-text);
//     }
// `}
