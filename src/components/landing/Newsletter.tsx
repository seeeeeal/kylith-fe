import { FiChevronRight, FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Newsletter() {
  const { t } = useTranslation();

  return (
    <section className="max-w-screen-xl mx-auto p-8 mt-16">
      <div className="text-center text-2xl sm:text-3xl font-bold mb-2">
        {t("landing.newsletter.title")}
      </div>
      <div className="text-center text-xs text-kui-default/50 mb-6 sm:mb-8 [&_a]:text-kui-default [&_a]:underline">
        <div
          dangerouslySetInnerHTML={{
            __html: t("landing.newsletter.subtitle"),
          }}
        />
      </div>

      <div className="flex items-center relative max-w-md mx-auto mt-4 bg-kui-base border border-2 border-transparent hover:border-kui-primary transition-colors rounded px-2 cursor-pointer">
        <FiMail className="text-kui-default mr-2" />
        <input
          type="text"
          placeholder={t("landing.newsletter.placeholder")}
          className="w-full h-8 placeholder:text-xs outline-none"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <FiChevronRight />
        </div>
      </div>
    </section>
  );
}
