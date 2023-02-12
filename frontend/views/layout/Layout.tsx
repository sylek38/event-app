import { ReactNode } from "react";
import { useAPIAuth } from "../../api/auth/useAPIAuth";
import { Header } from "../../components/header/Header";
import { Loader } from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import { UserContext } from "../../context/UserContext";
import { ErrorView } from "../status/ErrorView";
import { StatusWrapper } from "../status/statusWrapper/StatusWrapper";
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
    const { data, isError, isFetching, isLoading } = useAPIAuth({
        csrf,
    });

    if (isLoading && isFetching)
        <StatusWrapper>
            <Loader />
        </StatusWrapper>;

    if (!csrf || data?.errors?.find((el) => el === "authentication_failed")) {
        return (
            <StatusWrapper>
                <ErrorView errorCode="401" />
            </StatusWrapper>
        );
    }

    if (isError) {
        return (
            <StatusWrapper>
                <ErrorView errorCode="500" />
            </StatusWrapper>
        );
    }

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
