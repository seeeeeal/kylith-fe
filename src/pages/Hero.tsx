import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <section
        className="relative h-[80vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold drop-shadow-xl">
            Where performance meets style.
          </h1>
          <p className="mt-4 text-xl">
            高性能カスタムキーボードの世界へようこそ。
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full"
          >
            商品を見る
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">おすすめ商品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Kylith Nova 60</h3>
              <p className="text-gray-600 mb-4">
                60%レイアウトのコンパクトで静音なモデル。
              </p>
              <Link
                to="/products/nova-60"
                className="text-kylith hover:underline"
              >
                詳細を見る →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Kylith Ergo TKL</h3>
              <p className="text-gray-600 mb-4">
                手首に優しい設計のエルゴノミクスモデル。
              </p>
              <Link
                to="/products/ergo-tkl"
                className="text-kylith hover:underline"
              >
                詳細を見る →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Kylith Pro Wireless
              </h3>
              <p className="text-gray-600 mb-4">
                高性能かつ無線対応、仕事もゲームも快適。
              </p>
              <Link
                to="/products/pro-wireless"
                className="text-kylith hover:underline"
              >
                詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Kylithのこだわり
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Mac対応</h3>
              <p className="text-gray-600 text-sm">
                OS自動切替でMacにも完璧対応。
              </p>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">静音設計</h3>
              <p className="text-gray-600 text-sm">
                オフィスでも深夜でも気にならない。
              </p>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">高級素材</h3>
              <p className="text-gray-600 text-sm">
                アルミ＆PBTで手触りも美しさも最高。
              </p>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">5年保証</h3>
              <p className="text-gray-600 text-sm">
                長く使える安心をお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
