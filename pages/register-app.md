# アプリの登録と認証

ArcGIS for Developers の認証を利用するためにはアプリの登録が必要となります。ArcGIS for Developers サイト上でアプリを登録することで、ユーザー ログインあるいはアプリ認証を始めるための認証情報が付与されます。

## アプリの登録

1. ArcGIS for Developers 開発者アカウントで ArcGIS for Developers にサイン インします。
1. アプリ リストを開きます。
1. [REGISTER NEW APPLICATION] をクリックします。
1. アプリが登録されたら、アプリの概要を確認します。
1. 作成するアプリの種類に従って、アプリ認証かユーザー ログインのいずれかを選択することができます。

## ユーザー ログイン認証

ユーザー名とパスワードを入力して認証を行うユーザー ログイン認証の概要を紹介します。

![ユーザー ログイン認証](http://apps.esrij.com/arcgis-dev/guide/img/auth/userlogin.jpg)

アプリの登録を行って取得したアプリ ID（`client_id`）を使ってユーザー ログイン認証を行います。異なる環境でアクセス トークンをセキュアに取得するために OAuth 2.0 は複数の異なる承認タイプ（`grant_types`）を定義します。各承認タイプとアプリの種類の対応関係は以下の通りです。

|承認タイプ|クライアントの種類|
|:-:|:-:|
|Implicit|ブラウザー ベース|
|Authorization|モバイル、ネイティブ、サーバー サイド|

アプリと ArcGIS for Developers 間で行われるユーザー ログイン認証のフローは基本的には変わりません。以下はブラウザー ベースのアプリにおける認証フローです。

1. ユーザーのアプリ ID（`client_id`）、`response_type=token`、リダイレクト URI（`redirect_uri`）とオプションで有効期限（`expiration`）を使って、ブラウザー内で認証用エンドポイント（https://www.arcgis.com/sharing/rest/oauth2/authorize ）にユーザーをダイレクトします。
1. ユーザー名とパスワードによる認証に成功したら、ステップ１のリダイレクト URI（`redirect_uri`）からアプリにリダイレクトされます。アクセス トークン（`access_token`）と追加情報がハッシュとして URL の末尾に追加されます（例：http://app.example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA&expires_in=3600 ）。アプリはユーザーのトークンによって URL をパースすることができます。
1. アクセス トークンが付与されたら、トークン（`token`）を要求する ArcGIS for Developers へのリクエストにトークンを含めます。

## アプリ認証

特定のアプリをログインなしで認証を行うアプリ認証の概要を紹介します。

![アプリ認証](http://apps.esrij.com/arcgis-dev/guide/img/auth/applogin.jpg)

アプリの登録を行って取得したアプリ ID（`client_id`）と秘密鍵（`client_secret`）を使ってアプリ認証を行います。以下は、アプリと ArcGIS for Developers 間で行われるアプリ認証のフローです。

1. アプリ ID と秘密鍵を使って https://www.arcgis.com/sharing/rest/oauth2/token/ への POST リクエストを作成します。
1. JSON レスポンス内のアクセス トークン（`access_token`）を取得します。
1. token パラメーターが要求されるリクエストにはすべてアクセス トークンを追加します。

```javascript
var request = require('request'); // npm install request

// generate a token with your client id and client secret
request.post({
    url: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
    json: true,
    form: {
      'f': 'json',
      'client_id': 'YOUR_APPLICATIONS_CLIENT_ID',
      'client_secret': 'YOUR_APPLICATIONS_CLIENT_SECRET',
      'grant_type': 'client_credentials',
      'expiration': '1440'
    }
}, function(error, response, body){
    console.log(body.access_token);
});
```

---

[:back: メインページへ戻る](https://github.com/EsriJapan/arcgis-dev-resources/blob/gh-pages/README.md)
