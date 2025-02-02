import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import '/node_modules/primeflex/primeflex.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a div with id='root' in your HTML.");
}

createRoot(rootElement).render(
  <StrictMode>
    <PrimeReactProvider >
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
