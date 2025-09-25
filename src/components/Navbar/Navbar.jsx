import Button from "../Button/Button";
import "./Navbar.css";
import { useConfigurator } from "../../context/ConfiguratorContext";

export default function Navbar() {
  const { text } = useConfigurator();

  const isDisabled = !text || text === "John Doe";

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
          <Button label="Add to Cart" disabled={isDisabled} />
        </li>
      </ul>
    </nav>
  );
}
