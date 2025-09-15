import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">3D Configurator</a>
      <ul className="nav-list">
        <li>
          <a href="/">Link 1</a>
        </li>
        <li>
          <a href="/">Link 2</a>
        </li>
        <li>
          <a href="/">Link 3</a>
        </li>
      </ul>
    </nav>
  );
}
