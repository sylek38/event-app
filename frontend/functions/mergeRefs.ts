import { LegacyRef, MutableRefObject, RefCallback } from "react";

export const mergeRefs =
    <T>(refs: Array<MutableRefObject<T> | LegacyRef<T>>): RefCallback<T> =>
    (node) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(node);
            } else if (ref != null) {
                (ref as MutableRefObject<T | null>).current = node;
            }
        });
    };
