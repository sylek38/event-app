import {
    faGear,
    faHome,
    faMessage,
    faPlusSquare,
    faRightFromBracket,
    faUserGroup,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
    icon: IconDefinition;
    href: string;
    text: string;
}

export const items: ItemProps[] = [
    {
        icon: faHome,
        href: "/events",
        text: "Home",
    },
    {
        icon: faPlusSquare,
        href: "/events/add",
        text: "Add Event",
    },
    {
        icon: faUserGroup,
        href: "/events/manage",
        text: "Event Manager",
    },
    {
        icon: faMessage,
        href: "/message",
        text: "Messages",
    },
    {
        icon: faGear,
        href: "/settings",
        text: "Settings",
    },
    {
        icon: faRightFromBracket,
        href: "/",
        text: "Logout",
    },
];
