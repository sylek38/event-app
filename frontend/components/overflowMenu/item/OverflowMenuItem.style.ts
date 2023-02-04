import styled from "styled-components";

export const Wrapper = styled.div`
    &[aria-expanded="true"] {
        & > button,
        a {
            background-color: var(--secondary-background);
        }
    }

    & > button,
    a {
        text-decoration: none;
        font-family: var(--font-family);
        color: var(--text-color);
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        line-height: 1.125rem;
        min-width: 12.5rem;
        border: none;
        background-color: transparent;
        border-radius: var(--radius);
        width: 100%;
        cursor: pointer;

        > svg {
            width: 1.125rem;
            height: 1.125rem;
            color: inherit;

            &:first-child {
                margin-right: 1rem;
            }
        }

        &:hover {
            background-color: var(--overflow-menu-hover);
        }

        &:focus {
            outline: none;
            background-color: var(--overflow-menu-hover);
        }

        > svg.expand {
            margin-left: auto;
        }
    }
`;
