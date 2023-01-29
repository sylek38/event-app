import styled, { css } from "styled-components";

export const Wrapper = styled.input<{ $error?: boolean }>`
    ${({ $error }) => css`
        padding: 0;
        margin: 0;
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--text-input-border);
        appearance: none;
        border-radius: 100%;
        background-color: var(--container-background);
        transition: border-color var(--animation), box-shadow var(--animation);

        &:hover:not(:checked) {
            border-color: var(--text-input-border);
        }

        &:checked {
            background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.95837 9.67517L2.74578 7.46258C2.63577 7.35632 2.48841 7.29753 2.33547 7.29886C2.18252 7.30019 2.03621 7.36153 1.92806 7.46969C1.8199 7.57784 1.75855 7.72415 1.75722 7.8771C1.7559 8.03005 1.81469 8.1774 1.92095 8.28742L4.54595 10.9124C4.65534 11.0218 4.80369 11.0832 4.95837 11.0832C5.11305 11.0832 5.26139 11.0218 5.37078 10.9124L11.7875 4.49575C11.8937 4.38573 11.9525 4.23838 11.9512 4.08543C11.9498 3.93248 11.8885 3.78618 11.7803 3.67802C11.6722 3.56987 11.5259 3.50852 11.3729 3.50719C11.22 3.50586 11.0726 3.56466 10.9626 3.67092L4.95837 9.67517Z' fill='white'/%3E%3C/svg%3E%0A");
            background-color: var(--checkbox-background--checked);
            border-color: var(--checkbox-background--checked);
        }

        &:focus {
            outline: 0;
        }

        ${$error
            ? css`
                  &:focus {
                      border-color: var(--color-error);
                      box-shadow: 0 0 0 4px rgba(var(--color-error--code), 0.5);
                  }
              `
            : css`
                  &:focus {
                      border-color: var(--checkbox-background--checked);
                      box-shadow: 0 0 0 4px var(--checkbox--focus--checked);
                  }
              `}
    `}
`;
