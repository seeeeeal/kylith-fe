import { KuiButton } from "@/components/kui";
import { Link } from "react-router";

export default function Hero() {
  return (
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
  );
}
