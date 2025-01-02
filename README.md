# Empowering Sansan

Sansan への貢献と抱負を紹介するポートフォリオサイトです。

このプロジェクトは [Cursor](https://cursor.sh/) エディタと [Claude](https://www.anthropic.com/claude) AI モデルのアシストにより開発されました。AI との協働により、最新のベストプラクティスとアクセシビリティに配慮した実装を実現しています。

## 🚀 クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 型チェック
npm run type-check

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## 🛠 技術スタック

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint & Prettier
- GitHub Actions

## 🌐 デプロイメント

このプロジェクトは、main ブランチにプッシュされた際に GitHub Actions を通じて AWS に自動デプロイされます。

### 前提条件

1. **S3 バケットの設定**

   - 静的ウェブサイトホスティング用のバケットを作成
   - パブリックアクセスを有効化
   - バケットポリシーの設定:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

2. **CloudFront の設定**

   - S3 バケットを指すディストリビューションを作成
   - SSL 証明書の設定（推奨）
   - カスタムドメインの設定（任意）

3. **GitHub シークレットの設定**
   リポジトリ設定で必要なシークレット:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_S3_BUCKET`
   - `CLOUDFRONT_DISTRIBUTION_ID`
   - `VITE_CONTACT_EMAIL`
   - `VITE_CONTACT_NAME`
   - `VITE_CONTACT_TITLE`
   - `VITE_CONTACT_LINKEDIN`

### 手動デプロイ

```bash
# ビルド
npm run build

# S3 へのデプロイ
aws s3 sync dist/ s3://your-bucket-name --delete

# CloudFront キャッシュの無効化
aws cloudfront create-invalidation \
  --distribution-id your-distribution-id \
  --paths "/*"
```

## 🔧 環境変数

ローカル開発用の `.env` ファイルを作成:

```env
VITE_CONTACT_EMAIL=your.email@example.com
VITE_CONTACT_NAME=Your Name
VITE_CONTACT_TITLE=Your Title
VITE_CONTACT_LINKEDIN=https://linkedin.com/in/your-profile
```

本番環境では、これらの値を GitHub シークレットとして設定します。

## 📝 開発

### コードスタイル

- ESLint によるコード品質管理
- Prettier によるコードフォーマット
- TypeScript による型安全性の確保

```bash
# コードフォーマット
npm run format

# リント実行
npm run lint

# 型チェック
npm run type-check
```

### プロジェクト構成

```
src/
├── assets/        # 静的アセット（画像、アイコン）
├── components/    # React コンポーネント
│   ├── layout/    # レイアウトコンポーネント
│   ├── sections/  # ページセクション
│   └── ui/        # 再利用可能な UI コンポーネント
└── data/          # コンテンツと設定
```

## 📄 ライセンス

© 2024 Empowering Sansan. All rights reserved.
