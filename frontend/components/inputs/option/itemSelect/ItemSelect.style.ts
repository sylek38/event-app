import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    padding: 0.5rem 1rem;
    color: inherit;
    border-radius: var(--radius);

    cursor: pointer;

    > input {
        margin-right: 0.5rem;
    }

    &:hover {
        background-color: var(--checkbox-label--hover);
    }
`;
