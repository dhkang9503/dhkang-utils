import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PomodoroPage from '../tools/pomodoro/PomodoroPage';
import UnitConverterPage from '../tools/unit-converter/UnitConverterPage';
import JsonFormatterPage from '../tools/json-formatter/JsonFormatterPage';

const ToolsRouter = () => {
  return (
    <Routes>
      <Route path="pomodoro" element={<PomodoroPage />} />
      <Route path="unit-converter" element={<UnitConverterPage />} />
      <Route path="json-formatter" element={<JsonFormatterPage />} />
    </Routes>
  );
};

export default ToolsRouter;
