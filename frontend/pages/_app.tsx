import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global.style";
import { ContextProvider } from "../context/Context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
