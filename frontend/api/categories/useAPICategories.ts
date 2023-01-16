import { CategoriesResponse } from "./../../types/responses/categoriesResponse.type";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../config";
import { FetchUrl } from "../types/Fetch";

interface Args {
    csrf: string;
}

export const fetchAPICategories = async ({ csrf }: Args) => {
    try {
        const data = await fetch(`${BACKEND_URL}${FetchUrl.CATEGORIES}`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${csrf}`,
            },
        });

        return data.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const useAPICategories = ({ csrf }: Args) =>
    useQuery<CategoriesResponse>(["categories"], async () =>
        fetchAPICategories({ csrf })
    );
