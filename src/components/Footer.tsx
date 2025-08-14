import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
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
    <footer className="bg-kui-base text-sm py-6 px-4 mt-12 pb-24 relative overflow-hidden">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="text-xl font-bold mb-1">Kylith</div>
            <p className="text-xxs text-kui-default/50 leading-relaxed">
              Kylithは、美しさと性能を両立する次世代キーボードブランド。
              <br />
              Where performance meets style.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="cursor-pointer">
                <FaFacebook />
              </div>
              <div className="cursor-pointer">
                <FaInstagram />
              </div>
              <div className="cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="cursor-pointer">
                <FaYoutube />
              </div>
              <div className="cursor-pointer">
                <FaDiscord />
              </div>
            </div>
          </div>

          <div className="flex gap-16 text-xs text-kui-default/50">
            <div className="flex flex-col gap-2">
              <div className="text-kui-default font-semibold">Kylith</div>
              <a href="#" className="hover:underline">
                会社概要
              </a>
              <a href="#" className="hover:underline">
                ブランドストーリー
              </a>
              <a href="#" className="hover:underline">
                採用情報
              </a>
              <a href="#" className="hover:underline">
                プライバシー
              </a>
              <a href="#" className="hover:underline">
                利用規約
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-kui-default font-semibold">サポート</div>
              <a href="#" className="hover:underline">
                スイッチガイド
              </a>
              <a href="#" className="hover:underline">
                配送・返品について
              </a>
              <a href="#" className="hover:underline">
                よくある質問
              </a>
              <a href="#" className="hover:underline">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-kui-default/5" />

        <div className="flex justify-between items-center">
          <p className="text-xxs text-kui-default/50">
            &copy; {new Date().getFullYear()} Kylith. All rights reserved.
          </p>
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </div>

      <div className="text-[240px] font-bold absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 select-none">
        <span className="opacity-50 inline-block bg-clip-text text-transparent bg-gradient-to-r from-kui-primary/20 to-purple-500/10">
          Kylith
        </span>
      </div>
    </footer>
  );
}
