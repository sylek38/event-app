import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${pxToRem(30)};
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${pxToRem(14)};
    gap: ${pxToRem(10)};
    flex-wrap: wrap;
`;
