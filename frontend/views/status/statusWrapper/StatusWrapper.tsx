import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const StatusWrapper = ({ children }: Props) => {
    return <div>{children}</div>;
};
