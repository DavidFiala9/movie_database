import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routing } from './assets/components/Router/Routes.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
