# rails-dojo-web-basics-quiz

Rails Dojo Year 1 / Week 10「Webの仕組み」用の選択式Web教材です。

ブラウザ、サーバ、リクエスト、レスポンス、GET / POST、フォーム、ルーティングを、ブラウザ上で1問ずつ確認できます。

## ローカルで確認する

```bash
uv run python -m http.server 8000
```

ブラウザで開きます。

```text
http://localhost:8000/
```

サーバーを止めるときは、ターミナルで `Ctrl + C` を押します。

## GitHub Pages

`main` ブランチへ push すると、GitHub Actions で GitHub Pages に公開されます。

GitHub のリポジトリ設定では、Settings -> Pages -> Build and deployment -> Source を `GitHub Actions` にしてください。

公開URL:

```text
https://TORIFUKUKaiou.github.io/rails-dojo-web-basics-quiz/
```

## 方針

- 初期実装ではnpmを使いません。
- 将来Nodeを使う場合は、devcontainer内で実行します。
- 見た目はコスモ風にしつつ、問題文と解説の読みやすさを優先します。
