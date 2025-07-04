+++
title = "概要"
description = "ArcGIS Maps SDK for JavaScript の概要について紹介します。"
aliases = ["/javascript/overview/"]
weight = 1
hidden = true
+++

出典：ArcGIS Maps SDK for JavaScript-Get started - [Overview](https://developers.arcgis.com/javascript/latest/get-started-overview/
)

ArcGIS Maps SDK for JavaScript を使用してアプリケーションを構築する場合、複数の選択肢があり、それぞれの目的や要件に応じて利点が異なります。小規模なプロジェクトでは、ArcGIS Content Delivery Network (CDN) を利用するのが最適な方法です。最新の JavaScript フレームワークやビルド ツールを使用して構築された大規模または複雑なアプリケーションでは、npm からコンポーネント パッケージをインストールするのが最も良い方法です。

## [CDN](https://developers.arcgis.com/javascript/latest/get-started-overview/#cdn)

ArcGIS CDN を使用すると、ローカルにパッケージをインストールしなくても、アプリケーションに SDK の機能を簡単に組み込むことができます。これは、シンプルなアプリケーションや迅速なプロトタイピング、または最適化されたクラウド キャッシングを活用してモジュールのダウンロードを高速化したい場合に最適です。

## [npm](https://developers.arcgis.com/javascript/latest/get-started-overview/#npm)
より複雑なアプリケーション、特に最新のビルド ツールや [React](https://react.dev/)、[Vue](https://vuejs.org/)、[Angular](https://angular.dev/) のような JavaScript フレームワークでアプリケーションを構築する場合は、JavaScript Maps SDK を npm 経由でインストールすることをお勧めします。これにより、npm のパッケージ管理機能を利用してあらゆるパッケージをプロジェクトの依存関係として管理できるようになり、[Webpack](https://webpack.js.org/) や [Vite](https://vitejs.dev/) のような最新のビルド ツールとよりシームレスに統合することができます。JavaScript Maps SDK の各コンポーネント パッケージはフレームワークに依存しないように設計されており、ほとんどの JavaScript フレームワークまたはフレームワークなしでも互換性があります。  

## [CSS](https://developers.arcgis.com/javascript/latest/get-started-overview/#css)
SDK をアプリケーションに読み込む方法によっては、追加の CSS リンクを含める必要があります。 CDN からコンポーネントを使用している場合、CSS リンクは自動的に含まれます。 npm を使用している場合は、アプリケーションに CSS ファイルを手動でインポートする必要があります。

### [コンポーネント](https://developers.arcgis.com/javascript/latest/get-started-overview/#components)
|  | コンポーネント スタイルシート | コア API スタイルシート | Calcite スタイルシート |
|:-----:|:-----:|:-----:|:-----:|
| npm | マニュアル                   | マニュアル             | マニュアル            |
| CDN | オート                      | マニュアル             | オート                 |

### [コア API](https://developers.arcgis.com/javascript/latest/get-started-overview/#core-api)
|  | コア API スタイルシート | Calcite スタイルシート |
|:-----:|:-----:|:-----:|
| npm | マニュアル          | オート             |
| CDN | マニュアル          | オート             |

## [アクセス トークン](https://developers.arcgis.com/javascript/latest/get-started-overview/#access-tokens)

{{% notice note %}}

注 : アプリケーションが認証に [ArcGIS アイデンティティ](https://developers.arcgis.com/documentation/glossary/arcgis-account/)のみを使用している場合は、このセクションをスキップできます。詳細については、[security and authentication documentation](https://esrijapan.github.io/arcgis-dev-resources/guide/security/) を参照してください。

{{% /notice %}}

ベースマップ、ジオコーディング、ルーティングなどの ArcGIS サービスにアクセスするには、アクセス トークンが必要です。ポータルにアクセスし、特定のニーズに合わせてカスタム権限とリファラを持つアクセス トークンを作成します。チュートリアルやサンプルの説明で必要な場合は、アクセス トークンを含めてください。[global API キー](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#apiKey) だけでなく、特定のクラスでより細かい API キーを使用することもできます。


