import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {I18nextProvider} from "react-i18next"

import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
import i18next from "i18next"

i18next.init({
  interpolation: {escapeValue:false},
  lng:  "en",
  resources: {
    en: {
      global : global_en,
    },
    es: {
      global : global_es,
    },
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
