import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ReactMarkdown from "react-markdown";
import { FiChevronLeft, FiChevronRight, FiUser } from "react-icons/fi";
import { KuiIconButton } from "../kui";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Review {
  author: string;
  job: string;
  title: string;
  content: string;
  rating: number;
}

export default function Reviews() {
  const { t } = useTranslation();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const slideTo = (index: number) => {
    if (mainSwiperRef.current && !mainSwiperRef.current.destroyed) {
      mainSwiperRef.current.slideTo(index);
    }
  };
  const reviews = t("landing.reviewsList", {
    returnObjects: true,
  }) as Review[];

  return (
    <section className="bg-kui-base">
      <div className="max-w-screen-xl mx-auto p-4 sm:p-8">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-8">
          <span className="font-semibold">{t("landing.reviews")}</span>
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          freeMode={true}
          className="w-full"
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.author}>
              <div
                key={review.author}
                className="h-60 bg-white rounded-lg p-4 flex flex-col justify-between gap-4"
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
                      <div className="flex gap-1">
                        <span className="text-xs font-semibold text-kui-default">
                          {review.author}
                        </span>
                        <span className="text-xxs text-kui-default/50">
                          {review.job}
                        </span>
                      </div>

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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-2 mt-4">
          <KuiIconButton
            onClick={() => slideTo(activeSlideIndex - 1)}
            variant="filled"
            disabled={activeSlideIndex === 0}
          >
            <FiChevronLeft />
          </KuiIconButton>

          <KuiIconButton
            onClick={() => slideTo(activeSlideIndex + 1)}
            variant="filled"
            disabled={mainSwiperRef.current?.isEnd === true}
          >
            <FiChevronRight />
          </KuiIconButton>
        </div>
      </div>
    </section>
  );
}
