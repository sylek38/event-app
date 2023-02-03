import { pxToRem } from "./../../../../utils/pxToRem";
import styled from "styled-components";

export const CreatedEventsList = styled.div`
    margin-top: 2.5rem;
`;

export const Card = styled.div`
    background-color: var(--container-background);
    border-radius: ${pxToRem(25)};
    max-width: ${pxToRem(500)};
    margin: auto;

    > div {
        padding: ${pxToRem(30)};
    }

    & + div {
        margin-top: ${pxToRem(40)};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--tertiary-background);

    > span {
        margin-right: ${pxToRem(30)};
        font-weight: 700;
        line-height: 1.5rem;
        max-height: 1.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Users = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${pxToRem(30)};
    border-bottom: 1px solid var(--tertiary-background);
`;

export const UsersList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: ${pxToRem(25)};
        margin-bottom: 1rem;
    }
`;

export const UsersButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    > div {
        display: flex;
        justify-content: center;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--secondary-text);

    > span {
        svg {
            width: 1rem;
            height: 1rem;
            margin-right: ${pxToRem(10)};
        }

        & + span {
            margin-top: ${pxToRem(12)};
        }
    }

    > div {
        margin-top: ${pxToRem(25)};
        display: flex;
        flex-direction: column;

        button {
            & + button {
                margin-top: 1rem;
            }
        }
    }
`;

export const OwnerAvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
