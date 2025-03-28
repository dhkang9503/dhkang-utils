// src/tools/regexp-tester/styles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#121212' : '#ffffff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
    font-family: Arial, sans-serif;
    transition: background 0.3s;
    margin: 0;
    padding: 0;
  }
`;

export const PageContainer = styled.div`
  padding: 60px 20px 140px;
  max-width: 960px;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ThemeToggle = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background: ${({ isDarkMode }) => (isDarkMode ? '#1e1e1e' : '#f9f9f9')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
`;

export const HighlightedText = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f0f0f0;
  border-radius: 8px;
  line-height: 1.5;
  white-space: pre-wrap;

  mark {
    background: #ffeb3b;
    color: #000;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

export const ErrorBox = styled.div`
  color: #f44336;
  font-weight: bold;
  margin-top: 10px;
`;

export const GroupBox = styled.div`
  background: #e3f2fd;
  margin-top: 20px;
  padding: 15px;
  border-radius: 6px;
  font-size: 0.95rem;

  ul {
    margin: 5px 0 10px;
    padding-left: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const ActionButton = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
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

export const ExampleList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;

  button {
    font-size: 0.9rem;
    padding: 6px 12px;
    background: #eeeeee;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #dddddd;
    }
  }
`;
