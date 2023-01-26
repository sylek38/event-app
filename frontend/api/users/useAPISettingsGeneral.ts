import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
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
    name?: string;
    surname?: string;
    email?: string;
    bio?: string;
}

export const useAPISettingsGeneral = () => {
    const { mutateAsync } = useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ name, surname, email, bio, userId, csrf }) => {
        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/general/${userId}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        name: name ?? "",
                        surname: surname ?? "",
                        email: email ?? "",
                        bio: bio ?? "",
                    }),
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
