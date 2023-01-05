import { ReactNode } from "react";
import { useAPIAuth } from "../../api/auth/useAPIAuth";
import { Header } from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { UserContext } from "../../context/UserContext";
import * as S from "./Layout.style";

interface Props {
    children: ReactNode | ReactNode[];
    small?: boolean;
    withoutBackground?: boolean;
    header?: {
        title: ReactNode;
        description?: ReactNode;
    };
    csrf: string;
    withoutTopPadding?: boolean;
}

export const Layout = ({
    children,
    small,
    withoutBackground,
    header,
    csrf,
    withoutTopPadding,
}: Props) => {
    // TODO: loading / error states
    const { data, isError, isFetching, isLoading } = useAPIAuth({
        csrf,
    });

    console.log(data, "Context data");

    return (
        <UserContext.Provider value={{ session: data, csrf }}>
            <Header />
            <Navbar />

            <S.Main>
                <S.Container
                    small={small}
                    withoutBackground={withoutBackground}
                    withoutTopPadding={withoutTopPadding}
                >
                    <S.Heading header={!!header}>
                        {header && header.title && <h1>{header.title}</h1>}

                        {header && header.description && (
                            <p>{header.description}</p>
                        )}
                    </S.Heading>
                    {children}
                </S.Container>
            </S.Main>
        </UserContext.Provider>
    );
};
