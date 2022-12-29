export enum FetchUrl {
    LOGIN = "/backend/auth/login",
    LOGOUT = "/backend/auth/logout",
    AUTH = "/backend/auth/who_am_i",
    USERS = "/backend/users",
    POSTS = "/backend/posts",
    POST = "/backend/post/[id]",
    CATEGORY = "/backend/category",
}

export interface FetchErrorsType {
    errors?: string[];
}
