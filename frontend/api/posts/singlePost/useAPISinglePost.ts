import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../../../config";
import { SinglePostResponse } from "../../../types/responses/postsResponse.type";
import { FetchUrl } from "../../types/Fetch";

interface Params {
    id: string;
}

export const fetchAPISinglePost = async ({ id }: Params) => {
    try {
        const data = await fetch(`${BACKEND_URL}${FetchUrl.POST}/${id}`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return data.json();
    } catch (err) {
        if (typeof err === "string") {
            throw JSON.parse(err);
        }
        throw err;
    }
};

export const useAPISinglePost = ({ id }: Params) =>
    useQuery<SinglePostResponse>(
        ["single.post"],
        async () =>
            await fetchAPISinglePost({
                id,
            })
    );
