import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../config";
import { SessionResponse } from "../../context/UserContext";
import { FetchUrl } from "../types/Fetch";
interface Args {
    csrf: string;
}

export const fetchAPIAuth = async ({ csrf }: Args) => {
    try {
        const data = await fetch(`${BACKEND_URL}${FetchUrl.AUTH}`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${csrf}`,
            },
        });

        return data.json();
    } catch (err) {
        if (typeof err === "string") {
            throw JSON.parse(err);
        }
    }
};

export const useAPIAuth = ({ csrf }: Args) =>
    useQuery<SessionResponse>(
        ["authorization"],
        async () =>
            await fetchAPIAuth({
                csrf,
            }),
        { enabled: !!csrf }
    );
