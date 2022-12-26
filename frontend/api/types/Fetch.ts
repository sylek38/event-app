export enum FetchUrl {
    LOGIN = "/backend/auth",
    USERS = "/backend/users",
    POSTS = "/backend/posts",
    POST = "/backend/post/[id]",
    CATEGORY = "/backend/category",
}

export interface FetchErrorsType {
    errors?: string[];
}
