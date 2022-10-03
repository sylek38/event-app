import { createRoot } from "react-dom/client";
import { HomeView } from "./views/home/HomeView";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import GlobalStyle from "./styles/global.style";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <GlobalStyle />
        <HomeView />
    </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
