
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Redirect to landing page by default
if (window.location.pathname === '/') {
  window.location.href = '/landing';
}

createRoot(document.getElementById("root")!).render(<App />);
