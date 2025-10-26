import en from './en.json';
import ko from './ko.json';
import jp from './jp.json';
import de from './de.json';

export const languages = {
  en,
  ko,
  jp,
  de
};

export const languageNames = {
  en: 'English',
  ko: '한국어',
  jp: '日本語',
  de: 'Deutsch'
};

export const languageFlags = {
  en: '🇺🇸',
  ko: '🇰🇷',
  jp: '🇯🇵',
  de: '🇩🇪'
};

// Get translation by key path (e.g., "nav.home")
export function getTranslation(language, key) {
  const keys = key.split('.');
  let value = languages[language] || languages.en;

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to English if translation not found
      value = languages.en;
      for (const k2 of keys) {
        value = value?.[k2];
      }
      break;
    }
  }

  return value || key;
}

// Detect browser locale
export function detectLocale() {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.toLowerCase().split('-')[0];

  // Map browser language codes (only EN and DE are active)
  const langMap = {
    'de': 'de',
  };

  return langMap[langCode] || 'en';
}
