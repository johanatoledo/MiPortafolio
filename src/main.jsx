import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IntlProvider } from 'react-intl';
import messagesEs from './i18n/messages_es';
import messagesEn from './i18n/messages_en';

function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}

const allMessages = {
  es: flattenMessages(messagesEs),
  en: flattenMessages(messagesEn),
};

function Main() {
  const [locale, setLocale] = useState(
    navigator.language.startsWith('es') ? 'es' : 'en'
  );

  return (
    <IntlProvider locale={locale} messages={allMessages[locale]}>
      <App setLocale={setLocale} locale={locale} />
    </IntlProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);