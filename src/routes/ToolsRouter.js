// routes/ToolsRouter.tsx
import { Routes, Route } from 'react-router-dom';
import PomodoroPage from '../tools/pomodoro/PomodoroPage';
// import CalculatorPage from '../tools/calculator/CalculatorPage';

const ToolsRouter = () => {
  return (
    <Routes>
      <Route path="pomodoro" element={<PomodoroPage />} />
      {/* <Route path="calculator" element={<CalculatorPage />} /> */}
      {/* 다른 툴들도 여기에 추가 */}
    </Routes>
  );
};

export default ToolsRouter;
