import { BACKEND_URL } from "./../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Routes } from "../../routes/Routes";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface APIEventCreatorMutationVariables {
    name: string;
    surname: string;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    photo: string;
    map: string;
}

export const useAPIEventCreator = () => {
    const { push } = useRouter();
    return useMutation<
        ResponseType,
        FetchErrorsType,
        APIEventCreatorMutationVariables
    >(
        async ({
            name,
            surname,
            title,
            desc,
            category,
            peopleLimit,
            photo,
            map,
        }) => {
            const newEvent = {
                name,
                surname,
                title,
                desc,
                category,
                peopleLimit,
                photo,
                map,
            };
            if (newEvent.photo == null) {
                newEvent.photo = "default.png";
            }
            try {
                console.log(newEvent);
                const data = await fetch(`${BACKEND_URL}${FetchUrl.POSTS}`, {
                    method: "POST",
                    body: JSON.stringify({
                        ...newEvent,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (data.status == 200) {
                    // console.log(newEvent);
                    console.log(data);
                    push(Routes.EVENTS); //tu będzie od razu przekierowanie do posta, który użytkownik stworzył (do widoku single-post)
                }

                return data.json();
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    );
};
