import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router";
import { KuiButton, KuiSteps } from "@/components/kui";
import PriceTag from "@/components/PriceTag";

const OrderComplete = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { orderNumber, total } = location.state || {};

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
      <KuiSteps
        steps={["カート", "注文確認 & 支払い", "注文完了"]}
        currentStep={3}
      />
      <div className="flex flex-col items-center justify-center mt-6 sm:mt-12 lg:mt-20">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            {t("orderComplete.title")}
          </h2>
        </div>

        {orderNumber && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2 ">
              {t("orderComplete.orderNumber")}
            </p>
            <p className="font-mono text-lg font-semibold text-gray-800">
              {orderNumber}
            </p>
          </div>
        )}

        {total && (
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              {t("orderComplete.paymentAmount")}
            </p>
            <div className="text-2xl font-bold">
              <PriceTag amount={total} size="large" />
            </div>
          </div>
        )}

        <div className="text-sm text-gray-600 leading-relaxed">
          <p>{t("orderComplete.completed")}</p>
          <p>{t("orderComplete.emailSent")}</p>
          <p className="mt-2 text-xs text-kui-secondary">
            {t("orderComplete.demoNote")}
          </p>
        </div>

        <div className="mt-8">
          <Link to="/" className="block">
            <KuiButton
              variant="solid"
              color="default"
              size="medium"
              className="w-full text-sm"
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
