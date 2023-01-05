import {
    faGear,
    faHome,
    faMessage,
    faPlusSquare,
    faRightFromBracket,
    faUserGroup,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { useAPISignOut } from "../../api/auth/useAPILogout";
import { Routes } from "../../routes/Routes";

interface ItemProps {
    icon: IconDefinition;
    text: string;
    href?: string;
    onClick?: () => void;
}

export const items: ItemProps[] = [
    {
        icon: faHome,
        href: Routes.EVENTS,
        text: "Home",
    },
    {
        icon: faPlusSquare,
        href: Routes.EVENT_MANAGER_CREATE,
        text: "Add Event",
    },
    {
        icon: faUserGroup,
        href: Routes.EVENT_MANAGER_INVITES,
        text: "Event Manager",
    },
    {
        icon: faMessage,
        href: Routes.MESSAGES,
        text: "Messages",
    },
    {
        icon: faGear,
        href: Routes.SETTINGS_GENERAL,
        text: "Settings",
    },
    {
        icon: faRightFromBracket,
        href: Routes.LOGIN,
        text: "Logout",
        // onClick: () => useAPISignOut(),
    },
];
