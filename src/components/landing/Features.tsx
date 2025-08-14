import { KuiButton } from "@/components/kui";
import { useTranslation } from "react-i18next";

interface Feature {
  image: string;
  title: string;
  description: string;
}

export default function Features() {
  const { t } = useTranslation();
  const features = t("landing.featuresList", {
    returnObjects: true,
  }) as Feature[];

  return (
    <section className="max-w-screen-xl mx-auto p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl mb-4 sm:mb-8">
        <span className="font-semibold">{t("landing.features")}</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-kui-base rounded-xl p-4">
            <img
              src={feature.image}
              alt="Kylith"
              className="w-full h-auto rounded mb-4"
            />
            <div className="">
              <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                {feature.description}
              </p>
              <a href="#">
                <KuiButton
                  variant="filled"
                  color="default"
                  size="small"
                  shape="round"
                  className="w-full"
                >
                  {t("landing.details")}
                </KuiButton>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
