import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//HomePage
import HomePage from './pages/HomePage';
import Team from './pages/Team';
import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/team' element={<Team />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
