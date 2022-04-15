# ビルド

- [puppeteer を webpack で bundle しようとしたら「Can't resolve 'ws'」と怒られた場合の対処方法 - 約束の地](https://obel.hatenablog.jp/entry/20200111/1578686400)
- [Module not found error can't resolve 'ws' in puppeteer-core/lib · Issue #3466 · puppeteer/puppeteer](https://github.com/puppeteer/puppeteer/issues/3466)
  - puppeteer にはグローバル export がないみたいで、webpack でビルドする際は、externals で puppeteer を'require("puppeteer")'指定する必要がある
