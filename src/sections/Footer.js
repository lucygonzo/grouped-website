import './Footer.css';
import logoIcon from '../assets/images/grouped-icon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4>Stay in the loop</h4>
          <p className="text-secondary">
            Get updates on new features and exclusive content delivered to your inbox.
          </p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input"
            />
            <button type="submit" className="btn btn--primary btn--default">
              Subscribe
            </button>
          </form>
        </div>

        {/* Links grid */}
        <div className="footer__grid grid grid--4">
          <div className="footer__col">
            <div className="footer__brand flex flex--center flex--gap-sm">
              <img src={logoIcon} alt="Grouped" className="footer__logo" />
              <span className="footer__wordmark">Grouped</span>
            </div>
          </div>
          <div className="footer__col">
            <h6 className="footer__heading">Product</h6>
            <a href="#" className="footer__link">Features</a>
            <a href="#" className="footer__link">Pricing</a>
            <a href="#" className="footer__link">Changelog</a>
          </div>
          <div className="footer__col">
            <h6 className="footer__heading">Company</h6>
            <a href="#" className="footer__link">About</a>
            <a href="#" className="footer__link">Blog</a>
            <a href="#" className="footer__link">Careers</a>
          </div>
          <div className="footer__col">
            <h6 className="footer__heading">Legal</h6>
            <a href="#" className="footer__link">Privacy</a>
            <a href="#" className="footer__link">Terms</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom flex flex--between">
          <span className="text-secondary text-small">
            &copy; {new Date().getFullYear()} Grouped. All rights reserved.
          </span>
          <div className="footer__social flex flex--gap-md">
            <a href="#" className="footer__link text-small">Twitter</a>
            <a href="#" className="footer__link text-small">Instagram</a>
            <a href="#" className="footer__link text-small">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
