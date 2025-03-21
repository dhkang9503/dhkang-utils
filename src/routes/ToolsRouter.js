// routes/ToolsRouter.tsx
import { Routes, Route } from 'react-router-dom';
import PomodoroPage from '../tools/pomodoro/PomodoroPage';
import UnitConverterPage from '../tools/unit-converter/UnitConverterPage';
// import CalculatorPage from '../tools/calculator/CalculatorPage';

const ToolsRouter = () => {
  return (
    <Routes>
      <Route path="pomodoro" element={<PomodoroPage />} />
      <Route path="unit-converter" element={<UnitConverterPage />} />
    </Routes>
  );
};

export default ToolsRouter;
