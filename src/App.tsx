import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, SignIn } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};
