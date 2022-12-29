export enum FetchUrl {
    LOGIN = "/backend/auth/login",
    LOGOUT = "/backend/auth/logout",
    AUTH = "/backend/auth/who_am_i",
}

export interface FetchErrorsType {
    errors?: string[];
}
