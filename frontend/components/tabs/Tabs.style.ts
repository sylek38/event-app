import styled from "styled-components";

export const TabList = styled.ul`
    display: flex;
    overflow-x: scroll;

    /* Internet Explorer 10+ */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;

    /* Safari and Chrome */
    &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }
`;
