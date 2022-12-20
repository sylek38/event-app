export enum FetchUrl {
    LOGIN = "/backend/auth",
    USERS = "/backend/users",
    POST = "/backend/posts",
    CATEGORY = "/backend/category",
}

export interface FetchErrorsType {
    errors?: string[];
}
