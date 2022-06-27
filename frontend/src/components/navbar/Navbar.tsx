import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faUserGroup ,faMessage, faGear, faRightFromBracket, faHome } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  return (
    <nav>
      <div className="navLogo"><img src="https://i.imgur.com/XSVSKdn.png" alt="Logo" /></div>
      <div className="navIcons">
        <a href="#" className="tooltip"><span className="tooltiptext">Strona główna</span><FontAwesomeIcon icon={faHome} /></a>
        <a href="#" className="tooltip"><span className="tooltiptext">Dodaj wydarzenie</span><FontAwesomeIcon icon={faPlusSquare} /></a>
        <a href="#" className="tooltip"><span className="tooltiptext">Moje wydarzenia</span><FontAwesomeIcon icon={faUserGroup} /></a>
        <a href="#" className="tooltip"><span className="tooltiptext">Czat</span><FontAwesomeIcon icon={faMessage} /></a>
        <a href="#" className="tooltip"><span className="tooltiptext">Ustawienia</span><FontAwesomeIcon icon={faGear} /></a>
        <a href="#" className="tooltip"><span className="tooltiptext">Wyloguj</span><FontAwesomeIcon icon={faRightFromBracket} /></a>
      </div>
     
    </nav>
  );
}
