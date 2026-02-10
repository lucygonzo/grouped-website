import './Card.css';

export default function Card({ children, variant = 'default', className = '' }) {
  return (
    <div className={`card card--${variant} ${className}`}>
      {children}
    </div>
  );
}
