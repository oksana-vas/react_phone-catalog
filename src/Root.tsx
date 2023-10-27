import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import App from './App';
import { HomePage } from './pages/HomePage';

export const Root: React.FC = () => (
  <AppProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </AppProvider>
);
