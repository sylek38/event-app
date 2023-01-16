import { pxToRem } from "../../utils/pxToRem";
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Content = styled.div`
    width: 60%;

    & > div {
        margin-top: 30px;
    }

    > button {
        margin-top: ${pxToRem(30)};
    }
`;

export const NewLine = styled.p`
    width: 100%;
    margin: 1rem 0;
    align-self: left;
    font-weight: bold;
`;
