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
    position: relative;

    & > div {
        margin-top: 30px;
    }

    > button {
        margin-top: ${pxToRem(30)};
    }

    @media screen and (max-width: 619px) {
        width: 100%;
    }
`;

export const NewLine = styled.p`
    width: 100%;
    margin: 1rem 0;
    align-self: left;
    font-weight: bold;
`;

export const MapContainer = styled.div`
    position: relative;
    padding: 0;
    flex: 1;
    height: 400px;
    width: 100%;

    .leaflet-container {
        width: 100%;
    }
`;
