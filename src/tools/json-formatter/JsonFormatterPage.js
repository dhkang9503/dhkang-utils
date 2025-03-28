// src/tools/json-formatter/JsonFormatterPage.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import JsonFormatter from './components/JsonFormatter';
import {
  PageContainer,
  GlobalStyle,
  AdBanner,
  ThemeToggle,
  Title
} from './styles';

const JsonFormatterPage = () => {
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
        <title>JSON Formatter & Validator | Pretty Print JSON Online</title>
        <meta name="description" content="Format and validate your JSON instantly with this free online tool." />
        <link rel="canonical" href="https://dhkang-utils.netlify.app/tools/json-formatter" />
        <meta property="og:title" content="JSON Formatter & Validator" />
        <meta property="og:description" content="Pretty print and validate JSON with ease. Free, simple, and fast." />
        <meta property="og:url" content="https://dhkang-utils.netlify.app/tools/json-formatter" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dhkang-utils.netlify.app/og-image-json.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JSON Formatter & Validator" />
        <meta name="twitter:description" content="Free online tool to format and validate JSON." />
        <meta name="twitter:image" content="https://dhkang-utils.netlify.app/og-image-json.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "JSON Formatter & Validator",
            "description": "Format and validate your JSON instantly with this free online tool.",
            "url": "https://dhkang-utils.netlify.app/tools/json-formatter"
          }
        `}</script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130190970200883" crossOrigin="anonymous"></script>
      </Helmet>

      <GlobalStyle isDarkMode={isDarkMode} />
      <PageContainer>
        <Title>JSON Formatter & Validator</Title>
        <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </ThemeToggle>
        <JsonFormatter isDarkMode={isDarkMode} />
        <AdBanner>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '90px' }}
            data-ad-client="ca-pub-9130190970200883"
            data-ad-slot="9999999999"
            data-ad-format="horizontal"
          />
        </AdBanner>
      </PageContainer>
    </>
  );
};

export default JsonFormatterPage;
