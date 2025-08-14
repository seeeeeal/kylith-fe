import { KuiButton } from "@/components/kui";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-[50vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center bg-black text-white">
      <img
        src="/Q1-Max-3.webp"
        alt="Kylith"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-shadow-lg">
          {t("landing.hero.title")}
        </h1>
        <p className="text-sm mb-4 sm:mb-6 text-gray-300 max-w-md mx-auto text-shadow">
          {t("landing.hero.subtitle")}
        </p>
        <Link to="/keyboards">
          <KuiButton
            variant="solid"
            color="default"
            size="medium"
            className="px-4 sm:px-6 py-2 sm:py-3"
          >
            {t("landing.hero.cta")}
          </KuiButton>
        </Link>
      </div>
    </section>
  );
}
