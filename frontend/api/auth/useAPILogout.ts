import { BACKEND_URL } from "./../../config";
import { useMutation } from "@tanstack/react-query";
import { FetchUrl } from "../types/Fetch";
import Cookies from "js-cookie";

interface Args {
    csrf: string;
}

export const useAPISignOut = ({ csrf }: Args) => {
    return useMutation<unknown>(async () => {
        try {
            const data = await fetch(`${BACKEND_URL}${FetchUrl.LOGOUT}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${csrf}`,
                },
            });

            Cookies.remove("csrf");
            window.location.href = "/";

            return data.json();
        } catch (err) {
            console.log(err);
            window.location.href = "/";
            throw err;
        }
    });
};
