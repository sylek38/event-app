import { pxToRem } from "../../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form > div {
        margin-bottom: ${pxToRem(20)};
    }
`;

export const Form = styled.form`
    button {
        margin-top: ${pxToRem(30)};
    }
`;

export const Success = styled.div`
    margin-top: 1rem;
    text-align: center;
    color: var(--primary-color);
`;
