import './MoreFeatures.css';
import SectionLabel from '../components/SectionLabel';
import Card from '../components/Card';

const items = [
  {
    title: 'Schedule with precision',
    description: 'Plan and automate your releases. Set the perfect drop time and let Grouped handle the rest.',
  },
  {
    title: 'Build real momentum',
    description: 'Turn every release into a campaign. Stack pre-saves, links, and fan pages into one cohesive rollout.',
  },
  {
    title: 'Reach the right people',
    description: 'Use audience insights to target fans who actually care. No wasted effort, no empty plays.',
  },
  {
    title: 'Stay in control always',
    description: 'Own your data, your audience, and your story. No middlemen, no algorithms deciding your fate.',
  },
];

export default function MoreFeatures() {
  return (
    <section className="more-features section">
      <div className="container">
        <div className="more-features__header text-center">
          <SectionLabel>And there's more</SectionLabel>
          <h3>Don't worry, there's more.</h3>
          <p className="text-secondary">
            It would take you all day to understand every feature. Here are some of the highlights.
          </p>
        </div>
        <div className="grid grid--2 more-features__grid">
          {items.map((item, i) => (
            <Card key={i}>
              <div className="more-features__card-visual" />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
