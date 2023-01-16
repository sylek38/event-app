import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    width: 100%;
    min-width: 12rem;
    background-color: inherit;
    border-radius: var(--radius);
    border: 1px solid var(--text-input-border);
    height: 2.5rem;
    font-family: inherit;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    text-align: left;
    color: inherit;
    transition: box-shadow var(--animation), background-color var(--animation),
        border-color var(--animation);
    cursor: pointer;

    > svg {
        margin-left: auto;
        width: 1.5rem;
        height: 1.5rem;
        color: inherit;
        flex-shrink: 0;
    }

    > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &:focus {
        outline: none;
        border-color: var(--text-input-border--focus);
        box-shadow: 0 0 0 4px var(--text-input--focus);
    }

    &:disabled {
        opacity: 0.5;
    }
`;

export const Loading = styled.span`
    margin-left: 0.5rem;
`;

export const Desc = styled.span`
    color: var(--light-text);
`;
