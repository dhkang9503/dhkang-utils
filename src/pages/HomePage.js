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

const HomePage = () => {
  const tools = [
    { name: 'Pomodoro Timer', path: '/tools/pomodoro' },
    { name: 'Unit Converter', path: '/tools/unit-converter' },
    { name: 'JSON Formatter & Validator', path: '/tools/json-formatter'},
    { name: 'RegExp Tester', path: '/tools/regexp-tester'}
  ];

  return (
    <>
      <Helmet>
        <title>dhkang utils - 유용한 도구 모음</title>
        <meta
          name="description"
          content="집중력 향상과 일상에 도움이 되는 다양한 유틸리티 도구를 제공합니다. 포모도로 타이머, 단위 변환기 등."
        />
        <link rel="canonical" href="https://dhkang-utils.netlify.app" />
      </Helmet>

      <Container>
        <Title>dhkang utils</Title>
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
