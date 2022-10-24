import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusSquare,
    faUserGroup,
    faMessage,
    faGear,
    faRightFromBracket,
    faHome,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/events">
                <img
                    className={styles.img}
                    src="https://i.imgur.com/XSVSKdn.png"
                    alt="Logo"
                />
            </Link>
            <div className={styles.navIcons}>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon icon={faHome} />
                </a>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </a>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon icon={faUserGroup} />
                </a>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon icon={faMessage} />
                </a>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon icon={faGear} />
                </a>
                <a className={styles.link} href="#">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </a>
            </div>
        </nav>
    );
}
