// src/tools/json-formatter/styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#121212' : '#ffffff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    transition: background 0.3s;
  }
`;

export const PageContainer = styled.div`
  padding: 60px 20px 140px;
  max-width: 960px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const ThemeToggle = styled.button`
  position: fixed;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1e1e1e' : '#f2f2f2')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

export const ResultBox = styled(TextArea)`
  margin-top: 20px;
`;

export const ValidateStatus = styled.div`
  margin: 10px 0;
  color: ${({ isValid }) => (isValid ? '#4caf50' : '#f44336')};
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #1976d2;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

export const AdBanner = styled.div`
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
