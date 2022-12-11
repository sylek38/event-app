import { pxToRem } from "../../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 0.75rem 0;
    }
    label {
        margin-top: 0.75rem;
        padding-left: 1.25rem;
    }
`;

export const Form = styled.form`
    button {
        margin-top: ${pxToRem(30)};
    }
`;
