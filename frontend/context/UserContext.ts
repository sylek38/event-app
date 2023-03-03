import { createContext, useContext } from "react";
import { ResponseWithError } from "../types/responses/errorsResponse.type";

// We do not store sensitive data like password in context

export interface SessionResponse extends ResponseWithError {
    email: string;
    name: string;
    surname: string;
    id: string;
    avatar?: string;
    bio?: string;
}

interface Props {
    session?: SessionResponse;
    csrf: string;
}

export const UserContext = createContext<Props>({
    csrf: "",
});

export const useAuth = () => useContext(UserContext);
