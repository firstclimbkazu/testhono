# TestHono

Next.js + Honoを使用したサンプルアプリケーション。HonoをNext.jsのApp Router環境で使用する例を示しています。

## 必要要件

- Node.js >= 18.18.0
- npm

## 技術スタック

- Next.js 15.2.4
- Hono 4.7.5
- React 19.0.0
- TypeScript

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/your-username/testhono.git
cd testhono

# 依存関係のインストール
npm install
```

## 開発サーバーの起動

```bash
# 開発サーバーを起動（デフォルトでは http://localhost:3000）
npm run dev
```

## APIエンドポイント

以下のAPIエンドポイントが利用可能です：

- `GET /api/hello` - Hello APIエンドポイント
  - レスポンス例: `{ "message": "Hello from Hono API!" }`

- `GET /api/articles` - 記事一覧を取得
  - レスポンス例:
    ```json
    {
      "articles": [
        { "id": 1, "title": "記事1", "content": "内容1" },
        { "id": 2, "title": "記事2", "content": "内容2" }
      ]
    }
    ```

- `POST /api/articles` - 新規記事を作成
  - リクエスト例:
    ```json
    {
      "title": "新しい記事",
      "content": "記事の内容"
    }
    ```
  - レスポンス例:
    ```json
    {
      "message": "記事が作成されました",
      "article": {
        "title": "新しい記事",
        "content": "記事の内容"
      }
    }
    ```

## Cloudflareへのデプロイ

### 前提条件

1. Cloudflareアカウントの作成
2. Node.js v18以上のインストール

### デプロイ手順

1. Cloudflareのダッシュボードにアクセス
   - https://dash.cloudflare.com/ にアクセス
   - アカウントにログイン

2. Pagesプロジェクトの作成
   - 左側のメニューから「Pages」を選択
   - 「Create a project」をクリック
   - 「Connect to Git」を選択
   - GitHubアカウントと連携
   - リポジトリを選択

3. ビルド設定
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Root directory location: `/`
   - Node.js version: `18`（または最新のLTS版）

4. 環境変数の設定
   ```
   NODE_VERSION=18
   NODE_ENV=production
   ```

5. デプロイの実行
   ```bash
   # ビルド
   npm run build
   
   # Cloudflare Pages用のビルド
   npm run pages:build
   
   # デプロイ
   npm run pages:deploy
   ```

## 開発者向け情報

### ディレクトリ構造

```
src/
├── app/
│   ├── api/
│   │   ├── hello/
│   │   │   └── route.ts    # Hello APIエンドポイント
│   │   └── articles/
│   │       └── route.ts    # 記事関連APIエンドポイント
│   ├── page.tsx            # メインページ
│   └── layout.tsx          # レイアウト
└── types/                  # 型定義
```

## ライセンス

MIT