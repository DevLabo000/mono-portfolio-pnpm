# pnpm + turborepoモノレポプロジェクト

## プロジェクトエイリアス

```json
  "scripts": {
    "vite": "pnpm -F \"vite\"",
    "hono": "pnpm -F \"hono\"",
    ...
  },
```

## rootから各サブプロジェクトにpackageをインストール

```sh
pnpm vite add -E {package name}
```

## rootから各サブプロジェクトの開発環境を起動

```sh
pnpm run dev
```

## rootから各プロジェクトをbuild

```sh
pnpm run build
```
