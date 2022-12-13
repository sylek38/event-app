export enum FetchUrl {
    LOGIN = "/backend/auth",
    USERS = "/backend/users",
    POST = "/api/posts",
    CATEGORY = "/api/category",
}

export interface FetchErrorsType {
    errors?: string[];
}
