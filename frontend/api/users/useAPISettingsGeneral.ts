import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface APISettingsMutationVariables {
    register_name: string;
    register_lastname: string;
    register_email: string;
    user_bio: string;
}

export const useAPISettingsGeneral = () => {
    const { push } = useRouter();

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(
        async ({
            register_name,
            register_lastname,
            register_email,
            user_bio,
        }) => {
            try {
                const data = await fetch(`${BACKEND_URL}${FetchUrl.USERS}`, {
                    //Trzeba dodać Id usera jeszcze
                    method: "PUT",
                    body: JSON.stringify({
                        register_name,
                        register_lastname,
                        register_email,
                        user_bio,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                return data.json();
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    );
};
