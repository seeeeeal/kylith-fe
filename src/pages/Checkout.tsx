import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { CartContext } from "@/context/CartContext";
import { KuiButton, KuiSteps } from "@/components/kui";
import PriceTag from "@/components/PriceTag";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type Inputs = {
  name: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  cardHolderName: string;
};

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const total = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      // 注文番号を生成
      const orderNumber = `ORDER-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // 注文データを作成
      const orderData = {
        orderNumber,
        customerInfo: {
          name: data.name,
          postalCode: data.postalCode,
          address: data.address,
          phoneNumber: data.phoneNumber,
        },
        paymentInfo: {
          cardNumber: data.cardNumber.replace(/\s/g, "").slice(-4), // 最後の4桁のみ保存
          cardHolderName: data.cardHolderName,
        },
        items: cartItems,
        total: total,
        orderDate: new Date().toISOString(),
        status: "pending",
      };

      // 決済シミュレーション（90%の確率で成功）
      const isPaymentSuccess = Math.random() > 0.1;

      // ローディング時間をシミュレーション
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (isPaymentSuccess) {
        // 成功時: 注文データをLocalStorageに保存
        const existingOrders = JSON.parse(
          localStorage.getItem("orders") || "[]"
        );
        existingOrders.push({
          ...orderData,
          status: "completed",
        });
        localStorage.setItem("orders", JSON.stringify(existingOrders));

        // カートをクリア
        localStorage.removeItem("cart");

        console.log("注文完了:", orderData);
        navigate("/order-complete", {
          state: { orderNumber, total },
        });
      } else {
        // 失敗時: エラーを投げる
        throw new Error(t("checkout.paymentFailed"));
      }
    } catch (error) {
      console.error("注文エラー:", error);
      alert(error instanceof Error ? error.message : t("checkout.orderError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <KuiSteps
        steps={["カート", "注文確認 & 支払い", "注文完了"]}
        currentStep={1}
      />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
        {/* Left: フォーム */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            {/* お届け先情報 */}
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                {t("checkout.shippingInfo")}
              </h1>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("checkout.name")} *
                  </label>
                  <input
                    {...register("name", {
                      required: t("checkout.name") + t("checkout.required"),
                    })}
                    type="text"
                    className={`w-full border px-3 py-2 rounded ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("checkout.postalCode")} *
                  </label>
                  <input
                    {...register("postalCode", {
                      required:
                        t("checkout.postalCode") + t("checkout.required"),
                      pattern: {
                        value: /^\d{3}-?\d{4}$/,
                        message: t("checkout.invalidPostalCode"),
                      },
                    })}
                    type="text"
                    className={`w-full border px-3 py-2 rounded ${
                      errors.postalCode ? "border-red-500" : ""
                    }`}
                    placeholder="123-4567"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("checkout.address")} *
                  </label>
                  <input
                    {...register("address", {
                      required: t("checkout.address") + t("checkout.required"),
                    })}
                    type="text"
                    className={`w-full border px-3 py-2 rounded ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    placeholder="東京都新宿区..."
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("checkout.phoneNumber")} *
                  </label>
                  <input
                    {...register("phoneNumber", {
                      required:
                        t("checkout.phoneNumber") + t("checkout.required"),
                      pattern: {
                        value: /^0\d{1,4}-?\d{1,4}-?\d{4}$/,
                        message: t("checkout.invalidPhone"),
                      },
                    })}
                    type="tel"
                    className={`w-full border px-3 py-2 rounded ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`}
                    placeholder="090-1234-5678"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* お支払い情報 */}
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                {t("checkout.payment")}
              </h1>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("checkout.cardNumber")} *
                  </label>
                  <input
                    {...register("cardNumber", {
                      required:
                        t("checkout.cardNumber") + t("checkout.required"),
                      pattern: {
                        value: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
                        message: t("checkout.invalidCard"),
                      },
                    })}
                    type="text"
                    className={`w-full border px-3 py-2 rounded ${
                      errors.cardNumber ? "border-red-500" : ""
                    }`}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardNumber.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      {t("checkout.expirationDate")} *
                    </label>
                    <input
                      {...register("expirationDate", {
                        required:
                          t("checkout.expirationDate") + t("checkout.required"),
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                          message: t("checkout.invalidExpiry"),
                        },
                      })}
                      type="text"
                      className={`w-full border px-3 py-2 rounded ${
                        errors.expirationDate ? "border-red-500" : ""
                      }`}
                      placeholder="12/25"
                    />
                    {errors.expirationDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expirationDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      {t("checkout.securityCode")} *
                    </label>
                    <input
                      {...register("securityCode", {
                        required:
                          t("checkout.securityCode") + t("checkout.required"),
                        pattern: {
                          value: /^\d{3,4}$/,
                          message: t("checkout.invalidSecurityCode"),
                        },
                      })}
                      type="text"
                      className={`w-full border px-3 py-2 rounded ${
                        errors.securityCode ? "border-red-500" : ""
                      }`}
                      placeholder="123"
                    />
                    {errors.securityCode && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.securityCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium">
                    {t("checkout.cardHolderName")} *
                  </label>
                  <input
                    {...register("cardHolderName", {
                      required:
                        t("checkout.cardHolderName") + t("checkout.required"),
                    })}
                    type="text"
                    className={`w-full border px-3 py-2 rounded ${
                      errors.cardHolderName ? "border-red-500" : ""
                    }`}
                    placeholder="TARO YAMADA"
                  />
                  {errors.cardHolderName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardHolderName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <KuiButton
              type="submit"
              variant="solid"
              color="default"
              size="large"
              className="w-full mt-6 sm:mt-8"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("checkout.processing")
                : t("checkout.placeOrder")}
            </KuiButton>
          </form>
        </div>

        {/* Right: カート内容 */}
        <div className="w-full lg:w-2/5 lg:flex-shrink-0">
          <div className="bg-kui-base p-4 rounded sticky top-20">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <React.Fragment key={item.product.id}>
                  <li className="text-sm sm:text-base flex gap-3 sm:gap-4">
                    <img
                      src={item.product.image}
                      alt=""
                      className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base truncate">
                        {item.product.name}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <PriceTag
                          amount={item.product.price}
                          size="small"
                          emphasis={false}
                        />
                        <span className="text-xs text-kui-secondary">
                          ×{item.quantity}
                        </span>
                      </div>
                    </div>
                  </li>
                  <hr className="my-3 sm:my-4 border-kui-border" />
                </React.Fragment>
              ))}
            </ul>
            <div className="flex items-center justify-between text-sm">
              <dt className="text-kui-secondary">{t("cart.subtotal")}</dt>
              <dd>
                <PriceTag
                  size="small"
                  amount={total}
                  taxIncluded={false}
                  emphasis={false}
                />
              </dd>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <dt className="text-kui-secondary">{t("cart.shipping")}</dt>
              <dd>{t("cart.free")}</dd>
            </div>
            <hr className="mt-4 border-kui-border" />
            <div className="mt-4 flex items-center justify-between">
              <dt>{t("cart.total")}</dt>
              <dd>
                <PriceTag amount={total} taxIncluded={false} />
              </dd>
            </div>
            <p className="text-kui-secondary text-xs mt-2">
              {t("cart.taxNote")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
