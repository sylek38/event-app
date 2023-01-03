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

    const { mutate: mutateAsyncDel } = useMutation<
        ResponseType,
        FetchErrorsType,
        APISettingsMutationVariables
    >(async ({ userId }) => {
        const user = { userId: userId };
        try {
            const data = await fetch(
                `${BACKEND_URL}${FetchUrl.USERS}/${user.userId}/`,
                {
                    method: "DELETE",
                    body: JSON.stringify({ ...user }),
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
            throw err;
        }
    });
    return { mutateAsyncDel };
};
