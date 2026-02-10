import { useState, useRef, useEffect } from 'react';
import './Nav.css';
import logoIcon from '../assets/images/grouped-icon.png';

const DROPDOWN_ID = 'nav-resources-menu';
const TRIGGER_ID = 'nav-resources-trigger';

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  const dropdownListRef = useRef(null);

  // Close dropdown on Escape
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dropdownOpen]);

  // Close drawer on Escape; focus trap when mobile open
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setResourcesExpanded(false);
        hamburgerRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Focus first focusable in drawer when opening
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      const firstFocusable = drawerRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [mobileOpen]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleTriggerClick = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const willOpen = !dropdownOpen;
      setDropdownOpen(willOpen);
      if (willOpen) {
        setTimeout(() => {
          const firstLink = dropdownListRef.current?.querySelector('[role="menuitem"]');
          firstLink?.focus();
        }, 0);
      }
    }
    if (e.key === 'ArrowDown' && dropdownOpen) {
      dropdownListRef.current?.querySelector('[role="menuitem"]')?.focus();
      e.preventDefault();
    }
  };

  const handleDropdownKeyDown = (e) => {
    const menu = dropdownListRef.current;
    if (!menu) return;
    const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      setDropdownOpen(false);
      triggerRef.current?.focus();
      e.preventDefault();
      return;
    }
    if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
      items[currentIndex + 1].focus();
      e.preventDefault();
      return;
    }
    if (e.key === 'ArrowUp' && currentIndex > 0) {
      items[currentIndex - 1].focus();
      e.preventDefault();
      return;
    }
    if (e.key === 'ArrowUp' && currentIndex === 0) {
      triggerRef.current?.focus();
      e.preventDefault();
      return;
    }
    if (e.key === 'Home') {
      items[0]?.focus();
      e.preventDefault();
      return;
    }
    if (e.key === 'End') {
      items[items.length - 1]?.focus();
      e.preventDefault();
    }
  };

  const closeDrawer = () => {
    setMobileOpen(false);
    setResourcesExpanded(false);
    hamburgerRef.current?.focus();
  };

  const resourcesItems = [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        <div className="container">
          <div className="nav__left">
            <div className="nav__links">
              <a href="#features" className="nav__link">
                Features
              </a>
              <a href="#about" className="nav__link">
                About
              </a>
              <div className="nav__resources-wrap" ref={dropdownRef}>
                <button
                  ref={triggerRef}
                  id={TRIGGER_ID}
                  type="button"
                  className="nav__resources-trigger"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  aria-controls={DROPDOWN_ID}
                  onClick={handleTriggerClick}
                  onKeyDown={handleTriggerKeyDown}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  Resources
                  <span className="nav__chevron" aria-hidden="true">
                    ▼
                  </span>
                </button>
                <ul
                  ref={dropdownListRef}
                  id={DROPDOWN_ID}
                  className="nav__dropdown"
                  role="menu"
                  aria-labelledby={TRIGGER_ID}
                  data-open={dropdownOpen}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onKeyDown={handleDropdownKeyDown}
                >
                  {resourcesItems.map((item) => (
                    <li key={item.href} className="nav__dropdown-item" role="none">
                      <a
                        href={item.href}
                        className="nav__dropdown-link"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="nav__center">
            <a href="/" className="nav__logo">
              <img src={logoIcon} alt="Grouped" className="nav__logo-icon" />
              <span className="nav__wordmark">Grouped</span>
            </a>
          </div>

          <div className="nav__right">
            <a href="#signup" className="nav__btn nav__btn--primary">
              Sign Up
            </a>
            <a href="#signin" className="nav__btn nav__btn--secondary">
              Sign In
            </a>
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            className="nav__hamburger"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-controls="nav-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="nav__hamburger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className="nav__drawer-backdrop"
        data-open={mobileOpen}
        onClick={closeDrawer}
        onKeyDown={(e) => e.key === 'Escape' && closeDrawer()}
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
          <button
            type="button"
            className="nav__drawer-close"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="nav__drawer-links">
          <a href="#features" className="nav__drawer-link" onClick={closeDrawer}>
            Features
          </a>
          <a href="#about" className="nav__drawer-link" onClick={closeDrawer}>
            About
          </a>
          <div>
            <button
              type="button"
              className="nav__drawer-resources-trigger"
              aria-expanded={resourcesExpanded}
              aria-controls="nav-drawer-sublinks"
              id="nav-drawer-resources"
              onClick={() => setResourcesExpanded((prev) => !prev)}
            >
              Resources
              <span className="nav__chevron" aria-hidden="true">
                ▼
              </span>
            </button>
            <div
              id="nav-drawer-sublinks"
              className="nav__drawer-sublinks"
              data-expanded={resourcesExpanded}
            >
              <div className="nav__drawer-sublinks-inner">
                {resourcesItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="nav__drawer-sublink"
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="nav__drawer-buttons">
          <a href="#signup" className="nav__btn nav__btn--primary" onClick={closeDrawer}>
            Sign Up
          </a>
          <a href="#signin" className="nav__btn nav__btn--secondary" onClick={closeDrawer}>
            Sign In
          </a>
        </div>
      </div>
    </>
  );
}
