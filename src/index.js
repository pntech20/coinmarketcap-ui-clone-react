import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Header from './loyout/Header';
import Footer from './loyout/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className='container mx-auto'>
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
