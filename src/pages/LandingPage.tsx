import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import { KuiButton } from "@/components/kui";
import products from "../assets/products";
import PriceTag from "@/components/PriceTag";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import { FiChevronRight, FiMail, FiUser } from "react-icons/fi";

const reviews = [
  {
    author: "佐藤美咲",
    job: "作家",
    title: "反響音のない快適な打鍵感",
    content:
      "以前使っていたキーボードでは金属音が気になっていましたが、Kylithではまったく感じません。  \n音が柔らかく、長時間の作業でも耳が疲れず、集中力が続きます。",
    rating: 5,
  },
  {
    author: "鈴木一郎",
    job: "プログラマー",
    title: "自然とメインキーボードになりました",
    content:
      "・軽すぎず、しっかりとした打鍵感で安定感があります。  \n・キーの表面にやや丸みがあり、指が自然に収まる形状。  \n・配列も視認性が良く、日常使いでも迷いません。  \n・ESCキーとEnterキーの色分けが地味に便利！",
    rating: 5,
  },
  {
    author: "中村健太",
    job: "デザイナー",
    title: "デザイン重視でも満足できる実力派",
    content:
      "見た目の美しさで選びましたが、打鍵音・打鍵感ともに期待以上でした。  \nUS配列に最初は戸惑いましたが、慣れるとスムーズに入力できます。  \nアルミボディの重量感も好みで、キーの沈み込みも上質。  \n静かなオフィスでも使えるので、仕事にも使っています。",
    rating: 5,
  },
  {
    author: "井上遼",
    job: "学生",
    title: "ゲームにも勉強にもぴったり",
    content:
      "初めてのメカニカルキーボードでしたが、静音性が高くて驚きました。  \nキーの打ち心地もクセになり、レポート作成もゲームも快適です。  \nRGBライトが地味にテンションを上げてくれます！",
    rating: 5,
  },
  {
    author: "松本優子",
    job: "ライター",
    title: "長時間の作業に向いています",
    content:
      "音が柔らかく、打鍵感もしっかりしていて、長時間タイピングしても疲れません。  \nシンプルな見た目も気に入っています。  \nUSB-C接続で取り回しも楽です。",
    rating: 4,
  },
  {
    author: "大谷翼",
    job: "ゲーマー",
    title: "反応速度と安定性が抜群",
    content:
      "FPSや格闘ゲームをプレイしていますが、入力の遅延がまったく感じられません。\nキーの反応も素早く、連打しても安定しています。\nライティングも好みに設定できて、夜のプレイがさらに楽しくなりました。",
    rating: 5,
  },
];

export default function LandingPage() {
  return (
    <div className="">
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

      <section className="max-w-screen-xl mx-auto p-8">
        <h2 className="text-2xl mb-8">
          <span className="font-semibold">Products</span>
          <span className="ml-2 text-xs text-kui-default/50">
            おすすめの製品
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <div className="rounded-lg p-4 bg-kui-base">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded mb-2"
              />
              <h2 className="text-sm sm:text-base font-semibold mb-1">
                {product.name}
              </h2>

              <div className="mb-2">
                <PriceTag amount={product.price} size="small" />
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
          ))}
        </div>
      </section>

      <section className="bg-kui-base">
        <div className="max-w-screen-xl mx-auto p-8">
          <h2 className="text-2xl mb-8">
            <span className="font-semibold">Reviews</span>
            <span className="ml-2 text-xs text-kui-default/50">
              カスタマーレビュー
            </span>
          </h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full"
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
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto p-8">
        <h2 className="text-2xl mb-8">
          <span className="font-semibold">Features</span>
          <span className="ml-2 text-xs text-kui-default/50">製品特徴</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-kui-base rounded-xl p-4">
            <img
              src="/Q1-Max-2.webp"
              alt="Kylith"
              className="w-full h-auto rounded mb-4"
            />
            <div className="">
              <h3 className="text-sm font-semibold mb-2">心地よい打鍵感</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                しっかりとした反発と静音性を両立した、
                <br />
                バランスの良い打鍵感を実現。
              </p>
              <a href="#">
                <KuiButton
                  variant="filled"
                  color="default"
                  size="small"
                  shape="round"
                  className="w-full"
                >
                  詳細を見る
                </KuiButton>
              </a>
            </div>
          </div>
          <div className="bg-kui-base rounded-xl p-4">
            <img
              src="/Q1-Max-3.webp"
              alt="Kylith"
              className="w-full h-auto rounded mb-4"
            />
            <div className="">
              <h3 className="text-sm font-semibold mb-2">
                スタイルと機能を兼ね備えたデザイン
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                冷たいアルミとマットなPBTキーキャップが、
                <br />
                手触りと美観を引き立てます。
              </p>
              <a href="#">
                <KuiButton
                  variant="filled"
                  color="default"
                  size="small"
                  shape="round"
                  className="w-full"
                >
                  詳細を見る
                </KuiButton>
              </a>
            </div>
          </div>
          <div className="bg-kui-base rounded-xl p-4">
            <img
              src="/Q1-Max-4.webp"
              alt="Kylith"
              className="w-full h-auto rounded mb-4"
            />
            <div className="">
              <h3 className="text-sm font-semibold mb-2">
                すべてのデバイスに対応
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                Mac・Windows・Linux・iOS
                <br />
                すべてのデバイスで快適に使用できます。
              </p>
              <a href="#">
                <KuiButton
                  variant="filled"
                  color="default"
                  size="small"
                  shape="round"
                  className="w-full"
                >
                  詳細を見る
                </KuiButton>
              </a>
            </div>
          </div>
          <div className="bg-kui-base rounded-xl p-4">
            <img
              src="/Q1-Max-6.webp"
              alt="Kylith"
              className="w-full h-auto rounded mb-4"
            />

            <div className="">
              <h3 className="text-sm font-semibold mb-2">5年長期保証</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                長く安心して使えるよう、
                <br />
                購入から5年間の製品保証が付いています。
              </p>
              <a href="#">
                <KuiButton
                  variant="filled"
                  color="default"
                  size="small"
                  shape="round"
                  className="w-full"
                >
                  詳細を見る
                </KuiButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto p-8 mt-16">
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
