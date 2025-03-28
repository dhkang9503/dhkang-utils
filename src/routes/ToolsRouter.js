import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PomodoroPage from '../tools/pomodoro/PomodoroPage';
import UnitConverterPage from '../tools/unit-converter/UnitConverterPage';

const ToolsRouter = () => {
  return (
    <Routes>
      <Route path="pomodoro" element={<PomodoroPage />} />
      <Route path="unit-converter" element={<UnitConverterPage />} />
    </Routes>
  );
};

export default ToolsRouter;
