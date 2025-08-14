import { KuiButton } from "@/components/kui";

const features = [
  {
    image: "/Q1-Max-2.webp",
    title: "心地よい打鍵感",
    description:
      "しっかりとした反発と静音性を両立した、\nバランスの良い打鍵感を実現。",
  },
  {
    image: "/Q1-Max-3.webp",
    title: "スタイルと機能を兼ね備えたデザイン",
    description:
      "冷たいアルミとマットなPBTキーキャップが、\n手触りと美観を引き立てます。",
  },
  {
    image: "/Q1-Max-4.webp",
    title: "すべてのデバイスに対応",
    description:
      "Mac・Windows・Linux・iOS\nすべてのデバイスで快適に使用できます。",
  },
  {
    image: "/Q1-Max-6.webp",
    title: "5年長期保証",
    description:
      "長く安心して使えるよう、\n購入から5年間の製品保証が付いています。",
  },
];

export default function Features() {
  return (
    <section className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-2xl mb-8">
        <span className="font-semibold">Features</span>
        <span className="ml-2 text-xs text-kui-default/50">製品特徴</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-kui-base rounded-xl p-4">
            <img
              src={feature.image}
              alt="Kylith"
              className="w-full h-auto rounded mb-4"
            />
            <div className="">
              <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                {feature.description}
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
        ))}
      </div>
    </section>
  );
}
