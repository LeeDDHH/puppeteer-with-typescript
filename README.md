# puppeteer-with-typescript

- Puppeteer、TypeScript、Webpack を組み合わせたモジュール
- `webpack` でビルドし、 `dist/prod.js` としてバンドルを吐き出す

---

## 構成

|                        |         |
| :--------------------: | :-----: |
|        Node.js         | 16.14.0 |
|          npm           |  8.3.1  |
|       TypeScript       |  4.6.2  |
|        webpack         | 5.70.0  |
|      webpack-cli       |  4.9.2  |
|         eslint         | 8.11.0  |
| eslint-config-prettier |  8.5.0  |
|      npm-run-all       |  4.1.5  |
|        prettier        |  2.5.1  |
|       ts-loader        |  9.2.8  |
|        ts-node         | 10.7.0  |
|       puppeteer        | 13.5.2  |

---

## コマンド

### ビルド

```bash
npm build
```

- `dist` を削除する
- `prod` 用にビルドする

### ビルドの実行

```bash
npm start
```
