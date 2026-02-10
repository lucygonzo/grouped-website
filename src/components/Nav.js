import './Nav.css';
import Button from './Button';
import logoIcon from '../assets/images/grouped-icon.png';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container flex flex--between">
        <div className="nav__left flex flex--center flex--gap-lg">
          <a href="/" className="nav__logo flex flex--center flex--gap-sm">
            <img src={logoIcon} alt="Grouped" className="nav__logo-icon" />
            <span className="nav__wordmark">Grouped</span>
          </a>
          <div className="nav__links">
            <a href="#features" className="nav__link">Features</a>
            <a href="#about" className="nav__link">About</a>
            <a href="#resources" className="nav__link">Resources</a>
          </div>
        </div>
        <div className="nav__right flex flex--center flex--gap-md">
          <Button variant="ghost" size="small">Log in</Button>
          <Button variant="primary" size="small">Get started</Button>
        </div>
      </div>
    </nav>
  );
}
