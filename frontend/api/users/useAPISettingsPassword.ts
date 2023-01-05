import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface APISettingsMutationVariables {
    userId: string;
    old_password: string;
    new_password: string;
    repeat_password: string;
}

export const useAPISettingsPassword = () => {
    const { push } = useRouter();

    const oldValues = {
        userId: "63b325e386f12b8784f47c93", //Na razie na sucho Id i pozostałe dane
        password: "Ab1CdE",
    };

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ old_password, new_password, repeat_password }) => {
        const updatedUser = { ...oldValues, new_password };

        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/${oldValues.userId}`,
                {
                    method: "PUT",
                    body: JSON.stringify({ ...updatedUser }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (data) new_password;
            return data.json();
        } catch (err) {
            console.log(err);
            console.log("put");
            throw err;
        }
    });
};
