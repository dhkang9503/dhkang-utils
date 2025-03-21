import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.isDarkMode ? "#121212" : "#f9f9f9")};
    color: ${(props) => (props.isDarkMode ? "#ffffff" : "#000000")};
    font-family: Arial, sans-serif;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TimerDisplay = styled.h2`
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const SessionCounter = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: bold;
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffcc00" : "#ff4500")};
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? "#333" : "#ff6347")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#fff")};
  border: none;
  padding: 15px 25px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? "#555" : "#ff4500")};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 20px;
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  width: 60px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
    width: 50px;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ThemeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#000000")}; // ✅ 글자색 변경
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
