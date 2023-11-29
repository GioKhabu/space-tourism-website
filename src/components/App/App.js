import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home';
import Navigation from '../Navigation/Navigation';
import Destination from '../../routes/Destination';
import Crew from '../../routes/Crew';
import Technology from '../../routes/Technology'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={`/destinations/:id`} element={<Destination />} />
        <Route path={`/crew/:id`} element={<Crew />} />
        <Route path={`/technology/:id`} element={<Technology />} />
      </Route>
    </Routes>
  );
}

export default App;
