import logo from "../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
