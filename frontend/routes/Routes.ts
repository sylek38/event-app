import { Url } from "url";

interface RouteUrl extends Partial<Url> {
    pathname: Routes;
}

// for Routes enum and href object (href object example: Post.tsx)

// Now we can use:
// href={{
//     pathname: Routes.EVENT,
//     query: { id },
// }}

// Instead of:
// href={`/events/${id}`}
// So we can keep consistency with enums

export type RouteWithPathname = RouteUrl | Routes;

export enum Routes {
    LOGIN = "/",
    REGISTER = "/register",
    EVENTS = "/events",
    EVENT = "/events/[id]",
    SETTINGS = "/settings",
    SETTINGS_GENERAL = "/settings/general",
    SETTINGS_PASSWORD = "/settings/password",
    EVENT_MANAGER_INVITES = "/event_manager/invites",
    EVENT_MANAGER_EVENTS = "/event_manager/events",
    EVENT_MANAGER_CREATE = "/event_manager/events/create",
    EVENT_MANAGER_UPDATE = "/event_manager/events/update/[id]",
    EVENT_MANAGER_HISTORY = "/event_manager/history",
    MESSAGES = "/messages",
    INFO = "/info",
    TERMS = "/info/terms",
}
