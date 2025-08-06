import React, { createContext, useState } from 'react';
import {
  defaultActionTranslateContext,
  type ActionTranslateContextType,
  type Props,
} from './typeActionTranslate';
import { translations } from '../i18n';

const ActionTranslateContext = createContext<ActionTranslateContextType>(
  defaultActionTranslateContext
);

export function ActionTranslateProvider({ children }: Props) {
  const getDefaultLanguage = (): 'pt' | 'en' => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      const lang = navigator.language.toLowerCase();
      if (lang.startsWith('pt')) return 'pt';
      if (lang.startsWith('en')) return 'en';
    }
    return 'pt'; // fallback
  };
  const [language, setLang] = useState<'pt' | 'en'>(getDefaultLanguage);

  const changeLanguage = (lang: 'pt' | 'en') => {
    setLang(lang);
  };
  function parseBoldText(text: string): React.ReactNode {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
      const match = part.match(/\*\*([^*]+)\*\*/);
      if (match) {
        return <strong key={index}>{match[1]}</strong>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  }

  const translate = (key: string) => parseBoldText(translations[language][key]);

  return (
    <ActionTranslateContext.Provider
      value={{
        language,
        changeLanguage,
        translate,
      }}
    >
      {children}
    </ActionTranslateContext.Provider>
  );
}
export default ActionTranslateContext;
