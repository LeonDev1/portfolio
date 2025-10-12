import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./translations/de.json";
import en from "./translations/en.json";


const supportedLanguages = ["de", "en"];
const savedLang = localStorage.getItem("language");

const browserLang = navigator.language || navigator.userLanguage;
const detectedLang = supportedLanguages.find(l => browserLang.startsWith(l));

// fallback
const defaultLang = savedLang || detectedLang || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    lng: defaultLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
