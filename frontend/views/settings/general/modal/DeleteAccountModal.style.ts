import styled from "styled-components";

export const Content = styled.div`
    > p {
        font-weight: 200;
        line-height: 1.6;

        &:last-child {
            color: var(--error-color);
            font-weight: 600;
        }
    }
`;
