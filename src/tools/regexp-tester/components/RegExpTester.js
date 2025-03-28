// src/tools/regexp-tester/components/RegExpTester.js
import React, { useState, useEffect, useCallback } from 'react';
import {
  Input,
  TextArea,
  ErrorBox,
  // ResultBox,
  GroupBox,
  HighlightedText,
  ButtonGroup,
  ActionButton,
  ExampleList
} from '../styles';

const examples = [
  { pattern: '\\d+', flags: 'g', text: 'There are 42 apples and 7 oranges.' },
  { pattern: '(\\w+)@(\\w+\\.\\w+)', flags: 'g', text: 'Contact us at test@example.com' },
  { pattern: '<(\\w+)>.*?<\\/\\1>', flags: 'g', text: '<div>Hello</div><p>World</p>' },
];

const RegExpTester = ({ isDarkMode }) => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [highlighted, setHighlighted] = useState('');
  const [groups, setGroups] = useState([]);

  const handleTest = useCallback(() => {
    try {
      const regex = new RegExp(pattern, flags);
      const matches = [...text.matchAll(regex)];

      if (matches.length === 0) {
        setHighlighted(text);
        setGroups([]);
        setError('');
        return;
      }

      // Highlight
      let result = '';
      let lastIndex = 0;
      matches.forEach((m) => {
        result += text.slice(lastIndex, m.index);
        result += `<mark>${m[0]}</mark>`;
        lastIndex = m.index + m[0].length;
      });
      result += text.slice(lastIndex);
      setHighlighted(result);

      // Groups
      const extracted = matches.map((m, i) => ({
        match: m[0],
        index: m.index,
        groups: m.slice(1),
      }));

      setGroups(extracted);
      setError('');
    } catch (e) {
      setHighlighted('');
      setGroups([]);
      setError(e.message);
    }
  }, [pattern, flags, text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pattern && text) handleTest();
    }, 400);
    return () => clearTimeout(timeout);
  }, [pattern, flags, text, handleTest]);

  const handleExample = (ex) => {
    setPattern(ex.pattern);
    setFlags(ex.flags);
    setText(ex.text);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(highlighted.replace(/<\/?mark>/g, ''));
      alert('Copied plain text!');
    } catch {
      alert('Copy failed');
    }
  };

  return (
    <>
      <Input placeholder="Pattern (e.g. \\d+)" value={pattern} onChange={(e) => setPattern(e.target.value)} />
      <Input placeholder="Flags (e.g. g, i, m)" value={flags} onChange={(e) => setFlags(e.target.value)} />
      <TextArea
        isDarkMode={isDarkMode}
        rows="6"
        placeholder="Test string..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ExampleList>
        {examples.map((ex, i) => (
          <button key={i} onClick={() => handleExample(ex)}>
            Example {i + 1}
          </button>
        ))}
      </ExampleList>

      {error && <ErrorBox>{error}</ErrorBox>}

      {highlighted && (
        <HighlightedText dangerouslySetInnerHTML={{ __html: highlighted }} />
      )}

      {groups.length > 0 && (
        <GroupBox>
          <strong>Groups:</strong>
          {groups.map((m, i) => (
            <div key={i}>
              Match {i + 1}: <code>{m.match}</code> at index {m.index}
              <ul>
                {m.groups.map((g, j) => (
                  <li key={j}>Group {j + 1}: <code>{g}</code></li>
                ))}
              </ul>
            </div>
          ))}
        </GroupBox>
      )}

      <ButtonGroup>
        <ActionButton onClick={handleTest}>Test</ActionButton>
        <ActionButton onClick={handleCopy}>Copy</ActionButton>
      </ButtonGroup>
    </>
  );
};

export default RegExpTester;
