import styled from "styled-components";
import { pxToRem } from "../../../../utils/pxToRem";

export const Details = styled.div`
    align-self: flex-end;
    > * + * {
        margin-top: ${pxToRem(10)};
    }
`;

export const DetailsItem = styled.div`
    color: var(--secondary-text);

    > svg {
        margin-right: ${pxToRem(10)};
    }

    > span {
        font-size: ${pxToRem(12)};
    }
`;
