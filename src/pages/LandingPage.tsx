import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { KuiButton } from "@/components/kui";
import products from "../assets/products";
import PriceTag from "@/components/PriceTag";
import { Link } from "react-router";
import { reviews } from "@/assets/reviews";
import ReactMarkdown from "react-markdown";
import { FiChevronRight, FiMail, FiUser } from "react-icons/fi";

export default function LandingPage() {
  return (
    <div className="space-y-4">
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-black text-white">
        <img
          src="/Q1-Max-3.webp"
          alt="Kylith"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Where performance meets style.
          </h1>
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-gray-300 max-w-md mx-auto">
            Kylithは、美しさと性能を両立する次世代キーボードブランド。
          </p>
          <Link to="/keyboards">
            <KuiButton
              variant="solid"
              color="default"
              size="medium"
              className="px-4 sm:px-6 py-2 sm:py-3"
            >
              今すぐ見る
            </KuiButton>
          </Link>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Products
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="rounded-lg px-4 py-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded mb-2"
                />
                <h2 className="text-sm sm:text-base font-semibold mb-2 leading-5 sm:leading-6">
                  {product.name}
                </h2>

                <div className="mb-2">
                  <PriceTag amount={product.price} />
                </div>

                <Link to={`/products/${product.id}`}>
                  <KuiButton
                    variant="solid"
                    color="default"
                    size="medium"
                    shape="round"
                    className="w-full"
                  >
                    今すぐ見る
                  </KuiButton>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Reviews
        </h2>
        <div className="flex gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-kui-base rounded-lg p-4 w-1/3 flex flex-col justify-between gap-4"
            >
              <div>
                {review.title && (
                  <div className="mb-1 text-xs font-semibold text-kui-default">
                    {review.title}
                  </div>
                )}
                <div className="text-xs text-kui-secondary leading-relaxed">
                  <ReactMarkdown>{review.content}</ReactMarkdown>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-kui-default/50 rounded-full flex items-center justify-center">
                    <FiUser className="text-kui-base" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-kui-default">
                      {review.author}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-xs ${
                            star <= review.rating
                              ? "text-kui-warning"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-4 sm:p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Mac対応</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                OS自動切替でMacにも完璧対応。
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                静音設計
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                オフィスでも深夜でも気にならない。
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                高級素材
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                アルミ＆PBTで手触りも美しさも最高。
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">5年保証</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                長く使える安心をお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-2xl sm:text-3xl font-bold mb-2">
          あなたにぴったりのKylithを、今すぐ。
        </div>
        <div className="text-center text-xs text-kui-default/50 mb-6 sm:mb-8">
          Kylithの最新情報をお届けします。いつでも解除できます。詳しくは
          <a href="#" className="text-kui-default underline">
            プライバシーポリシー
          </a>
          をご確認ください。
        </div>

        <div className="flex items-center relative max-w-md mx-auto mt-4 bg-kui-base border border-2 border-transparent hover:border-kui-primary transition-colors rounded px-2 cursor-pointer">
          <FiMail className="text-kui-default mr-2" />
          <input
            type="text"
            placeholder="メールアドレスを入力"
            className="w-full h-8 placeholder:text-xs outline-none"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <FiChevronRight />
          </div>
        </div>
      </section>
    </div>
  );
}
