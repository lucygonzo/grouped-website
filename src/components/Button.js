import './Button.css';

export default function Button({ children, variant = 'primary', size = 'default', href, ...props }) {
  const className = `btn btn--${variant} btn--${size}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
