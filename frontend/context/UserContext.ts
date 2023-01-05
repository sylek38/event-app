import { createContext, useContext } from "react";

// We do not store sensitive data like password in context
export interface SessionType {
    email: string;
    name: string;
    surname: string;
    id: string;
    avatar?: string;
    bio?: string;
}

interface Props {
    session?: SessionType;
    csrf: string;
}

export const UserContext = createContext<Props>({
    csrf: "",
});

export const useAuth = () => useContext(UserContext);
