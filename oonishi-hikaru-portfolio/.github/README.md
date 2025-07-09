# CI/CD 設定

このディレクトリには、GitHub Actionsを使用したCI/CDパイプラインの設定ファイルが含まれています。

## ワークフローファイル

### 1. `ci.yml` - 継続的インテグレーション
- **トリガー**: main/master/developブランチへのpush、PR
- **実行内容**:
  - Node.js 18.x と 20.x でのテスト
  - TypeScript型チェック
  - ESLintによるコード品質チェック
  - npm auditによるセキュリティチェック
  - ビルドテスト
  - プレビューサーバーの動作確認

### 2. `deploy.yml` - 継続的デプロイメント
- **トリガー**: main/masterブランチへのpush、PR
- **実行内容**:
  - 上記CIチェックの実行
  - GitHub Pagesへの自動デプロイ
  - 本番環境でのみデプロイ実行

## 設定の詳細

### GitHub Pages設定
- **ベースパス**: `/oonishi-hikaru-portfolio/` (本番環境)
- **デプロイ先**: GitHub Pages
- **自動化**: main/masterブランチへのpushで自動デプロイ

### 品質チェック
- **型チェック**: TypeScriptコンパイラによる型安全性の確認
- **リンター**: ESLintによるコードスタイルと品質の確認
- **セキュリティ**: npm auditによる依存関係の脆弱性チェック
- **ビルドテスト**: 本番ビルドの成功確認

## 使用方法

1. **開発時**:
   ```bash
   npm run dev          # 開発サーバー起動
   npm run lint         # リンター実行
   npm run type-check   # 型チェック実行
   npm run audit        # セキュリティチェック実行
   ```

2. **デプロイ時**:
   - main/masterブランチにpushするだけで自動デプロイ
   - PRを作成するとCIチェックが実行される

## トラブルシューティング

### よくある問題

1. **ビルドエラー**:
   - TypeScriptエラーを確認
   - 依存関係のインストール状況を確認

2. **デプロイエラー**:
   - GitHub Pagesの設定を確認
   - リポジトリの権限設定を確認

3. **セキュリティ警告**:
   - `npm audit fix`で自動修正を試行
   - 手動で依存関係を更新

## 設定のカスタマイズ

### 新しいブランチでのデプロイ
`deploy.yml`の`branches`セクションを編集:
```yaml
branches: [ main, master, develop ]
```

### 追加の品質チェック
`ci.yml`に新しいステップを追加:
```yaml
- name: Custom check
  run: npm run custom-script
``` 