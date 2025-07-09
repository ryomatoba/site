import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider }; 