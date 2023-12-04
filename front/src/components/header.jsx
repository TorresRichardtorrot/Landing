import { FaUserCircle } from "react-icons/fa";

 function Header() {
  return (
    <header className="header__containers">
      <div className="post__navbar">
      </div>
      <div className="navbar__conatiner">
        <nav>
            <div className="navbar__logo">
                <h3>Logo</h3>
            </div>
            <ul className="navbar__ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacto</a></li>
                <li className="navbar__link__user"><a href="#"><FaUserCircle /></a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header