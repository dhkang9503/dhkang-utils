import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 언어 매핑 (국가코드 -> 언어)
const countryLangMap = {
  KR: 'ko',
  US: 'en',
  GB: 'en',
  IT: 'it',
  ES: 'es',
  MX: 'es',
  AR: 'es',
  DE: 'de',
  AT: 'de',
  CH: 'de',
};

// 기본 언어
let userLang = navigator.language.split('-')[0] || 'en';

// 예: IP 기반 감지 포함
export async function initI18n() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const countryCode = data.country;
    const langMap = { KR: 'ko', US: 'en', DE: 'de', IT: 'it', ES: 'es' };
    const lang = langMap[countryCode] || 'en';

    await i18n.use(initReactI18next).init({
      resources, // 전체 다국어 리소스
      lng: lang,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });
  } catch (err) {
    console.error('Language init failed:', err);
    await i18n.use(initReactI18next).init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });
  }
}

const resources = {
  en: {
    translation: {
      title: 'Unit Converter',
      input: 'Input',
      selectUnit: 'Select Unit',
      selectCategory: 'Select Category',
      result: 'Result',
      darkMode: 'Dark Mode',
      from: 'From',
      to: 'To',
      length: 'Length',
      weight: 'Weight',
      temperature: 'Temperature',
      volume: 'Volume',
      time: 'Time',
      speed: 'Speed',
      pressure: 'Pressure',
      energy: 'Energy',
      area: 'Area',
      data: 'Data',
    },
  },
  ko: {
    translation: {
      title: '단위 변환기',
      input: '입력',
      selectUnit: '단위 선택',
      selectCategory: '카테고리 선택',
      result: '결과',
      darkMode: '다크모드',
      from: '변환 전 단위',
      to: '변환 후 단위',
      length: '길이',
      weight: '무게',
      temperature: '온도',
      volume: '부피',
      time: '시간',
      speed: '속도',
      pressure: '압력',
      energy: '에너지',
      area: '면적',
      data: '데이터',
    },
  },
  it: {
    translation: {
      title: 'Convertitore di unità',
      input: 'Inserisci',
      selectUnit: 'Seleziona unità',
      selectCategory: 'Seleziona categoria',
      result: 'Risultato',
      darkMode: 'Modalità scura',
      from: 'Da',
      to: 'A',
      length: 'Lunghezza',
      weight: 'Peso',
      temperature: 'Temperatura',
      volume: 'Volume',
      time: 'Tempo',
      speed: 'Velocità',
      pressure: 'Pressione',
      energy: 'Energia',
      area: 'Area',
      data: 'Dati',
    },
  },
  es: {
    translation: {
      title: 'Convertidor de unidades',
      input: 'Entrada',
      selectUnit: 'Seleccionar unidad',
      selectCategory: 'Seleccionar categoría',
      result: 'Resultado',
      darkMode: 'Modo oscuro',
      from: 'De',
      to: 'A',
      length: 'Longitud',
      weight: 'Peso',
      temperature: 'Temperatura',
      volume: 'Volumen',
      time: 'Tiempo',
      speed: 'Velocidad',
      pressure: 'Presión',
      energy: 'Energía',
      area: 'Área',
      data: 'Datos',
    },
  },
  de: {
    translation: {
      title: 'Einheitenumrechner',
      input: 'Eingabe',
      selectUnit: 'Einheit wählen',
      selectCategory: 'Kategorie wählen',
      result: 'Ergebnis',
      darkMode: 'Dunkelmodus',
      from: 'Von',
      to: 'Nach',
      length: 'Länge',
      weight: 'Gewicht',
      temperature: 'Temperatur',
      volume: 'Volumen',
      time: 'Zeit',
      speed: 'Geschwindigkeit',
      pressure: 'Druck',
      energy: 'Energie',
      area: 'Fläche',
      data: 'Daten',
    },
  },
};

export default i18n;
