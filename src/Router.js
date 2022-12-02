import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Monsters from './Monsters/Monsters';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/monster" element={<Monsters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
