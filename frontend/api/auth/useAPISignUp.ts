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
    name: string;
    surname: string;
    email: string;
    password: string;
}

export const useAPISignUp = () => {
    const { push } = useRouter();

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISignInMutationVariables
    >(async ({ name, surname, email, password }) => {
        try {
            const data = await fetch(`${BACKEND_URL}${FetchUrl.REGISTER}`, {
                method: "POST",
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (data) {
                push(Routes.LOGIN);
            }

            return data.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    });
};
