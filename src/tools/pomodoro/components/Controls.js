import React from "react";
import { ButtonGroup, Button } from "../styles";

const Controls = ({ isRunning, setIsRunning, resetTimer }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "⏸️ 일시정지" : "▶️ 시작"}
      </Button>
      <Button onClick={resetTimer}>🔄 리셋</Button>
    </ButtonGroup>
  );
};

export default Controls;
