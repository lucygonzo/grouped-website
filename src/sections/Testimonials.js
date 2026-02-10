import './Testimonials.css';
import SectionLabel from '../components/SectionLabel';
import Card from '../components/Card';

const testimonials = [
  {
    quote: 'Grouped made my release feel like an event. My fans feel like they\'re part of something.',
    name: 'Artist Name',
    handle: '@artist',
    stars: 5,
  },
  {
    quote: 'I finally know who my real fans are. The data alone is worth it.',
    name: 'Artist Name',
    handle: '@artist',
    stars: 5,
  },
  {
    quote: 'Pre-saves went through the roof. This is how every release should work.',
    name: 'Artist Name',
    handle: '@artist',
    stars: 5,
  },
  {
    quote: 'Simple, beautiful, and it actually works. I tell every artist I know about Grouped.',
    name: 'Artist Name',
    handle: '@artist',
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial__stars">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="testimonial__star">&#9733;</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header text-center">
          <SectionLabel>Social proof</SectionLabel>
          <h3>What they say</h3>
          <p className="text-secondary">
            Independent artists & labels already trust Grouped.
          </p>
        </div>
        <div className="grid grid--2 testimonials__grid">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <Stars count={t.stars} />
              <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar" />
                <div>
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__handle text-secondary">{t.handle}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
