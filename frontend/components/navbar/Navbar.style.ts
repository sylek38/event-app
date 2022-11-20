import styled from "styled-components";

export const Navbar = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-background);
    z-index: 999;

    > img {
        display: block;
        padding: 1rem 0 4rem;
        width: 4rem;
    }

    > ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            width: 1.75rem;
            height: 1.75rem;
            display: flex;
            justify-content: center;
            align-items: center;

            + li {
                margin-top: 2.5rem;
            }

            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: var(--primary-color);
            }
        }
    }
`;
