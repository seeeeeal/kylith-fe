import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { EffectFade, Thumbs } from "swiper/modules";
import { KuiIconButton } from "../kui";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  currentImage: string | undefined;
}

export default function ImageGallery({
  images,
  productName,
  currentImage,
}: ImageGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const slideTo = (index: number) => {
    if (mainSwiperRef.current && !mainSwiperRef.current.destroyed) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  // When the color is changed, find the index of the image with the current color and slide to it
  useEffect(() => {
    if (currentImage) {
      slideTo(images.indexOf(currentImage));
    }
  }, [currentImage]);

  return (
    <div>
      <div className="relative">
        <KuiIconButton
          onClick={() => slideTo(activeSlideIndex - 1)}
          variant="filled"
          disabled={activeSlideIndex === 0}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10"
        >
          <FiChevronLeft />
        </KuiIconButton>

        <KuiIconButton
          onClick={() => slideTo(activeSlideIndex + 1)}
          variant="filled"
          disabled={activeSlideIndex === images.length - 1}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10"
        >
          <FiChevronRight />
        </KuiIconButton>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          effect={"fade"}
          modules={[EffectFade, Thumbs]}
          className="mb-2"
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                alt={productName}
                className="h-auto rounded w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          setThumbsSwiper(swiper);
        }}
        spaceBetween={8}
        slidesPerView={10}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        allowTouchMove={true}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={image}
            className={`w-12 h-12 sm:w-16 sm:h-16 border-2 rounded cursor-pointer transition-colors ${
              index === activeSlideIndex
                ? "border-kui-primary"
                : "border-kui-border/50 hover:opacity-80"
            }`}
            onClick={() => slideTo(index)}
          >
            <img
              src={image}
              alt={image}
              className="w-full h-auto object-contain rounded pointer-events-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
