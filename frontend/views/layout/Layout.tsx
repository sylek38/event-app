import { ReactNode } from "react";
import { Header } from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import * as S from "./Layout.style";

interface Props {
    children: ReactNode | ReactNode[];
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Navbar />
            <S.Main>{children}</S.Main>
        </>
    );
};
