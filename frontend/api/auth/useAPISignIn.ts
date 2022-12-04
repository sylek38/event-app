import { BACKEND_URL } from "./../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Routes } from "../../routes/Routes";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface APISignInMutationVariables {
    login_email: string;
    login_password: string;
}

export const useAPISignIn = () => {
    const { push } = useRouter();

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISignInMutationVariables
    >(async ({ login_email, login_password }) => {
        try {
            const data = await fetch(`${BACKEND_URL}${FetchUrl.LOGIN}`, {
                method: "POST",
                body: JSON.stringify({ login_email, login_password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (data) {
                push(Routes.EVENTS);
            }

            return data.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    });
};
