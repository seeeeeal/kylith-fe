**言語:** [English](./README.md) | [日本語](./README.ja.md)

# Kylith - 仮想 EC サイト（フロントエンド）

Kylith は、React と TypeScript を用いて開発された仮想 EC サイトのフロントエンドプロジェクトです。  
技術スタックや UI コンポーネントの整理、i18n 対応などを含み、ポートフォリオ用途で構築されています。

## 📦 インストール

```bash
git clone https://github.com/your-username/kylith-fe.git
cd kylith-fe
pnpm install
```

## 🚀 開発サーバーの起動

```bash
pnpm dev
```

## 🛠️ 技術スタック

- **React** - UI 構築のための JavaScript ライブラリ
- **TypeScript** - 型安全な JavaScript のスーパーセット
- **Vite** - 高速ビルドツール
- **Tailwind CSS** - ユーティリティファーストな CSS フレームワーク
- **React Router** - ページ遷移管理
- **i18next** - 多言語対応
- **Storybook** - UI コンポーネントのカタログ/ドキュメントツール
- **PNPM** - 高速なパッケージマネージャー

## 📁 ディレクトリ構成

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── kui/             # カスタムUIライブラリ
├── pages/               # ページ単位のコンポーネント
├── context/             # 状態管理用のReact Context
├── types/               # TypeScript型定義
├── assets/              # 画像やフォントなどの静的ファイル
├── i18n/                # 多言語設定
├── stories/             # Storybook用コンポーネント
└── main.tsx             # アプリケーションのエントリーポイント
```

## 📝 ライセンス

このプロジェクトは、学習およびポートフォリオ用途として作成されています。
