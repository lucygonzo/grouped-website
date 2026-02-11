import './Tools.css';
import SectionLabel from '../components/SectionLabel';
import Card from '../components/Card';

const tools = [
  {
    title: 'Swap generic drops for real moments',
    description: 'Release to real fans first. Build anticipation with pre-saves and smart drops that create urgency.',
  },
  {
    title: 'Give followers one place to go from follower to fan',
    description: 'Connect every fan to what you\'re already doing. One link. Every platform. Always current.',
  },
  {
    title: 'Know exactly who your fanbase is',
    description: 'See who\'s listening, who\'s clicking, and who\'s coming back. Real data, no guessing.',
  },
];

export default function Tools() {
  return (
    <section className="tools section">
      <div className="container">
        <div className="tools__header text-center">
          <SectionLabel>Why we exist</SectionLabel>
          <h2 className="tools__title">
            Real talk: all music business tools weren't made for the actual artist.
          </h2>
          <p className="tools__subtitle text-secondary">
            Trade the guesswork for tools that help you build anticipation, drop with precision, and turn
            every release into a moment your fans won't forget.
          </p>
        </div>
        <div className="tools__grid grid grid--3">
          {tools.map((tool, i) => (
            <Card key={i}>
              <h5>{tool.title}</h5>
              <p>{tool.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
