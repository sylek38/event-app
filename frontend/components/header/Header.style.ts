import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Header = styled.header`
    background-color: var(--primary-background);
    padding: ${pxToRem(45)} 0 ${pxToRem(45)} ${pxToRem(120)};

    > div {
        height: 50px;
    }
`;
