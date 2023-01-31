import { UserType } from "./posts.type";

export interface RequestType {
    id: string;
    user: UserType;
    postId: string;
}
