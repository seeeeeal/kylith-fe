import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { KuiButton } from "@/components/kui";
import { FiCheckCircle } from "react-icons/fi";

const OrderComplete = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center">
      <div className="pt-[12vh] px-4  flex flex-col items-center justify-center">
        <FiCheckCircle className="text-6xl text-kui-primary mb-8" />
        <div className="mb-6">
          <h2 className="text-2xl sm:text-2xl font-semibold">
            {t("orderComplete.title")}
          </h2>
        </div>

        <div className="text-base sm:text-sm text-kui-secondary leading-relaxed mb-8">
          <p>{t("orderComplete.completed")}</p>
          <p>{t("orderComplete.emailSent")}</p>
          <p className="mt-2 text-sm sm:text-xs text-kui-secondary">
            {t("orderComplete.demoNote")}
          </p>
        </div>

        <div>
          <Link to="/" className="block">
            <KuiButton
              variant="solid"
              color="default"
              size="medium"
              className="w-full text-base sm:text-sm"
            >
              {t("orderComplete.backToHome")}
            </KuiButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
