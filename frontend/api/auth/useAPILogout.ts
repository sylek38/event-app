import { BACKEND_URL } from "./../../config";
import { useMutation } from "@tanstack/react-query";
import { FetchUrl } from "../types/Fetch";

export const useAPISignOut = () => {
    return useMutation<unknown>(async () => {
        try {
            const data = await fetch(`${BACKEND_URL}${FetchUrl.LOGOUT}`, {
                method: "DELETE",
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Cookies.remove(AUTH_COOKIE);
            window.location.href = "/";

            return data.json();
        } catch (err) {
            console.log(err);
            window.location.href = "/";
            throw err;
        }
    });
};
