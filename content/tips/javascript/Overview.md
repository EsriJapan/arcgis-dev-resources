+++
title = "概要"
description = "ArcGIS Maps SDK for JavaScript の概要について紹介します。"
aliases = ["/javascript/overview/"]
weight = 1
+++

出典：ArcGIS Maps SDK for JavaScript-Get started - [Overview](https://developers.arcgis.com/javascript/latest/get-started-overview/
)

ArcGIS Maps SDK for JavaScript を使用してアプリケーションを構築する場合、複数の選択肢があり、それぞれの目的や要件に応じて利点が異なります。小規模なプロジェクトでは、ArcGIS Content Delivery Network (CDN) を利用するのが最適な方法です。最新の JavaScript フレームワークやビルド ツールを使用して構築された大規模または複雑なアプリケーションでは、npm からコンポーネント パッケージをインストールするのが最も良い方法です。

## [CDN](https://developers.arcgis.com/javascript/latest/get-started-overview/#cdn)

ArcGIS CDN を使用すると、ローカルにパッケージをインストールしなくても、アプリケーションに SDK の機能を簡単に組み込むことができます。これは、シンプルなアプリケーションや迅速なプロトタイピング、または最適化されたクラウド キャッシングを活用してモジュールのダウンロードを高速化したい場合に最適です。

## [npm](https://developers.arcgis.com/javascript/latest/get-started-overview/#npm)
より複雑なアプリケーション、特に最新のビルド ツールや [React](https://react.dev/)、[Vue](https://vuejs.org/)、[Angular](https://angular.dev/) のような JavaScript フレームワークでアプリケーションを構築する場合は、JavaScript Maps SDK を npm 経由でインストールすることをお勧めします。これにより、npm のパッケージ管理機能を利用してあらゆるパッケージをプロジェクトの依存関係として管理できるようになり、[Webpack](https://webpack.js.org/) や [Vite](https://vitejs.dev/) のような最新のビルド ツールとよりシームレスに統合することができます。JavaScript Maps SDK の各コンポーネント パッケージはフレームワークに依存しないように設計されており、ほとんどの JavaScript フレームワークまたはフレームワークなしでも互換性があります。 しかし、コンポーネントを特定のフレームワーク内で使い慣れたものにするために、よりカスタマイズされたエクスペリエンスを提供する追加パッケージが用意されています。[@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) の場合、[@arcgis/map-components-react](https://www.npmjs.com/package/@arcgis/map-components-react) と [@arcgis/map-components-angular](https://www.npmjs.com/package/@arcgis/map-components-angular) が npm パッケージとして利用可能です。

## [アクセス トークン](https://developers.arcgis.com/javascript/latest/get-started-overview/#access-tokens)

{{% notice note %}}

注 : アプリケーションが認証に [ArcGIS アイデンティティ](https://developers.arcgis.com/documentation/glossary/arcgis-account/)のみを使用している場合は、このセクションをスキップできます。詳細については、[security and authentication documentation](https://esrijapan.github.io/arcgis-dev-resources/guide/security/) を参照してください。

{{% /notice %}}

ベースマップ、ジオコーディング、ルーティングなどの ArcGIS サービスにアクセスするには、アクセス トークンが必要です。ポータルにアクセスし、特定のニーズに合わせてカスタム権限とリファラを持つアクセス トークンを作成します。チュートリアルやサンプルの説明で必要な場合は、アクセス トークンを含めてください。[global API キー](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#apiKey) だけでなく、特定のクラスでより細かい API キーを使用することもできます。


