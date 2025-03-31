import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Container = styled.main`
  padding: 40px 20px 120px;
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const ToolList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
`;

const ToolItem = styled.li`
  background: #f2f2f2;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #e0e0e0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const AdBanner = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #555;
  margin: -20px 0 40px;
`;

const HomePage = () => {
  const tools = [
    { name: 'Pomodoro Timer', path: '/tools/pomodoro' },
    { name: 'Unit Converter', path: '/tools/unit-converter' },
    { name: 'JSON Formatter & Validator', path: '/tools/json-formatter'},
    { name: 'RegExp Tester', path: '/tools/regexp-tester'},
    { name: 'Lorem Ipsum Generator', path: '/tools/lorem-ipsum'}
  ];

  return (
    <>
      <Helmet>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M5E3Z1RNMN"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M5E3Z1RNMN');
  `}
</script>
        <title>dhkang utils - Productivity Tools for Developers & Designers | Focus & Utility</title>
  <meta name="description" content="Enhance your focus and daily productivity with a collection of utility tools tailored for developers and designers." />
  <meta name="keywords" content="developer tools, designer tools, productivity, focus, utility tools, web tools, daily workflow, UI/UX, coding tools, creative tools" />
  <meta name="author" content="dhkang-utils" />
  <meta property="og:title" content="Productivity Tools for Developers & Designers" />
  <meta property="og:description" content="Boost your workflow with focus-enhancing and productivity-driven tools made for creatives and coders." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dhkang-utils.netlify.app" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Productivity Tools for Developers & Designers" />
  <meta name="twitter:description" content="Explore utility tools designed to help you stay focused and productive every day." />
        <link rel="canonical" href="https://dhkang-utils.netlify.app" />
      </Helmet>

      <Container>
        <Title>dhkang utils</Title>
        <Description>
    These tools were built out of personal need. <br/>
    If you find anything that can be improved or you'd like to request a new tool, feel free to email me.<br/>
    Suggestions are welcome, and if you want, I can even tag your nickname on the tool page!<br/>
    <br/>
    dhkang9503@gmail.com 😎<br/>
  </Description>
        <ToolList>
          {tools.map((tool) => (
            <ToolItem key={tool.path}>
              <Link to={tool.path}>{tool.name}</Link>
            </ToolItem>
          ))}
        </ToolList>
      </Container>

      <AdBanner>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '90px' }}
          data-ad-client="ca-pub-9130190970200883"
          data-ad-slot="9876543210"
          data-ad-format="horizontal"
        ></ins>
      </AdBanner>
    </>
  );
};

export default HomePage;
