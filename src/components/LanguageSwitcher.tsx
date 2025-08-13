import React, { useState } from "react";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import { KuiButton } from "./kui";

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "ja", name: "日本語" },
    { code: "en", name: "English" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xxs"
      >
        <FiGlobe />
        <span className="hidden sm:inline">{currentLang.name}</span>
        <FiChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 bottom-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  onLanguageChange(language.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 ${
                  currentLanguage === language.code
                    ? "bg-gray-50 text-blue-600"
                    : "text-gray-700"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* オーバーレイ */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default LanguageSwitcher;
