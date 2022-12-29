import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useAPISignOut } from "../../api/auth/useAPILogout";
import { useAuth } from "../../context/UserContext";
import { Routes } from "../../routes/Routes";
import { Tooltip } from "../tooltip/Tooltip";
import * as S from "./Navbar.style";
import { items } from "./navItems";

export default function Navbar() {
    const { csrf } = useAuth();
    const { mutateAsync } = useAPISignOut({ csrf });
    return (
        <S.Navbar>
            <Link href={Routes.EVENTS}>
                <img src="https://i.imgur.com/uDKK9Kh.png" alt="Logo" />
            </Link>
            <ul>
                {items.map((item) => (
                    <li key={item.text}>
                        <Tooltip
                            placement="right"
                            text={item.text}
                            shiftValue="sidebar"
                        >
                            <a href={item.href}>
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        </Tooltip>
                    </li>
                ))}
                <li>
                    <Tooltip
                        text="Logout"
                        shiftValue="sidebar"
                        placement="right"
                    >
                        <button onClick={() => mutateAsync()}>logout</button>
                    </Tooltip>
                </li>
            </ul>
        </S.Navbar>
    );
}
