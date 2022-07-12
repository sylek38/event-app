import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Header = styled.header`
    background-color: var(--primary-background);
    padding: ${pxToRem(45)} 0;

    > div {
        height: 80px;
    }
`;
