import './GrowthEngine.css';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';

export default function GrowthEngine() {
  return (
    <section className="growth section">
      <div className="container">
        <div className="growth__inner">
          <SectionLabel>What is Grouped?</SectionLabel>
          <h2 className="growth__title">
            the growth engine<br />
            for direct-to-fan<br />
            relationships
          </h2>
          <p className="growth__body text-secondary text-large">
            A suite of simple tools and a space to build your most important fan connections.
            No ads. No algorithms. Just your music, your audience, and the data to grow them.
          </p>
          <Button variant="ghost">Learn more &rarr;</Button>
        </div>
      </div>
    </section>
  );
}
