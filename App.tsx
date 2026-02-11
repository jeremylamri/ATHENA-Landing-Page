import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { OnePagerPage } from './pages/OnePagerPage';
import { Legal } from './pages/Legal';

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home onLegalClick={() => navigate('/legal')} />} />
      <Route path="/one-pager" element={<OnePagerPage />} />
      <Route path="/legal" element={<Legal onBack={() => navigate('/')} />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;