import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  margin: auto;
`;

const Label = styled.label`
  align-self: flex-start;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 5px 0 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 4px;
`;

const Result = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.1rem;
`;

const categories = {
  length: {
    label: 'length',
    units: {
      m: 1,
      cm: 100,
      mm: 1000,
      in: 39.3701,
      ft: 3.28084,
    },
  },
  weight: {
    label: 'weight',
    units: {
      kg: 1,
      g: 1000,
      lb: 2.20462,
      oz: 35.274,
    },
  },
  volume: {
    label: 'volume',
    units: {
      L: 1,
      mL: 1000,
      gal: 0.264172,
      'fl oz': 33.814,
    },
  },
  temperature: {
    label: 'temperature',
    units: {
      C: '°C',
      F: '°F',
      K: 'K',
    },
  },
  time: {
    label: 'time',
    units: {
      sec: 1,
      min: 1 / 60,
      hr: 1 / 3600,
      day: 1 / 86400,
    },
  },
  speed: {
    label: 'speed',
    units: {
      'm/s': 1,
      'km/h': 3.6,
      'mph': 2.23694,
      'ft/s': 3.28084,
    },
  },
  pressure: {
    label: 'pressure',
    units: {
      Pa: 1,
      kPa: 0.001,
      bar: 0.00001,
      atm: 9.86923e-6,
      psi: 0.000145038,
    },
  },
  energy: {
    label: 'energy',
    units: {
      J: 1,
      kJ: 0.001,
      cal: 0.239006,
      kcal: 0.000239006,
      Wh: 0.000277778,
      kWh: 2.7778e-7,
    },
  },
  area: {
    label: 'area',
    units: {
      'm²': 1,
      'cm²': 10000,
      'mm²': 1000000,
      'km²': 0.000001,
      'ft²': 10.7639,
      'in²': 1550,
    },
  },
  data: {
    label: 'data',
    units: {
      bit: 1,
      byte: 1 / 8,
      KB: 1 / (8 * 1024),
      MB: 1 / (8 * 1024 * 1024),
      GB: 1 / (8 * 1024 * 1024 * 1024),
      TB: 1 / (8 * 1024 * 1024 * 1024 * 1024),
    },
  },
};

function convertTemperature(value, from, to) {
  let temp = parseFloat(value);
  if (from === to) return temp;

  if (from === 'C') {
    if (to === 'F') return (temp * 9) / 5 + 32;
    if (to === 'K') return temp + 273.15;
  }
  if (from === 'F') {
    if (to === 'C') return ((temp - 32) * 5) / 9;
    if (to === 'K') return ((temp - 32) * 5) / 9 + 273.15;
  }
  if (from === 'K') {
    if (to === 'C') return temp - 273.15;
    if (to === 'F') return ((temp - 273.15) * 9) / 5 + 32;
  }
  return '';
}

function UnitConverter() {
  const { t } = useTranslation();

  const [category, setCategory] = useState('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');

  const isTemperature = category === 'temperature';
  const units = Object.keys(categories[category].units);

  let result = '';
  if (value && !isNaN(value)) {
    if (isTemperature) {
      result = convertTemperature(value, fromUnit, toUnit);
    } else {
      const base = parseFloat(value) / categories[category].units[fromUnit];
      result = base * categories[category].units[toUnit];
    }
  }

  const handleCategoryChange = (cat) => {
    const unitKeys = Object.keys(categories[cat].units);
    setCategory(cat);
    setFromUnit(unitKeys[0]);
    setToUnit(unitKeys[1]);
    setValue('');
  };

  return (
    <Container>
      <h2>{t('Unit Converter')}</h2>

      <Label htmlFor="category-select">{t('selectCategory')}</Label>
      <Select
        id="category-select"
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {Object.keys(categories).map((key) => (
          <option key={key} value={key}>
            {t(categories[key].label)}
          </option>
        ))}
      </Select>

      <Label htmlFor="input-value">{t('input')}</Label>
      <Input
        id="input-value"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Label htmlFor="from-unit">{t('from')}</Label>
      <Select id="from-unit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        {units.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </Select>

      <Label htmlFor="to-unit">{t('to')}</Label>
      <Select id="to-unit" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        {units.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </Select>

      <Result>
        {t('result')}: {result !== '' ? `${parseFloat(result).toFixed(4)} ${toUnit}` : ''}
      </Result>
    </Container>
  );
}

export default UnitConverter;
