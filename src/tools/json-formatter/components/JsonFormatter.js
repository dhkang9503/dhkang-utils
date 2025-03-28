import React, { useState, useEffect, useCallback } from 'react';
import {
  TextArea,
  ResultBox,
  ValidateStatus,
  ButtonGroup,
  ActionButton
} from '../styles';

const JsonFormatter = ({ isDarkMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState(null);

  const handleFormat = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setOutput(pretty);
      setStatus('valid');
    } catch (e) {
      setOutput(e.message);
      setStatus('invalid');
    }
  }, [input]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      alert('Copied to clipboard!');
    } catch {
      alert('Failed to copy');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.trim()) handleFormat();
      else {
        setOutput('');
        setStatus(null);
      }
    }, 600); // 디바운싱

    return () => clearTimeout(timeout);
  }, [input, handleFormat]);

  return (
    <>
      <TextArea
        isDarkMode={isDarkMode}
        rows="10"
        placeholder='Paste your JSON here...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ValidateStatus isValid={status === 'valid'}>
        {status === 'valid' && 'Valid JSON'}
        {status === 'invalid' && 'Invalid JSON'}
      </ValidateStatus>
      <ResultBox
        isDarkMode={isDarkMode}
        readOnly
        rows="10"
        value={output}
        placeholder="Formatted JSON will appear here."
      />
      <ButtonGroup>
        <ActionButton onClick={handleFormat}>Format</ActionButton>
        <ActionButton onClick={handleCopy}>Copy</ActionButton>
      </ButtonGroup>
    </>
  );
};

export default JsonFormatter;
