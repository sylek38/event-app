import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Routes } from "../../routes/Routes";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

interface Args {
    csrf: string;
}

export interface APISettingsMutationVariables extends Args {
    userId: string;
}

export const useAPIDeleteAccount = () => {
    const { push } = useRouter();

    const { mutateAsync } = useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ userId, csrf }) => {
        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/delete/${userId}/`,
                {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${csrf}`,
                    },
                }
            );
            if (data) {
                push(Routes.LOGIN);
            }
            return data.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    });
    return { mutateAsync };
};
