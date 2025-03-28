import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PomodoroPage from '../tools/pomodoro/PomodoroPage';
import UnitConverterPage from '../tools/unit-converter/UnitConverterPage';

const ToolsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tools/pomodoro" element={<PomodoroPage />} />
      <Route path="tools/unit-converter" element={<UnitConverterPage />} />
    </Routes>
  );
};

export default ToolsRouter;
