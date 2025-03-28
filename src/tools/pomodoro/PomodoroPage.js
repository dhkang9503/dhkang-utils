import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import AdSense from "./components/AdSense"; // ✅ 광고 추가
import { Container, Title, ThemeButton, SessionCounter, GlobalStyle, ContentWrapper } from "./styles";
import { Helmet } from 'react-helmet-async';

const PomodoroPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(workMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [workSessionCount, setWorkSessionCount] = useState(0);
  const [breakSessionCount, setBreakSessionCount] = useState(0);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  const sendNotification = (message) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("⏳ 포모도로 타이머", { body: message, icon: "/favicon.ico" });
    }
  };

  const switchSession = () => {
    if (isWorkSession) {
      setMinutes(breakMinutes);
      setWorkSessionCount((prev) => prev + 1);
      sendNotification("🎉 집중 시간이 끝났어요! 이제 휴식하세요.");
    } else {
      setMinutes(workMinutes);
      setBreakSessionCount((prev) => prev + 1);
      sendNotification("🚀 휴식이 끝났어요! 다시 집중하세요.");
    }
    setIsWorkSession(!isWorkSession);
    setSeconds(0);
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(workMinutes);
    setSeconds(0);
    setIsWorkSession(true);
    setWorkSessionCount(0);
    setBreakSessionCount(0);
  };

  return (
    <>
    <Helmet>
      <title>포모도로 타이머 | MyTools</title>
      <meta name="description" content="집중력을 높이는 포모도로 타이머를 사용해보세요!" />
      <link rel="canonical" href="https://dhkang-utils.netlify.app/tools/pomodoro" />
      <meta property="og:title" content="포모도로 타이머" />
      <meta property="og:description" content="집중력을 높여보세요. 무료 온라인 타이머" />
      <meta property="og:url" content="https://dhkang-utils.netlify.app/tools/pomodoro" />
      <meta property="og:image" content="https://dhkang-utils.netlify.app/tools/pomodoro" />
      <meta name="twitter:card" content="summary_large_image" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZNVHWFSQFW"></script>
<script>
    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZNVHWFSQFW');
`}
</script>
    </Helmet>
    <main>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Container isDarkMode={isDarkMode}>
        <Title>포모도로 타이머</Title>
        <ThemeButton isDarkMode={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🌞 라이트 모드" : "🌙 다크 모드"}
        </ThemeButton>

        <ContentWrapper>
          {/* ✅ PC에서는 왼쪽 사이드바, 모바일에서는 하단 */}
          <AdSense />

          <div>
            <Timer
              isWorkSession={isWorkSession}
              workMinutes={workMinutes}
              breakMinutes={breakMinutes}
              isRunning={isRunning}
              isDarkMode={isDarkMode}
              setIsRunning={setIsRunning}
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
              switchSession={switchSession}
            />

            <SessionCounter isDarkMode={isDarkMode}>
              🎯 집중 완료: {workSessionCount} | ☕ 휴식 완료: {breakSessionCount}
            </SessionCounter>

            <Controls resetTimer={resetTimer} isRunning={isRunning} setIsRunning={setIsRunning} />
            <Settings isDarkMode={isDarkMode} setWorkMinutes={setWorkMinutes} setBreakMinutes={setBreakMinutes} />
          </div>
        </ContentWrapper>
      </Container>
      </main>
    </>
  );
};

export default PomodoroPage;
