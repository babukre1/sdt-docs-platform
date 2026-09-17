import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {HomePage} from './pages/HomePage';
import {MaterialsPage} from './pages/MaterialsPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {SchedulePage} from './pages/SchedulePage';

const page = document.body.dataset.page;

function App() {
  switch (page) {
    case 'schedule':
      return <SchedulePage />;
    case 'materials':
      return <MaterialsPage />;
    case 'not-found':
      return <NotFoundPage />;
    default:
      return <HomePage />;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
