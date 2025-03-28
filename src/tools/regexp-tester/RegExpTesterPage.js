// src/tools/regexp-tester/RegExpTesterPage.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RegExpTester from './components/RegExpTester';
import {
  PageContainer,
  GlobalStyle,
  ThemeToggle,
  Title,
  AdBanner
} from './styles';

const RegExpTesterPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <title>RegExp Tester | JavaScript Regex Tool</title>
        <meta name="description" content="Test and visualize your JavaScript regular expressions. Supports groups, highlights, and examples." />
        <link rel="canonical" href="https://dhkang-utils.netlify.app/tools/regexp-tester" />
        <meta property="og:title" content="RegExp Tester" />
        <meta property="og:description" content="Free online tool for testing, highlighting, and debugging JavaScript regular expressions." />
        <meta property="og:url" content="https://dhkang-utils.netlify.app/tools/regexp-tester" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RegExp Tester" />
        <meta name="twitter:description" content="Test and visualize your regex with match groups and highlights." />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130190970200883" crossOrigin="anonymous"></script>
      </Helmet>

      <GlobalStyle isDarkMode={isDarkMode} />
      <PageContainer>
        <Title>RegExp Tester</Title>
        <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </ThemeToggle>
        <RegExpTester isDarkMode={isDarkMode} />
        <AdBanner>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '90px' }}
            data-ad-client="ca-pub-9130190970200883"
            data-ad-slot="8888888888"
            data-ad-format="horizontal"
          />
        </AdBanner>
      </PageContainer>
    </>
  );
};

export default RegExpTesterPage;
