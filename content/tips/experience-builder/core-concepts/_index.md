+++
title = "コア コンセプト"
description = "ArcGIS Experience Builder (Developer Edition) のコア コンセプトについて紹介します。"
weight = 2
alwaysopen = false
+++

出典：ArcGIS Experience Builder - Guide - [Core concepts](https://developers.arcgis.com/experience-builder/guide/core-concepts/)


ArcGIS Experience Builder Developer Edition は、開発者がノー コード/ロー コード アプローチでカスタム Web アプリケーションを作成できる Web アプリケーション フレームワークです。 ArcGIS のサービスやデータと統合できる、インタラクティブで応答性の高いアプリケーションを構築するためのツールやコンポーネントのセットを提供します。

開発者は、カスタム ウィジェット、テーマ、およびアクションを作成して、ArcGIS Experience Builder を拡張できます。**Jimu** と呼ばれるこの拡張性フレームワークにより、開発ニーズに合ったアプリケーションを構築することができます。

## Jimu とは
[Jimu](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/) は、ArcGIS Experience Builder の拡張フレームワークであり、開発者がカスタム ウィジェット、テーマ、およびアクションを作成できるようにするものです。Jimu は、Experience Builder アプリケーションの機能を拡張するための一連の API とツールを提供します。

Jimu フレームワークは、以下を含むいくつかの技術の上に構築されています。
- [ArcGIS Maps SDK for JavaScript 4.x](https://developers.arcgis.com/javascript/latest/) は、地図と地理空間データを統合します。
- ユーザー インターフェイスの構築とアプリケーションの状態管理のための [React](https://react.dev/) と [Redux](https://react-redux.js.org/) フレームワーク
- ユーザー インターフェイス コンポーネントの [Emotion](https://emotion.sh/docs/introduction)
- Web 標準に準拠した [HTML5](https://developer.mozilla.org/ja/docs/Glossary/HTML5) と [CSS3](https://developer.mozilla.org/ja/docs/Web/CSS)

## 開発
[TypeScript](https://www.typescriptlang.org/) は JavaScript のスーパーセットで、言語に静的な型付けを追加しています。ArcGIS Experience Builder でウィジェット、テーマ、その他のコンポーネントを開発するには、TypeScript を使用します。TypeScript には、次のような多くの利点があります。

- 型宣言によるエラー検出
- よりよい IDE エクスペリエンス
- セルフドキュメント コード
- より読みやすく、わかりやすい

## コア コンセプト
Experience Builder のエクスペリエンスは、Web アプリケーションを作成するために連携するさまざまなコンポーネントで構成されます。これらのコア コンセプトを理解することで、Experience Builder のフレームワークを効果的にナビゲートし、開発することができます。

| コンセプト | 説明 |
|:---|:---:|
| [Page](https://developers.arcgis.com/experience-builder/guide/core-concepts/page/) |1 つの画面に、複数のセクションやビューを含めることができます。|  
| [Window](https://developers.arcgis.com/experience-builder/guide/core-concepts/window/) | ページと同様に、固定表示モードやアンカー表示モードに対応した、設定可能なコンテナーです。 |
| [Section and view](https://developers.arcgis.com/experience-builder/guide/core-concepts/section-view/) | セクションとは、複数のビューを含めることができるページの一部です。ビューとは、ページやウィンドウのようなレイアウト コンテナーですが、セクション内にのみ配置することができます。 |
| [Screen group](https://developers.arcgis.com/experience-builder/guide/core-concepts/screen/) | アプリケーションのレイアウトを整理・管理するために使用できる一連の画面。 |
| [Layout](https://developers.arcgis.com/experience-builder/guide/core-concepts/layout/) | レイアウト コンテナー内のウィジェット、セクション、またはスクリーン グループにおけるコンテンツの配置を定義します。 |
| [Theme](https://developers.arcgis.com/experience-builder/guide/core-concepts/theme/) | アプリケーションの視覚的なスタイルや外観。これには、色、フォント、その他のデザイン要素が含まれます。 |
| [Widget](https://developers.arcgis.com/experience-builder/guide/core-concepts/widget/) | ページやセクションに追加できる再利用可能なコンポーネント。ウィジェットはデータを表示したり、インタラクティブな機能を提供したり、ユーザー体験を向上させたりすることができます。 |
| [Jimu](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/) | ArcGIS Experience Builder の拡張性フレームワーク。開発者がカスタム ウィジェット、テーマ、アクションを作成できるようにするものです。 |
| [Data source](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-source/) | アプリケーション内で使用できる外部データへの接続。これには、地図、レイヤー、その他のデータ タイプが含まれる場合があります。 |
| [Data action](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-action/) | データ ソースに対して実行できる操作。たとえば、データのクエリーやフィルタリングなど。 |
| [Message and action](https://developers.arcgis.com/experience-builder/guide/core-concepts/message-action/) | メッセージとは、特定のイベントや変更を他のウィジェットに通知するために、ウィジェットまたは EXB フレーム ワークによって発行される通知のことです。アクションとは、ボタンのクリックや項目の選択など、ユーザーの操作によってトリガーされる操作のことです。 |
| [Map/Scene view](https://developers.arcgis.com/experience-builder/guide/core-concepts/map-scene-view/) | マップまたはシーン ビューとは、アプリケーションにおける地理データの視覚的な表現のことです。マップやレイヤー、その他の空間情報を表示することができます。 |

## 製品と提供状況

以下の表は、ArcGIS Experience Builder 製品とその提供状況を示しています。

|  | [ArcGIS Online](https://developers.arcgis.com/documentation/glossary/arcgis-online/) | [ArcGIS Enterprise](https://developers.arcgis.com/documentation/glossary/arcgis-enterprise/) |[ArcGIS Location Platform](https://developers.arcgis.com/documentation/glossary/arcgis-location-platform/)|
|:---|:---:|:---:|:---:|
| ArcGIS Experience Builder | ✅ | ✅ | ✕|

## 機能
以下の表は、ArcGIS Experience Builder でサポートされている機能の一覧です。

| コンセプト | 説明 |
|:---|:---:|
|[2D maps](https://developers.arcgis.com/documentation/glossary/map/) |✅|  
| [3D maps](https://developers.arcgis.com/documentation/glossary/scene/) |✅|
|Web apps |✅|
| [Mobile responsive](https://developers.arcgis.com/documentation/glossary/mobile-responsive/) |✅|
| [Mobile optimized](https://developers.arcgis.com/documentation/glossary/mobile-optimized/) |✅|
|Native apps |✕|
| Developer edition |✅|
| Pre-configured templates | ✅|
| Pre-built widgets |✅|
|Drag-and-drop UX  |✅|
| ArcGIS Online deployment |✅|
| ArcGIS Enterprise deployment |✅|
| On-premise web server deployment	|✅|
| Custom themes |✅|
| Custom widgets |✅|
|[API key](https://developers.arcgis.com/documentation/glossary/api-key/) |✕|
|OAuth 2.0  |✅|

## モバイル サポート
ArcGIS Experience Builder はモバイル対応を前提に設計されており、アプリは使用中のデバイスの画面サイズに応じてレイアウトや表示を自動的に調整します。これにより、デスクトップ、タブレット、スマートフォンにおいて一貫したユーザー体験が確保されます。

以下の表は、ArcGIS Experience Builder のモバイル対応機能の一覧です。
| コンセプト | 説明 |
|:---|:---:|
|あらゆる画面サイズに対応|✅|  
|あらゆる画面サイズに合わせてメディアのサイズを変更する |✅|
|画面サイズに合わせてコンテンツの位置を自動調整する|✅|
|ページの読み込みパフォーマンスの向上 |✅|
|クリック可能な領域を拡大し、使いやすさを向上 |✅|
|画面サイズごとに独自のレイアウトとユーザー体験 |✅|


{{< list-docs section="docs" >}}

- [高速モード (Express mode)](https://doc.arcgis.com/ja/experience-builder/latest/build-apps/express-mode.htm) (外部サイトに移動します)
- [高度な書式設定](https://doc.arcgis.com/ja/experience-builder/latest/configure-widgets/advanced-formatting.htm) (外部サイトに移動します)
