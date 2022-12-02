import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Header = styled.header`
    display: flex;
    background-color: var(--primary-background);
    padding: ${pxToRem(45)} 0 ${pxToRem(45)} ${pxToRem(120)};

    > div {
        margin-right: 50px;
    }
    margin: 0 0 ${pxToRem(50)} ${pxToRem(100)};
`;
