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
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${csrf}`,
                },
            });

            Cookies.remove("csrf");
            Cookies.remove("token");
            Cookies.remove("refreshToken");
            window.location.href = "/";

            return data.json();
        } catch (err) {
            console.log(err);
            Cookies.remove("csrf");
            Cookies.remove("token");
            Cookies.remove("refreshToken");
            window.location.href = "/";
            throw err;
        }
    });
};
