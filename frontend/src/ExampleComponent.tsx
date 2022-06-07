import { ReactNode } from "react";

interface Props {
    children: ReactNode | ReactNode[];
}

export const ExampleComponent = ({ children }: Props) => {
    console.log("elko");

    return <div>{children}</div>;
};
