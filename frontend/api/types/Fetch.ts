export enum FetchUrl {
    LOGIN = "/backend/auth/login",
    REGISTER = "/backend/auth/register",
    LOGOUT = "/backend/auth/logout",
    AUTH = "/backend/auth/who_am_i",
    USERS = "/backend/users",
    POSTS = "/backend/posts",
    POST = "/backend/post/[id]",
    CATEGORIES = "/backend/categories",
}

export interface FetchErrorsType {
    errors?: string[];
}
