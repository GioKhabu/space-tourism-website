import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home';
import Navigation from '../Navigation/Navigation';
import Destination from '../../routes/Destination';
import Crew from '../../routes/Crew'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={`/destination/:id`} element={<Destination />}></Route>
        <Route path={`/crew/:id`} element={<Crew />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
