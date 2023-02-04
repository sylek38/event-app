import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & + div {
        padding-top: 2.5rem;
        border-top: 2px solid var(--tertiary-background);
    }
`;

export const Title = styled.h4``;

export const Content = styled.div`
    padding-top: 2rem;
    > form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;

    @media screen and (max-width: 799px) {
        gap: 1rem;
    }
`;
