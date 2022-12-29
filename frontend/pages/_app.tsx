import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global.style";
import {
    QueryClientProvider,
    QueryClient,
    Hydrate,
} from "@tanstack/react-query";
import { ReactElement, useEffect, useState } from "react";

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: ReactElement }>) {
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                },
            },
        });
    });

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
