import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageService } from '.';

const translation = LanguageService.getTranslation();

i18n.use(initReactI18next).init({
  resources: {
    ...translation,
  },
  fallbackLng: LanguageService.getLanguage(),
  /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
  nsSeparator: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  returnEmptyString: false,
});

export default i18n;
