// src/tools/lorem-ipsum/components/LoremIpsumGenerator.js
import React, { useState } from 'react';
import {
  Input,
  Select,
  ButtonGroup,
  ActionButton,
  ResultBox
} from '../styles';

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc est blandit sapien, sit amet facilisis purus odio nec justo.`;

const generateParagraphs = (count) =>
  Array.from({ length: count }, () => loremText).join('\n\n');

const generateWords = (count) =>
  loremText.split(' ').slice(0, count).join(' ') + '.';

const LoremIpsumGenerator = ({ isDarkMode }) => {
  const [type, setType] = useState('paragraphs');
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    const value =
      type === 'paragraphs'
        ? generateParagraphs(count)
        : generateWords(count);
    setOutput(value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      alert('Copied to clipboard!');
    } catch {
      alert('Copy failed.');
    }
  };

  return (
    <>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="paragraphs">Paragraphs</option>
        <option value="words">Words</option>
      </Select>
      <Input
        type="number"
        min="1"
        max="100"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        placeholder="Amount"
      />
      <ButtonGroup>
        <ActionButton onClick={handleGenerate}>Generate</ActionButton>
        <ActionButton onClick={handleCopy}>Copy</ActionButton>
      </ButtonGroup>
      <ResultBox isDarkMode={isDarkMode} readOnly rows="10" value={output} />
    </>
  );
};

export default LoremIpsumGenerator;
