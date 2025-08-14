import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import ReactMarkdown from "react-markdown";
import { FiUser } from "react-icons/fi";

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

export default function Reviews() {
  return (
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
  );
}
