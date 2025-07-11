# 大西輝 ポートフォリオサイト

大西輝（Hikaru Onishi）の個人ポートフォリオサイトです。会計・ファイナンス分野での経験とスキルを紹介しています。

## 概要

- **氏名**: 大西 輝 | Hikaru Onishi
- **キャッチコピー**: 「会計で企業価値を見抜く次世代ファイナンス・リーダー」
- **専門分野**: 会計、ファイナンス、財務分析

## 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **言語対応**: 日本語・英語（i18n）
- **CI/CD**: GitHub Actions
- **デプロイ**: GitHub Pages

## 主な機能

- レスポンシブデザイン
- 日本語・英語の言語切り替え
- スムーズなアニメーション
- お問い合わせフォーム
- スキル・プロジェクト・経歴の紹介

## セットアップ

### 必要な環境

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# リンター実行
npm run lint

# 型チェック
npm run type-check

# セキュリティチェック
npm run audit
```

## CI/CD パイプライン

このプロジェクトはGitHub Actionsを使用したCI/CDパイプラインが設定されています。

### 自動化された処理

1. **継続的インテグレーション (CI)**:
   - TypeScript型チェック
   - ESLintによるコード品質チェック
   - npm auditによるセキュリティチェック
   - ビルドテスト
   - 複数Node.jsバージョンでのテスト

2. **継続的デプロイメント (CD)**:
   - main/masterブランチへのpushで自動デプロイ
   - GitHub Pagesへの自動公開
   - 品質チェック通過後のみデプロイ実行

### デプロイフロー

```mermaid
graph LR
    A[コードプッシュ] --> B[CIチェック]
    B --> C{チェック通過?}
    C -->|Yes| D[GitHub Pagesデプロイ]
    C -->|No| E[エラー通知]
```

詳細な設定については [`.github/README.md`](.github/README.md) を参照してください。

## プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ヘッダー
│   ├── HeroSection.tsx # ヒーローセクション
│   ├── AboutSection.tsx # 自己紹介
│   ├── SkillsSection.tsx # スキル
│   ├── ProjectsSection.tsx # プロジェクト
│   ├── ExperienceSection.tsx # 経歴・学歴
│   ├── ContactSection.tsx # お問い合わせ
│   └── Footer.tsx      # フッター
├── contexts/           # React Context
│   └── LanguageContext.tsx # 言語切り替え
├── data/              # データファイル
│   └── translations.ts # 翻訳データ
└── assets/            # 静的ファイル
```

## 連絡先

- **メール**: hikachuu2589@gmail.com
- **電話**: 080-6112-3699

## ライセンス

© 2024 Hikaru Onishi. All rights reserved.
