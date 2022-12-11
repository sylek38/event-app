import styled from "styled-components";

export const TabList = styled.ul`
    display: flex;
    overflow-x: scroll;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
        width: 0;
        height: 0;
    }
`;
