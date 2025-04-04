import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <nav>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo kasa"></img>
        </div>
        <div>
          <Link to="/">Accueil</Link>
        </div>
        <div>
          <Link to="/about">A propos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
