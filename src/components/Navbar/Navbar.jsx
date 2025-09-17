import Button from "../Button/Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <span className="logo-light">BUY</span>
        <span className="logo-bold">BUD</span>
      </a>
      <ul className="nav-list">
        <li>
          <a href="/">Store</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <Button label="ADD TO CART" />
        </li>
      </ul>
    </nav>
  );
}
