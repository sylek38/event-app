import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { Tooltip } from "../tooltip/Tooltip";
import * as S from "./Navbar.style";
import { items } from "./navItems";

export default function Navbar() {
    return (
        <S.Navbar>
            <Link href={Routes.EVENTS}>
                <img src="https://i.imgur.com/XSVSKdn.png" alt="Logo" />
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
            </ul>
        </S.Navbar>
    );
}
