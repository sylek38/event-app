import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 1.25rem;
    z-index: 0;

    > :first-child {
        height: 100%;
    }

    .leaflet-control-container {
        display: none;
    }
`;
