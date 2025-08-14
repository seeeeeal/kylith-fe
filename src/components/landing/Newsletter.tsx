import { FiChevronRight, FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
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
  );
}
