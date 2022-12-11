import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${pxToRem(30)};
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${pxToRem(14)};

    > img {
        margin-left: ${pxToRem(10)};
    }
`;
