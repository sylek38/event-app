import { ReactNode } from "react";
import { Header } from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import * as S from "./Layout.style";

interface Props {
    children: ReactNode | ReactNode[];
    small?: boolean;
    withoutBackground?: boolean;
    header?: {
        title: ReactNode;
        description?: ReactNode;
    };
    hideTopPanel?: boolean;
}

export const Layout = ({
    children,
    small,
    withoutBackground,
    header,
    hideTopPanel,
}: Props) => {
    return (
        <>
            {hideTopPanel ? null : <Header />}
            <Navbar />
            <S.Main>
                <S.Container
                    small={small}
                    withoutBackground={withoutBackground}
                >
                    <S.Heading>
                        {header && header.title && <h1>{header.title}</h1>}

                        {header && header.description && (
                            <p>{header.description}</p>
                        )}
                    </S.Heading>
                    {children}
                </S.Container>
            </S.Main>
        </>
    );
};
