import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router";
import { KuiButton } from "@/components/kui";
import PriceTag from "@/components/PriceTag";

const OrderComplete = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { orderNumber, total } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold mb-2">
            {t("orderComplete.title")}
          </h1>
        </div>

        {orderNumber && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
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

        <div className="space-y-4 text-sm text-gray-600">
          <p>{t("orderComplete.completed")}</p>
          <p>{t("orderComplete.emailSent")}</p>
          <p className="text-xs">{t("orderComplete.demoNote")}</p>
        </div>

        <div className="mt-8 space-y-3">
          <Link to="/" className="block">
            <KuiButton
              variant="solid"
              color="default"
              size="large"
              className="w-full"
            >
              {t("orderComplete.backToHome")}
            </KuiButton>
          </Link>

          <Link to="/products" className="block">
            <KuiButton variant="text" size="medium" className="w-full">
              {t("orderComplete.viewProducts")}
            </KuiButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
