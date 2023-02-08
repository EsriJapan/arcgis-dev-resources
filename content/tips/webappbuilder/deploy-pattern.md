+++
title = "デプロイ パターン"
description = "ArcGIS Web AppBuilder (Developer Edition) で作成したアプリやウィジェットのデプロイ パターンを紹介します。"
weight = 3
aliases = ["/webappbuilder/deploy-pattern/"]
+++

## トピック
* [概要](#概要)
* [Web アプリケーションをデプロイ](#web-アプリケーションをデプロイ)
* [ウィジェットをデプロイ](#ウィジェットをデプロイ)
* [テンプレートをデプロイ](#テンプレートをデプロイ)

## 概要
ArcGIS Web AppBuilder (Developer Edition) (以下 Developer Edition) では ArcGIS Web AppBuilder を拡張して、独自の Web アプリケーションやウィジェット、テンプレートを作成することが可能です。エンド ユーザーの利用形態や要件により最適なデプロイは異なりますが、このページでは以下の 3 つの主要なデプロイ パターンと、それぞれのデプロイ方法についてご紹介します。

---
### Web アプリケーションをデプロイ

### 全体像
* Web アプリケーションを作成し、独自のサーバーでホストすることができます。特定の業務で継続的に利用されるアプリ等、ユーザーによる設定変更が不要な場合や、ユーザーに設定変更をさせたくない場合等に活用できます。
![webapp](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern1.png)

### 必要なコンポーネント
* 開発時
  * Node.js
  * Developer Edition
* 運用時
  * ArcGIS Enterprise または ArcGIS Online
  * Web サーバー (ArcGIS Enterprise の Web サーバーと併用も可)

### 手順概要
以下は Web アプリケーション作成から、デプロイ、実際の運用までの流れの概要です。

1. カスタム ウィジェットを含む web アプリケーションを作成
      * Developer Edition を用いたウィジェットの開発や web アプリケーションの作成には Node.jsが必要です。
      * 詳しくは[インストールガイド](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/install-guide/)をご覧下さい。
      * カスタム ウィジェットを開発する際は、[カスタム ウィジェット開発ガイド](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/development-guide/)をご覧ください。
1. 作成した web アプリケーションを自身で用意した Web サーバーに配置
    * ArcGIS Enterprise で使用している Web サーバーと併用することも可能です。
    * ※ ArcGIS Online を使用してホストすることはできません。
    * 詳しくは、[アプリケーションのデプロイ](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/deploy-your-app/)をご覧ください。
1.  ユーザーが作成された web アプリケーションを利用
    * ユーザーが web アプリケーションにアクセスして利用します。
    * ArcGIS Enterprise や ArcGIS Online のポータルにアイテムとして表示させたい場合はアプリの URL をアイテムに登録する必要があります。
      * 詳細は「[アプリの追加]」及びその後の「[アプリの登録]」をご覧ください。
    * 内部的には、アプリは ArcGIS Online もしくは ArcGIS Enterprise の Web マップを参照してアプリ上に地図を表示します。

---
## ウィジェットをデプロイ
* WebApp Builder で使用できるウィジェットのみを開発し、独自のサーバーでホストすることも可能です。ユーザーが ArcGIS Online や ArcGIS Enterprise を使用して独自に web アプリケーションを作成することを想定しているものの、デフォルトの ArcGIS Web AppBuilder のウィジェットには無い機能を拡張したい場合に活用できます。
![widget](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern2.png)
  

### 必要なコンポーネント
* 開発時
  * Node.js
  * Developer Edition 
* 運用時
  * ArcGIS Enterprise
  * Web サーバー (ArcGIS Enterprise の Web サーバーと併用も可)

### 手順概要
以下はカスタムウィジェットの作成から、デプロイ、実際の運用までの流れの概要です。

1. カスタムウィジェットを作成
    * Developer Edition を用いたウィジェットの作成には Node.jsが必要です。
    * 詳しくは[インストールガイド](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/install-guide/)をご覧下さい。
    * カスタムウィジェット開発の詳細については、[カスタム ウィジェット開発ガイド](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/development-guide/)をご覧下さい。
1. 作成したカスタムウィジェットを自身で用意した Web サーバーに配置
    * ArcGIS Enterprise で使用している Web サーバーと併用することも可能です。
    * ※ ウィジェットを配置するサーバーが自己署名証明書を使用している場合、Portal for ArcGIS に証明書をインポートする必要があります。詳しい方法は[ポータルへの証明書のインポート](https://enterprise.arcgis.com/ja/portal/latest/administer/windows/import-a-certificate-into-the-portal.htm)をご覧ください。
    * Web サーバーに配置後、ArcGIS Enterprise に組み込まれている ArcGIS Web AppBuilder にカスタムウィジェットを追加します。
      * 詳しくは、[カスタム ウィジェットの追加](https://enterprise.arcgis.com/ja/portal/latest/use/add-custom-widgets.htm)をご覧ください。
      * ※ ArcGIS Online に追加することはできません。
1. ウィジェットを使った web アプリケーションの作成・利用
    * ユーザーが ArcGIS Enterprise に組み込まれている ArcGIS Web AppBuilder を利用してカスタムウィジェットを使用した web アプリケーションを作成・利用します。
    * 内部的には、アプリは Web サーバーでホストされているカスタムウィジェットを参照して動作します。

---
## テンプレートをデプロイ
* Esri が用意している [web アプリケーションのテンプレート](https://enterprise.arcgis.com/ja/portal/latest/use/application-templates.htm)とは別に、Developer Edition で作成した web アプリケーションをベースに独自のテンプレートを作成できます。テンプレートを用いることで、ユーザー自身がマップや簡易な設定の変更のみで web アプリケーションを作成することができるようになります。テンプレートを作成しておくと、必要な機能が共通している複数の業務に対して、異なるマップや設定を適用するだけですぐ各業務向けのアプリを作成できます。
* ここでご紹介する方法では開発環境と運用環境が同じである点にご注意ください。
  ![template](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern3.png)

### 必要なコンポーネント
* 開発時
  * Node.js
  * Developer Edition 
* 運用時
  * Node.js
  * Developer Edition 
  * ArcGIS Online または ArcGIS Enterprise

### 手順概要
以下はテンプレートの作成から、デプロイ、実際の運用までの流れの概要です。

1. カスタムウィジェットを含む web アプリケーションを作成
    * Developer Edition を用いたウィジェットの作成には Node.jsが必要です。
    * 詳しくは[インストールガイド](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/install-guide/)をご覧下さい。
    * カスタム ウィジェットを開発する際は、[カスタム ウィジェット開発ガイド](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/development-guide/)をご覧ください。
1. web アプリケーションをテンプレートとして保存 (登録)
    * Developer Edition で作成した web アプリケーションを組織にエクスポートします。
      * Developer Edition でアプリを作成し、[保存] ボタンをクリックした後 [テンプレートとしてエクスポート] をクリックします。
        ![export_as_template](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern4.png)
      * 構成可能にするパラメーターを設定した後、組織にエクスポートをクリックします。
        ![config_params](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern5.png)
      * ※ テンプレートは、組織が設定するテンプレート グループに共有される必要があります。管理権限を持っていない場合、権限が無いことと別途マニュアルで追加する必要がある旨がダイアログで表示されます。
      * 組織の管理者権限がある場合、以下の手順でテンプレート グループを設定できます。
        * [組織] → [設定] → [マップ] の順にクリック
          ![org_setting](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern6.png)
        * [テンプレート] の中でテンプレートを共有するグループを指定
          ![set_template_gr](https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-pattern7.png)
          * [Esri のデフォルトの構成可能なアプリをグループで共有します] をクリックすると、Esri がデフォルトで用意しているテンプレートも通常どおり使用できます。
1. テンプレートを使った web アプリケーションの作成・利用
    * ユーザーが ArcGIS Online もしくは ArcGIS Enterprise のテンプレートから web アプリケーションを作成・利用します。
    * 内部的には、アプリは Developer Edition のテンプレートを参照して動作します。
    * ※ 上記理由から、運用時においてもユーザーが Developer Edition にアクセスできる必要があります。

## 3つのデプロイ パターンの総括表
| パターン | 開発時に必要なコンポーネント | 運用時に必要なコンポーネント | ArcGIS Online での利用可否 | ArcGIS Enterprise での利用可否 |
|---|---|---|---|---|
| [Web アプリケーションをデプロイ](#web-アプリケーションをデプロイ) | Node.js、Developer Edition | Web サーバー、ArcGIS Online もしくは ArcGIS Enterprise | 〇 | 〇 |
| [ウィジェットをデプロイ](#ウィジェットをデプロイ) | Node.js、Developer Edition | Web サーバー、 ArcGIS Enterprise | × | 〇 |
| [テンプレートをデプロイ](#テンプレートをデプロイ) | Node.js、Developer Edition | Developer Edition、ArcGIS Online もしくは ArcGIS Enterprise | 〇 | 〇 |