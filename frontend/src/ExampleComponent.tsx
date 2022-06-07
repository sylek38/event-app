import { ReactNode } from "react";

interface Props {
    children: ReactNode | ReactNode[];
}

export const ExampleComponent = ({ children }: Props) => {
    console.log("elko 2");

    return <div>{children}</div>;
};
