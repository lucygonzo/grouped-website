import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/reset.css';
import './styles/utilities.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
