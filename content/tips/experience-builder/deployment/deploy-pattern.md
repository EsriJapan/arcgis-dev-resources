+++
title = "デプロイ パターン"
description = "ArcGIS Experience Builder (Developer Edition) で作成したアプリやウィジェットのデプロイ パターンを紹介します。"
weight = 14
aliases = ["/experience/deployment/deploy-pattern/"]
+++

## トピック
* [概要](#概要)
* [Web アプリケーションをデプロイ](#web-アプリケーションをデプロイ)
* [ウィジェットをデプロイ](#ウィジェットをデプロイ)
<!-- * [テンプレートをデプロイ](#テンプレートをデプロイ) -->

## 概要
ArcGIS Experience Builder (Developer Edition) (以下 Developer Edition) では ArcGIS Experience Builder を拡張して、独自の Web アプリケーションやウィジェットを作成できます。エンド ユーザーの利用形態や要件により最適なデプロイは異なりますが、このページでは以下の 2 つの主要なデプロイ パターンと、それぞれのデプロイ方法についてご紹介します。


## Web アプリケーションをデプロイ

### 全体像
Web アプリケーションを作成し、独自のサーバーでホストすることができます。特定の業務で継続的に利用されるアプリ等、ユーザーによる設定変更が不要な場合や、ユーザーに設定変更をさせたくない場合に活用できます。
![ExB](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/deploy-pattern1.png)

### 必要なコンポーネント
* 開発時
  * Node.js
  * Developer Edition
* 運用時
  * ArcGIS Enterprise または ArcGIS Online
  * Web サーバー (ArcGIS Enterprise の Web サーバーと併用も可)

### 手順概要
以下は Web アプリケーション作成から、デプロイ、実際の運用までの流れの概要です。

1. カスタム ウィジェットを含む Web アプリケーションを作成
    * Developer Edition を用いたウィジェットの開発や Web アプリケーションの作成には Node.js が必要です。
    * 詳しくは[インストール ガイド](../../install-guide/)をご覧ください。
    * カスタム ウィジェットを開発する際は、[カスタム ウィジェット開発ガイド](../../widget-development/)をご覧ください。
2. 作成した Web アプリケーションを自身で用意した Web サーバーに配置
    * ArcGIS Enterprise で使用している Web サーバーと併用することも可能です。<br />
      ※ ArcGIS Online を使用してホストすることはできません。
    * 詳しくは、[エクスペリエンスのデプロイ](../../deployment/experience-deployment/#エクスペリエンスのデプロイ)をご覧ください。
3. ユーザーが作成された Web アプリケーションを利用
    * ユーザーが Web アプリケーションにアクセスして利用します。
    * ArcGIS Enterprise や ArcGIS Online のポータルにアイテムとして表示させたい場合はアプリの URL をアイテムに登録する必要があります。
      * 詳細は[アプリの追加](https://doc.arcgis.com/ja/arcgis-online/manage-data/add-app-url.htm#ESRI_SECTION1_40AB67789DE04437B77EF15922C5A75C)及びその後の[アプリの登録](https://doc.arcgis.com/ja/arcgis-online/manage-data/add-app-url.htm#REG_APP)をご覧ください。
    * 内部的には、アプリは ArcGIS Online もしくは ArcGIS Enterprise の Web マップを参照してアプリ上に地図を表示します。

---
## ウィジェットをデプロイ
ArcGIS Enterprise 11 以降では、Experience Builder で使用できるウィジェットのみを開発し、独自のサーバーでホストすることも可能です。ユーザーが ArcGIS Online や ArcGIS Enterprise を使用して独自に Web アプリケーションを作成することを想定しているものの、デフォルトの Experience Builder のウィジェットには無い機能を拡張したい場合に活用できます。
![widget](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/deploy-pattern2.png)
  
### 必要なコンポーネント
* 開発時
  * Node.js
  * Developer Edition 
* 運用時
  * ArcGIS Enterprise
  * Web サーバー (ArcGIS Enterprise の Web サーバーと併用も可)

### 手順概要
以下はカスタム ウィジェットの作成から、デプロイ、実際の運用までの流れの概要です。

1. カスタム ウィジェットを作成
    * Developer Edition を用いたウィジェットの作成には Node.js が必要です。
    * 詳しくは[インストール ガイド](../../install-guide/)をご覧下さい。
    * カスタム ウィジェット開発の詳細については、[カスタム ウィジェット開発ガイド](../../widget-development/)をご覧下さい。
1. 作成したカスタム ウィジェットを自身で用意した Web サーバーに配置
    * ArcGIS Enterprise で使用している Web サーバーと併用することも可能です。<br />
      ※ ウィジェットを配置するサーバーが自己署名証明書を使用している場合、Portal for ArcGIS に証明書をインポートする必要があります。詳しい方法は[ポータルへの証明書のインポート](https://enterprise.arcgis.com/ja/portal/latest/administer/windows/import-a-certificate-into-the-portal.htm)をご覧ください。
    * Web サーバーに配置後、ArcGIS Enterprise に組み込まれている Experience Builder にカスタムウィジェットを追加します。
      * 詳しくは、[カスタム ウィジェットの追加](https://doc.arcgis.com/ja/experience-builder/11.0/configure-widgets/add-custom-widgets.htm)をご覧ください。<br />
        ※ ArcGIS Online に追加することはできません。
1. ウィジェットを使った Web アプリケーションの作成・利用
    * ユーザーが ArcGIS Enterprise に組み込まれている Experience Builder を利用してカスタム ウィジェットを使用した Web アプリケーションを作成・利用します。
    * 内部的には、アプリは Web サーバーでホストされているカスタム ウィジェットを参照して動作します。


## 2 つのデプロイ パターンの比較表
| パターン | 開発時に必要なコンポーネント | 運用時に必要なコンポーネント | ArcGIS Online での利用可否 | ArcGIS Enterprise での利用可否 |
|---|---|---|---|---|
| [Web アプリケーションをデプロイ](#web-アプリケーションをデプロイ) | Node.js、Developer Edition | Web サーバー、ArcGIS Online もしくは ArcGIS Enterprise | 〇 | 〇 |
| [ウィジェットをデプロイ](#ウィジェットをデプロイ) | Node.js、Developer Edition | Web サーバー、 ArcGIS Enterprise | × | 〇 |
