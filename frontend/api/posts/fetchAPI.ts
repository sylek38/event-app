import { BACKEND_URL } from "./../../config";
// import { CONFIG_URL_API, HEADERS_GLOBAL_CONFIG } from '../config';

import { FetchUrl } from "../types/Fetch";

interface QueryOptions {
    body?: {
        [key: string]: unknown;
    };
    headers?: {
        [key: string]: string;
    };
    method?: "GET" | "POST" | "DELETE" | "PUT";
    params?: {
        [key: string]: string;
    };
    query?: {
        [key: string]: string | string[];
    };
    signal?: AbortSignal;
    csrf?: string;
}

export const fetchAPI = async (
    pathname: FetchUrl,
    { body, headers, method = "GET", query, csrf, params, signal }: QueryOptions
) => {
    if (method === "GET" && body) {
        throw new Error("GET requests cannot have a body");
    }

    const reqHeaders = {
        "Content-Type": "application/json",
        ...(csrf ? { Authorization: `Bearer ${csrf}` } : {}),
        ...(headers ?? {}),
    };

    const queryEntries = query ? Object.entries(query) : [];
    const paramsEntries = params ? Object.entries(params) : [];

    // Build query string
    const queryString = queryEntries.reduce((prev, curr, i) => {
        if (!curr[1]) {
            return prev;
        }
        // Array are processed as multiple occurrences of the same key
        // e.g. [value1, value2] => ?key=value1&key=value2
        const queryChunk = Array.isArray(curr[1])
            ? curr[1].reduce((prevChunk, currChunk, iChunk) => {
                  return `${prevChunk}${iChunk !== 0 ? "&" : ""}${
                      curr[0]
                  }=${currChunk}`;
              }, "")
            : `${curr[0]}=${curr[1]}`;

        return `${prev}${i !== 0 ? "&" : ""}${queryChunk}`;
    }, "?");

    // Inject params
    const parsedPathname =
        paramsEntries.length !== 0
            ? paramsEntries.reduce(
                  (prev, curr) => prev.replace(`[${curr[0]}]`, curr[1]),
                  pathname as string
              )
            : pathname;

    const url = encodeURI(
        `${BACKEND_URL}${parsedPathname}${
            queryString && queryString !== "?" ? queryString : ""
        }`
    );

    const res = await fetch(url, {
        body: body ? JSON.stringify(body) : undefined,
        headers: reqHeaders,
        signal,
        method,
    });

    // Special cases here
    if (res.status === 204) return;

    if (res.status >= 200 && res.status < 300) return await res.json();

    throw await res.text();
};
