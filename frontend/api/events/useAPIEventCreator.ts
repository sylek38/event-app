import { MarkerProps } from "./../../components/map/mapTypes";
import { BACKEND_URL } from "./../../config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Routes } from "../../routes/Routes";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";
import { useAuth } from "../../context/UserContext";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

interface Args {
    csrf: string;
}

export interface APIEventCreatorMutationVariables extends Args {
    title: string;
    desc: string;
    category: string;
    date: Date;
    peopleLimit: number;
    image: string;

    city: string;
    street: string;
    map: MarkerProps;
}

export const useAPIEventCreator = () => {
    const { push } = useRouter();
    return useMutation<
        ResponseType,
        FetchErrorsType,
        APIEventCreatorMutationVariables
    >(
        async ({
            title,
            desc,
            category,
            date,
            peopleLimit,
            image,
            city,
            street,
            map,
            csrf,
        }) => {
            const newEvent = {
                title,
                desc: desc ?? "",
                category,
                peopleLimit,
                date,
                image: image ?? "",
                location: {
                    city,
                    street: street ?? "",
                    map: map ?? "",
                },
            };

            const { session } = useAuth();
            const userId = session;

            try {
                console.log(newEvent);
                const data = await fetch(
                    `${BACKEND_URL}${FetchUrl.POSTS}/add/${userId}`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            ...newEvent,
                        }),

                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${csrf}`,
                        },
                    }
                );

                if (data.status == 200) {
                    console.log(data);
                    // push(Routes.EVENTS); //tu będzie od razu przekierowanie do posta, który użytkownik stworzył (do widoku single-post)
                }

                return data.json();
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    );
};
