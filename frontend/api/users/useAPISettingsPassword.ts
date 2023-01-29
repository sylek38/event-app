import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
}

interface Args {
    csrf: string;
}

export interface APISettingsMutationVariables extends Args {
    userId: string;
    old_password: string;
    new_password: string;
}

export const useAPISettingsPassword = () => {
    const { mutateAsync } = useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ old_password, new_password, userId, csrf }) => {
        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/password/${userId}`,
                {
                    method: "PUT",
                    body: JSON.stringify({ old_password, new_password }),
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${csrf}`,
                    },
                }
            );
            if (data) {
                return data.json();
            }
        } catch (err) {
            throw err;
        }
    });
    return { mutateAsync };
};
