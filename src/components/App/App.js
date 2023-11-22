import { Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home';
import Navigation from '../Navigation/Navigation'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
