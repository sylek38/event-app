import { BACKEND_URL } from "../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface APISettingsMutationVariables {
    name: string;
    surname: string;
    email: string;
    bio: string;
}

export const useAPISettingsGeneral = () => {
    const { push } = useRouter();

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ name, surname, email, bio }) => {
        try {
            const data = await fetch(`${BACKEND_URL}${FetchUrl.USERS}`, {
                //Trzeba dodać Id usera jeszcze
                method: "PUT",
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    bio,
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
    });
};
