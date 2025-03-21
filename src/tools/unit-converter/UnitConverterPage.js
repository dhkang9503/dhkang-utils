import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import UnitConverter from './UnitConverter';
import { useTranslation } from 'react-i18next';
// import { initI18n } from './i18n';
import { Helmet } from 'react-helmet-async';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding-left: 160px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-bottom: 100px;
  }
`;

const AdBanner = styled.div`
  width: 160px;
  height: 600px;
  position: fixed;
  left: 0;
  top: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const AdMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90px;
    background-color: #f0f0f0;
  }
`;

const DarkModeToggle = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background: none;
  border: 2px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
`;

function UnitConverterPage() {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);


  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>단위 변환기 - 길이, 무게, 온도, 시간, 데이터 등 빠른 변환</title>
        <meta name="description" content="길이, 무게, 온도, 부피, 시간, 속도, 압력, 에너지, 면적, 데이터 용량까지 빠르고 정확하게 변환하는 무료 단위 변환기입니다. 다국어, 다크모드, 반응형 지원." />
        <meta name="keywords" content="단위 변환기, 단위변환, 길이 변환, 무게 변환, 온도 변환, 속도 변환, 유틸리티 툴, free unit converter" />

        <meta property="og:title" content="단위 변환기 - 빠르고 정확한 변환" />
        <meta property="og:description" content="길이, 무게, 온도, 시간, 데이터 용량 등 모든 단위 변환을 지원하는 올인원 유틸리티" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://dhkang-utils.netlify.app/tools/unit-converter" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="단위 변환기" />
        <meta name="twitter:description" content="다국어 지원, 다크모드, 모바일 대응 단위 변환기 툴" />
        <meta name="twitter:image" content="/og-image.png" />

        <link rel="alternate" hreflang="ko" href="https://dhkang-utils.netlify.app/tools/unit-converter/ko/" />
        <link rel="alternate" hreflang="en" href="https://dhkang-utils.netlify.app/tools/unit-converter/en/" />
        <link rel="alternate" hreflang="de" href="https://dhkang-utils.netlify.app/tools/unit-converter/de/" />
        <link rel="alternate" hreflang="es" href="https://dhkang-utils.netlify.app/tools/unit-converter/es/" />
        <link rel="alternate" hreflang="it" href="https://dhkang-utils.netlify.app/tools/unit-converter/it/" />

        <link rel="canonical" href="https://dhkang-utils.netlify.app/tools/unit-converter/" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Wrapper>
            <AdBanner>
              <ins
                className="adsbygoogle"
                style={{ display: 'block', width: '160px', height: '600px' }}
                data-ad-client="ca-pub-9130190970200883"
                data-ad-slot="1234567890"
                data-ad-format="vertical"
              />
            </AdBanner>
            <Content>
              <DarkModeToggle onClick={() => setDarkMode(!darkMode)}>
                {t('darkMode')}
              </DarkModeToggle>
                <UnitConverter />
            </Content>
            <AdMobile>
              <ins
                className="adsbygoogle"
                style={{ display: 'block', height: '90px' }}
                data-ad-client="ca-pub-9130190970200883"
                data-ad-slot="0987654321"
                data-ad-format="horizontal"
              />
            </AdMobile>
          </Wrapper>
        </ThemeProvider>
      </main>
    </>
  );
}

export default UnitConverterPage;
