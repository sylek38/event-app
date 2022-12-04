import { ReactNode } from "react";
import { Header } from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import * as S from "./Layout.style";

interface Props {
    children: ReactNode | ReactNode[];
    small?: boolean;
    withoutBackground?: boolean;
}

export const Layout = ({ children, small, withoutBackground }: Props) => {
    return (
        <>
            <Header />
            <Navbar />

            <S.Main>
                <S.Container
                    small={small}
                    withoutBackground={withoutBackground}
                >
                    {children}
                </S.Container>
            </S.Main>
        </>
    );
};
