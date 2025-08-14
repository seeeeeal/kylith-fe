import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import ja from "./jp";

const resources = {
  ja: { translation: ja },
  en: { translation: en },
};

// Get saved language from localStorage
const savedLanguage = localStorage.getItem("kylith-language") || "ja";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Use saved language instead of hardcoded "ja"
  fallbackLng: "ja",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
