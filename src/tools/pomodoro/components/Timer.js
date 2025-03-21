import React, { useEffect, useRef } from "react";
import { TimerDisplay } from "../styles";

const Timer = ({ isRunning, setIsRunning, minutes, setMinutes, seconds, setSeconds, switchSession }) => {
  const startTimeRef = useRef(null);
  const initialSecondsRef = useRef(null);

  useEffect(() => {
    let timer;

    if (isRunning) {
      // 타이머 시작 시점에 현재 시간과 남은 전체 초를 초기화
      startTimeRef.current = Date.now();
      initialSecondsRef.current = minutes * 60 + seconds;

      timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const remainingSeconds = initialSecondsRef.current - elapsed;

        if (remainingSeconds <= 0) {
          clearInterval(timer);
          setMinutes(0);
          setSeconds(0);
          setIsRunning(false);
          switchSession();
        } else {
          setMinutes(Math.floor(remainingSeconds / 60));
          setSeconds(remainingSeconds % 60);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds, setIsRunning, setMinutes, setSeconds, switchSession]);

  return (
    <TimerDisplay>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </TimerDisplay>
  );
};

export default Timer;
