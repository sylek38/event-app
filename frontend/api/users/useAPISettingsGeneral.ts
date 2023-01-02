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
    name: string;
    surname: string;
    email: string;
    bio: string;
}

export const useAPISettingsGeneral = () => {
    const { push } = useRouter();

    const oldValues = {
        userId: "63b325e386f12b8784f47c93", //Na razie na sucho Id i pozostałe dane
        name: "balu",
        surname: "balu",
        email: "balu@gmail.com",
        bio: "",
    };

    return useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ name, surname, email, bio }) => {
        const updatedValues = { name, surname, email, bio };
        const updatedUser = { ...oldValues };

        if (updatedValues.name) {
            updatedUser.name = updatedValues.name;
        }

        if (updatedValues.surname) {
            updatedUser.surname = updatedValues.surname;
        }

        if (updatedValues.email) {
            updatedUser.email = updatedValues.email;
        }

        if (updatedValues.bio) {
            updatedUser.bio = updatedValues.bio;
        }

        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/${oldValues.userId}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        ...updatedUser,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return data.json();
        } catch (err) {
            console.log(err);
            console.log("put");
            throw err;
        }
    });
};
