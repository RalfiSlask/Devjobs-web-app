import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Devjob from './pages/devjob/Devjob';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devjob" element={<Devjob />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


