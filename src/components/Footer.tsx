import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-kylith text-sm py-6 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Kylith. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:underline">
            利用規約
          </a>
          <a href="#" className="hover:underline">
            お問い合わせ
          </a>
        </div>
      </div>
    </footer>
  );
}
