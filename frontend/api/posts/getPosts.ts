import { BACKEND_URL } from "./../../config";
import { FetchErrorsType, FetchUrl } from "../types/Fetch";

interface ResponseType {
    errors?: string[];
    data?: unknown;
}

export interface GetPostsMutationVariables {
    id: string;
    name: string;
    surname: string;
    title: string;
    desc: string;
    category: string;
    peopleLimit: number;
    photo: string;
    map: string;
    email: string;
}

export const getPosts = async () => {
    try {
        const data = await fetch(`${BACKEND_URL}${FetchUrl.POSTS}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (data.status == 200) {
        }

        return data.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};
