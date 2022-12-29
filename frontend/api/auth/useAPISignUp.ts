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
    register_name: string;
    register_surname: string;
    register_email: string;
    register_password: string;
}

export const useAPISignIn = () => {
    const { push } = useRouter();

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISignInMutationVariables
    >(
        async ({
            register_name,
            register_surname,
            register_email,
            register_password,
        }) => {
            try {
                const data = await fetch(`${BACKEND_URL}${FetchUrl.LOGIN}`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: register_name,
                        surname: register_surname,
                        email: register_email,
                        password: register_password,
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
        }
    );
};
