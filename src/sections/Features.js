import './Features.css';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';

const features = [
  {
    label: 'Pre-saves & Smart Links',
    title: 'Own the first listen.',
    description: [
      'Stop sending fans to the algorithm. Build a pre-save engine that captures fans and directs them to your music on every platform.',
      'Build your most powerful fanbase. Give fans one place to connect with everything you do.',
      'Drop anything. Let fans land where they prefer. Set up in seconds. Customizable before and after promotion.',
    ],
    align: 'left',
  },
  {
    label: 'Fan Pages',
    title: 'Turn drops into shared moments that make fans feel like VIPs.',
    description: [
      'Give fans an experience, not just a link. Create beautiful, customizable fan pages for every release, tour, or moment.',
      'All your links in one home. Showcase your music, merch, and content in one place.',
      'Works with every platform. Customize to match your brand.',
    ],
    align: 'right',
  },
  {
    label: 'Groups',
    title: 'Bring fans into your Group.',
    description: [
      'Create a private space for your biggest supporters. Share exclusive content, drops, and updates directly with the fans who matter most.',
      'Build your subscribers. Grow your audience through direct connection.',
      'Sell or gate exclusives. Manage access and grow your community.',
    ],
    align: 'left',
  },
  {
    label: 'Audience Insights',
    title: 'Watch your inner circle grow.',
    description: [
      'See exactly who your fans are, where they come from, and what they engage with. Real-time insights that help you make smarter decisions about every release.',
    ],
    align: 'right',
  },
];

export default function Features() {
  return (
    <section className="features">
      {features.map((feature, i) => (
        <div key={i} className={`feature section feature--${feature.align}`}>
          <div className="container">
            <div className="feature__grid">
              <div className="feature__content">
                <SectionLabel>{feature.label}</SectionLabel>
                <h3 className="feature__title">{feature.title}</h3>
                <div className="feature__body">
                  {feature.description.map((p, j) => (
                    <p key={j} className="text-secondary">{p}</p>
                  ))}
                </div>
                <Button variant="ghost">Learn more &rarr;</Button>
              </div>
              <div className="feature__visual">
                <div className="feature__placeholder" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
