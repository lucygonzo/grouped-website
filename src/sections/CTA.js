import './CTA.css';
import Button from '../components/Button';

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__grid grid grid--2">
          <div className="cta__block cta__block--release">
            <h3>Ready to release</h3>
            <p className="text-secondary">
              Set up your first campaign in minutes. Pre-saves, fan pages, and smart links — all in one place.
            </p>
            <Button variant="primary">Get started free</Button>
          </div>
          <div className="cta__block cta__block--movement">
            <h3>Join the movement</h3>
            <p className="text-secondary">
              Grouped is built by and for independent artists. Join a growing community that's changing how music reaches fans.
            </p>
            <Button variant="secondary">Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
