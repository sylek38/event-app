import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Routes } from "../../routes/Routes";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface APISettingsMutationVariables {
    userId: string;
}

export const useAPIDeleteAccount = () => {
    const { push } = useRouter();

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ userId }) => {
        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/${userId}}`,
                {
                    method: "DELETE",
                    body: JSON.stringify({ userId }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (data) {
                push(Routes.LOGIN);
            }
            return data.json();
        } catch (err) {
            console.log(err);
            console.log("put");
            throw err;
        }
    });
};
