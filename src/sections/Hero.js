import './Hero.css';
import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            The <span className="text-accent">G</span> artists<br />
            don't just drop<br />
            music.<br />
            They create moments.
          </h1>
          <p className="hero__subtitle text-large">
            The tools to connect with fans before, during and after the release.
            Grouped helps you build momentum, drop with precision, and grow a fanbase
            that actually sticks.
          </p>
          <div className="hero__actions flex flex--gap-md">
            <Button variant="primary">Get started</Button>
            <Button variant="secondary">See how it works</Button>
          </div>
          <div className="hero__proof">
            <SectionLabel>Artists growing together — join the waiting list</SectionLabel>
          </div>
        </div>
      </div>
    </section>
  );
}
