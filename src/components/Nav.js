import { useState, useRef, useEffect } from 'react';
import './Nav.css';
import logoIcon from '../assets/images/grouped-icon.png';

const FEATURES_ID = 'nav-features-menu';
const ABOUT_ID = 'nav-about-menu';
const RESOURCES_ID = 'nav-resources-menu';

const FEATURES_ITEMS = [
  { label: 'Releases', href: '#releases' },
  { label: 'Group', href: '#group' },
  { label: 'Growth', href: '#growth' },
];

const ABOUT_ITEMS = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Artists', href: '#artists' },
  { label: 'Careers', href: '#careers' },
  { label: 'Media', href: '#media' },
];

const RESOURCES_ITEMS = [
  { label: 'Blog', href: '#blog' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
];

function Dropdown({ id, triggerId, isOpen, onOpen, onClose, label, items, listRef, wrapRef }) {

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <div className="nav__dropdown-wrap" ref={wrapRef}>
      <button
        type="button"
        id={triggerId}
        className="nav__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {label}
        <span className="nav__chevron" aria-hidden="true">▼</span>
      </button>
      <ul
        ref={listRef}
        id={id}
        className="nav__dropdown"
        role="menu"
        aria-labelledby={triggerId}
        data-open={isOpen}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {items.map((item) => (
          <li key={item.href} className="nav__dropdown-item" role="none">
            <a href={item.href} className="nav__dropdown-link" role="menuitem" onClick={onClose}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Nav() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const featuresWrapRef = useRef(null);
  const aboutWrapRef = useRef(null);
  const resourcesWrapRef = useRef(null);
  const featuresListRef = useRef(null);
  const aboutListRef = useRef(null);
  const resourcesListRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;
    function handleKey(e) {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      const first = drawerRef.current.querySelector('button, [href]');
      first?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeDrawer = () => {
    setMobileOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <div className="nav__container">
          {/* Desktop: left links + dropdowns */}
          <div className="nav__left">
            <div className="nav__links">
              <Dropdown
                id={FEATURES_ID}
                triggerId="nav-features-trigger"
                isOpen={featuresOpen}
                onOpen={() => setFeaturesOpen(true)}
                onClose={() => setFeaturesOpen(false)}
                label="Features"
                items={FEATURES_ITEMS}
                listRef={featuresListRef}
                wrapRef={featuresWrapRef}
              />
              <Dropdown
                id={ABOUT_ID}
                triggerId="nav-about-trigger"
                isOpen={aboutOpen}
                onOpen={() => setAboutOpen(true)}
                onClose={() => setAboutOpen(false)}
                label="About"
                items={ABOUT_ITEMS}
                listRef={aboutListRef}
                wrapRef={aboutWrapRef}
              />
              <Dropdown
                id={RESOURCES_ID}
                triggerId="nav-resources-trigger"
                isOpen={resourcesOpen}
                onOpen={() => setResourcesOpen(true)}
                onClose={() => setResourcesOpen(false)}
                label="Resources"
                items={RESOURCES_ITEMS}
                listRef={resourcesListRef}
                wrapRef={resourcesWrapRef}
              />
            </div>
          </div>

          {/* Center: logo */}
          <div className="nav__center">
            <a href="/" className="nav__logo">
              <img src={logoIcon} alt="Grouped" className="nav__logo-icon" />
              <span className="nav__wordmark">Grouped</span>
            </a>
          </div>

          {/* Desktop: right buttons */}
          <div className="nav__right">
            <a href="#signup" className="nav__btn nav__btn--primary">Sign Up</a>
            <a href="#signin" className="nav__btn nav__btn--secondary">Sign In</a>
          </div>

          {/* Mobile: hamburger (visible only on mobile) */}
          <button
            ref={hamburgerRef}
            type="button"
            className="nav__hamburger"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-controls="nav-drawer"
            onClick={() => setMobileOpen((p) => !p)}
          >
            <span className="nav__hamburger-icon" aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>

          {/* Mobile: Sign in only (visible only on mobile) */}
          <div className="nav__mobile-cta">
            <a href="#signin" className="nav__btn nav__btn--primary">Sign in</a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className="nav__backdrop"
        data-open={mobileOpen}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="nav-drawer"
        className="nav__drawer"
        data-open={mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="nav__drawer-header">
          <button type="button" className="nav__drawer-close" aria-label="Close menu" onClick={closeDrawer}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="nav__drawer-body">
          <a href="#features" className="nav__drawer-link" onClick={closeDrawer}>Features</a>
          <a href="#about" className="nav__drawer-link" onClick={closeDrawer}>About</a>
          <a href="#resources" className="nav__drawer-link" onClick={closeDrawer}>Resources</a>
          <div className="nav__drawer-buttons">
            <a href="#signup" className="nav__btn nav__btn--primary" onClick={closeDrawer}>Sign Up</a>
            <a href="#signin" className="nav__btn nav__btn--secondary" onClick={closeDrawer}>Sign In</a>
          </div>
        </div>
      </div>
    </>
  );
}
