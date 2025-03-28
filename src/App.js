// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolsRouter from './routes/ToolsRouter';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools/*" element={<ToolsRouter />} />
        {/* 홈이나 기타 페이지도 여기에 */}
      </Routes>
    </Router>
  );
}

export default App;
