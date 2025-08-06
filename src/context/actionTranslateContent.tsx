import { createContext, useState } from 'react';
import {
  defaultActionTranslateContext,
  type ActionTranslateContextType,
  type Props,
} from './typeActionTranslate';
import { translations } from '../i18n';

const ActionTranslateContext = createContext<ActionTranslateContextType>(defaultActionTranslateContext);

export function ActionTranslateProvider({ children }: Props) {
  const [language, setLang] = useState<'pt' | 'en'>('pt');

  const changeLanguage = (lang: 'pt' | 'en') => {
    setLang(lang);
  };

  
    const translate = (key: string) => translations[language][key];
  return (
    <ActionTranslateContext.Provider
      value={{
        language,
        changeLanguage,
        translate
      }}
    >
      {children}
    </ActionTranslateContext.Provider>
  );
}
export default ActionTranslateContext;
