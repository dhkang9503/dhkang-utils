import React, { useState } from 'react';
import {
  Input,
  Select,
  ButtonGroup,
  ActionButton,
  ResultBox
} from '../styles';

const sentenceVariants = {
  short: 'Lorem ipsum dolor sit amet.',
  medium:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  long:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt lacinia, nunc est blandit sapien.',
};

const applyStyleTemplate = (text, template) => {
  switch (template) {
    case 'uppercase':
      return text.toUpperCase();
    case 'html':
      return `<p>${text.replace(/\n\n/g, '</p><p>')}</p>`;
    default:
      return text;
  }
};

const generateParagraphs = (count, sentenceType) => {
  const sentence = sentenceVariants[sentenceType];
  return Array.from({ length: count }, () => sentence).join('\n\n');
};

const generateWords = (count) => {
  const words = sentenceVariants.medium.split(' ');
  return Array.from({ length: count }, (_, i) => words[i % words.length]).join(' ') + '.';
};

const LoremIpsumGenerator = ({ isDarkMode }) => {
  const [type, setType] = useState('paragraphs');
  const [count, setCount] = useState(3);
  const [sentenceType, setSentenceType] = useState('medium');
  const [styleTemplate, setStyleTemplate] = useState('plain');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    let value =
      type === 'paragraphs'
        ? generateParagraphs(count, sentenceType)
        : generateWords(count);

    value = applyStyleTemplate(value, styleTemplate);
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

      {type === 'paragraphs' && (
        <Select value={sentenceType} onChange={(e) => setSentenceType(e.target.value)}>
          <option value="short">Short Sentences</option>
          <option value="medium">Medium Sentences</option>
          <option value="long">Long Sentences</option>
        </Select>
      )}

      <Select value={styleTemplate} onChange={(e) => setStyleTemplate(e.target.value)}>
        <option value="plain">Plain Text</option>
        <option value="uppercase">UPPERCASE</option>
        <option value="html">HTML Paragraphs</option>
      </Select>

      <ButtonGroup>
        <ActionButton onClick={handleGenerate}>Generate</ActionButton>
        <ActionButton onClick={handleCopy}>Copy</ActionButton>
      </ButtonGroup>

      <ResultBox isDarkMode={isDarkMode} readOnly rows="10" value={output} />
    </>
  );
};

export default LoremIpsumGenerator;
