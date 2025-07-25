import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    // Save language setting to LocalStorage
    localStorage.setItem("kylith-language", language);
  };

  // Load language setting from LocalStorage on initialization
  useEffect(() => {
    const savedLanguage = localStorage.getItem("kylith-language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      handleLanguageChange(savedLanguage);
    }
  }, []);

  return (
    <footer className="bg-kui-base text-sm py-6 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Kylith. All rights reserved.</p>
        <div className="flex space-x-4 items-center">
          <a href="#" className="hover:underline">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:underline">
            利用規約
          </a>
          <a href="#" className="hover:underline">
            お問い合わせ
          </a>
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </div>
    </footer>
  );
}
