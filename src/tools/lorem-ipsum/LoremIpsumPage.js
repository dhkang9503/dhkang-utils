// src/tools/lorem-ipsum/LoremIpsumPage.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoremIpsumGenerator from './components/LoremIpsumGenerator';
import {
  PageContainer,
  GlobalStyle,
  ThemeToggle,
  Title,
  AdBanner
} from './styles';

const LoremIpsumPage = () => {
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
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0QMLB53J2V"></script>
<script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0QMLB53J2V');
  `}
</script>
        <title>Lorem Ipsum Generator | Free Placeholder Text</title>
        <meta name="description" content="Generate customizable Lorem Ipsum placeholder text for your designs and mockups." />
        <link rel="canonical" href="https://dhkang-utils.netlify.app/tools/lorem-ipsum" />
        <meta property="og:title" content="Lorem Ipsum Generator" />
        <meta property="og:description" content="Free online lorem ipsum generator. Generate placeholder paragraphs or words easily." />
        <meta property="og:url" content="https://dhkang-utils.netlify.app/tools/lorem-ipsum" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lorem Ipsum Generator" />
        <meta name="twitter:description" content="Generate placeholder text for web and design projects easily." />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130190970200883" crossOrigin="anonymous"></script>
      </Helmet>

      <GlobalStyle isDarkMode={isDarkMode} />
      <PageContainer>
        <Title>Lorem Ipsum Generator</Title>
        <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </ThemeToggle>
        <LoremIpsumGenerator isDarkMode={isDarkMode} />
        <AdBanner>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '90px' }}
            data-ad-client="ca-pub-9130190970200883"
            data-ad-slot="7777777777"
            data-ad-format="horizontal"
          />
        </AdBanner>
      </PageContainer>
    </>
  );
};

export default LoremIpsumPage;
