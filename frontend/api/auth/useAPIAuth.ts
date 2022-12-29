import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../config";
import { SessionType } from "../../context/UserContext";
import { FetchUrl } from "../types/Fetch";
interface Args {
    csrf: string;
}

export const fetchAPIAuth = async ({ csrf }: Args) => {
    try {
        return (await fetch(`${BACKEND_URL}${FetchUrl.AUTH}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${csrf}`,
            },
        })) as any;
    } catch (err) {
        throw err;
    }
};

export const useAPIAuth = ({ csrf }: Args) =>
    useQuery<SessionType>(
        ["authorization"],
        async () =>
            await fetchAPIAuth({
                csrf,
            }),
        { enabled: !!csrf }
    );
