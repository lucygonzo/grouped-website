import { useRef, useState, useEffect } from 'react';
import './Hero.css';
import Button from '../components/Button';
import heroTopLeft from '../assets/images/hero/1905fa3356a10baba8928a399e1d6326e9a4095a.png';
import heroTopCenter from '../assets/images/hero/1eac0d4393479955dffb6d055489873dad89d3de.png';
import heroTopRight from '../assets/images/hero/22c071bac4c0ad4e40fdc73940fced784f2303c8.png';
import heroMidLeft from '../assets/images/hero/7759fd769a02ddc683cfb5a0d4e9e6ba9fca6ec9.png';
import heroMidRight from '../assets/images/hero/3f31eec6179bcc8d7f708d8a24ba237cac6ad69c.png';
import heroBottomLeft from '../assets/images/hero/535edeffe4083dc27117fa71b729bbdb02cf0fb2.png';
import heroBottomCenter from '../assets/images/hero/64115fc7978085a839ecea1923b3b12480d75034.png';
import heroBottomRight from '../assets/images/hero/67528fd50f6e24fbadf05099b894dd6bca87c88a.png';
import heroTexture from '../assets/images/hero/header_background_texture.png';

const HERO_IMAGES = [
  { src: heroTopLeft, alt: 'Artist portrait', position: 'top-left' },
  { src: heroTopCenter, alt: 'Artist portrait', position: 'top-center' },
  { src: heroTopRight, alt: 'Artist portrait', position: 'top-right' },
  { src: heroMidLeft, alt: 'Artist portrait', position: 'mid-left' },
  { src: heroMidRight, alt: 'Artist portrait', position: 'mid-right' },
  { src: heroBottomLeft, alt: 'Artist portrait', position: 'bottom-left' },
  { src: heroBottomCenter, alt: 'Artist portrait', position: 'bottom-center' },
  { src: heroBottomRight, alt: 'Artist portrait', position: 'bottom-right' },
];

const PARALLAX_STRENGTH = 40.32; /* +100% from 20.16 */
const CENTER_X_POSITIONS = ['top-center', 'bottom-center'];
const CENTER_Y_POSITIONS = ['mid-left', 'mid-right'];

export default function Hero() {
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouse({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const moveX = (mouse.x - 0.5) * PARALLAX_STRENGTH;
  const moveY = (mouse.y - 0.5) * PARALLAX_STRENGTH;

  const getCollageTransform = (position) => {
    if (CENTER_X_POSITIONS.includes(position)) {
      return `translate(calc(-50% + ${moveX}px), ${moveY}px)`;
    }
    if (CENTER_Y_POSITIONS.includes(position)) {
      return `translate(${moveX}px, calc(-50% + ${moveY}px))`;
    }
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <section ref={heroRef} className="hero section" style={{ '--hero-texture': `url(${heroTexture})` }}>
      <div className="hero__collage" aria-hidden="true">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`hero__collage-item hero__collage-item--${img.position}`}
            style={{ transform: getCollageTransform(img.position) }}
          >
            <img src={img.src} alt={img.alt} loading="eager" />
          </div>
        ))}
      </div>
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__copy">
            <h1 className="hero__title">
              <span className="hero__title-line1">Stop dropping music into the void. Start building a fan-powered career.</span>
              <br />
              <span className="hero__title-line2">They create moments.</span>
            </h1>
            <p className="hero__subtitle">
              Your music is already creating fans, but they're scattered and hard to identify.
              Grouped helps you find them, reward them, and convert them into channels you own,
              ensuring each release stacks on top of the other and every early access, exclusive
              content, and BTS drop acts as a growth engine for your fanbase.
            </p>
          </div>
          <div className="hero__actions flex flex--gap-md">
            <Button variant="primary">Get Started Free</Button>
            <Button variant="secondary">Explore Artist Groups</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
