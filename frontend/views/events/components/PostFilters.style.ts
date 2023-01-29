import { pxToRem } from "./../../../utils/pxToRem";
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: center; */
    gap: 1rem;

    > div {
        max-width: 270px;
    }

    > button {
        /* height: fit-content; */
    }

    @media screen and (max-width: 1256px) {
        justify-content: center;
    }

    @media screen and (max-width: 799px) {
        flex-direction: column;

        > div {
            max-width: unset;
            width: 100%;
        }
    }
    /* justify-content: space-between; */
    /* align-items: center; */
    /* width: fit-content; */
    /* gap: 1rem; */
`;
