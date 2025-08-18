+++
title = "API キーの取得"
description = "アプリケーションを公開するために必要な API キーを取得する手順について紹介します。"
Weight=2
aliases = ["/get-api-key/"]
+++

出典：Security and authentication guide - [Tutorial: Create an API key](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/tutorials/create-an-api-key/)

APIキーの認証情報を使用してAPIキーを作成し、管理する方法を学びます。

## API キーとは
API キーは、ArcGIS のセキュアなサービス、コンテンツ、および機能へのアクセスをアプリケーションに許可する、長期間のアクセス トークンです。API キーは、ポータルでホストされているアイテムの一種である API キーの認証情報を使用して生成されます。API キーの認証情報には、API キーを生成し、その権限や有効期限などのプロパティを管理するための設定が含まれています。 API キーの認証情報を作成し、アプリケーションで API キーを使用するプロセスは、API キー認証として知られています。

このガイドでは、APIキーの認証情報を作成し、以下のことを行う方法を説明します。
* 長期的な API キーを生成し、アプリケーションに保存
* API キーが ArcGIS のサービス、コンテンツ、および機能にアクセスできる権限の設定
* API キーの有効期限と参照元 URL の設定
* API キーの認証情報のアイテムページを使用した、API キーの管理

API キーの詳細については [Introduction to API key authentication](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/) (英語) をご参照ください。

## 前提条件
1. ArcGIS Location Platform アカウント、ArcGIS Online アカウント、ArcGIS Enterprise アカウントのいずれかが必要です。ArcGIS Online アカウントおよび ArcGIS Enterprise アカウントの場合は、アカウントに適切なユーザー タイプとロールが設定されている必要があります。詳細については、[製品およびアカウントの要件](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/#product-and-account-requirements) を参照してください。
2. API キーに割り当てる権限を把握する必要があります。割り当てられた権限により、アプリケーションは特定の ArcGIS サービスおよびリソースにアクセスできるようになります。詳細は [Privileges](https://developers.arcgis.com/documentation/security-and-authentication/reference/privileges/) を参照してください。

## API キーの作成手順

### ポータルにサイン イン

APIキーの認証情報を含むアイテムの作成と管理にはポータルを使用します。

#### ArcGIS Location Platform
1. ブラウザで [https://location.arcgis.com](https://location.arcgis.com) にアクセスし、ArcGIS Location Platform アカウントでサインインします。ダッシュボードで「My portal」をクリックして、ポータルに移動します。

#### ArcGIS Online
1. ArcGIS Online アカウントで[ポータル](https://www.arcgis.com/index.html)にサインインしてください。

#### ArcGIS Enterprise
1. ブラウザで、ArcGIS Enterprise ポータルにアクセスし、ArcGIS Enterprise アカウントでポータルにサインインしてください。


### API キーの作成

1. ポータルで、[コンテンツ] > [マイ コンテンツ] > [新しいアイテム] をクリックします。
2. [開発者の認証情報] > [API キーの認証情報]を選択し、[次へ] をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_1.png" width="800px">

{{% notice note %}}

ArcGIS Online アカウントの場合は、アカウントに管理者権限または API キーの生成権限を持つカスタム ロールが設定されている必要があります。詳細については、[Limitations](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/#limitations) を参照してください。

{{% /notice %}}

### 有効期限と参照元 URL の設定
API キーの認証情報は、API キーと呼ばれる長期間のアクセス トークンを生成します。API キーは最大 1 年間有効で、有効期限は生成時に設定されます。また、APIキーに参照元を設定し、許可されたドメインからのみ使用できるように制限することもできます。

1. [開発者の認証情報を作成] ウィンドウで、有効期限日をクリックします。アクセス トークンの有効期限を最大 1 年後まで設定できます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_2.png" width="800px">

2. 参照元 URL でアクセス トークンを制限したい Web ドメインを設定します。これはセキュリティのために強く推奨されます。参照元の詳細については、[API key credentials](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/api-key-credentials/#referrers) をご覧ください。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_3.png" width="800px">

3. [次へ] をクリックします。

{{% notice tip %}}

アクセス トークンの有効期限と参照元 URL は、トークンを無効にしない限り変更できません。

{{% /notice %}}

### 権限の選択
API キーの認証情報を設定することで、アクセス トークンの権限を校正できます。アプリケーションでアクセス トークンを正常に機能させるためには、アプリケーションが使用するコンテンツやサービスにアクセスするための適切な権限が必要です。必要な権限を選択して、API キーのアクセス トークンに適用してください。

{{% notice note %}}

トークンに必要な権限は、アプリケーションに必要なコンテンツ、サービス、機能によって異なります。[チュートリアル](https://developers.arcgis.com/documentation/mapping-and-location-services/tutorials/)を行う場合は、そのアクセス トークンのセクションで必要な権限のリストを参照してください。

{{% /notice %}}

1. [開発者の認証情報を作成] の [権限] ウィンドウで利用可能な権限を参照します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_4.png" width="800px">

{{% notice note %}}

開発者の認証情報に権限が表示されない場合は、アカウントに適切な権限が設定されていない可能性があります。[前提条件](#前提条件)をご確認ください。  

{{% /notice %}}

アカウントの種類に応じて利用可能なロケーションサービスについては [List of privileges](https://developers.arcgis.com/documentation/security-and-authentication/reference/privileges/#list-of-privileges) をご参照ください。

2. アプリケーションに必要な権限を選択し、[次へ] をクリックします。

### アイテムの選択 (オプション)
アプリケーションが特定のプライベート アイテムへのアクセスを必要とする場合は、開発者の認証情報を設定してアクセスする必要があります。アイテム アクセス メニューでは、ポータルのコンテンツを参照し、API キーに特定のアイテムへのアクセス権限をを付与することができます。

1. トークンがアイテムへのアクセス権を必要としない場合は、[スキップ] をクリックします。
2. そうでない場合は、[アイテムへのアクセス権を付与] ウィンドウで、[アイテムの参照] をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_5.png" width="800px">

{{% notice note %}}

アイテムの参照が表示されない場合は、アカウントに適切な権限が設定されていない可能性があります。[前提条件](#前提条件)をご確認ください。  

{{% /notice %}}

3. アクセス権を与えたいアイテムを選択します。このメニューでは最大 100 件まで選択できます。

{{% notice warning %}}

一般的な権限 > フィーチャ > 編集などの特定の権限は、アカウントに関連するすべてのアイテムへのグローバルアクセスを許可します。このメニューを使用してアイテムへのアクセス権を設定すると、設定した権限が上書きされます。

{{% /notice %}}

4. [アイテムの追加] をクリックします。

### アイテムの保存
API キーの認証情報のプロパティを設定した後、API キーを新しいアイテムとして保存できます。

1. [開発者の認証情報を作成] ウィンドウで以下のプロパティを設定し、[次へ] をクリックします。
    * タイトル
    * フォルダー
    * タグ
    * サマリー

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_6.png" width="800px">

2. [サマリー] ウィンドウで、設定したプロパティ、権限、アイテム アクセス権を確認し、[次へ] をクリックします。

{{% notice note %}}

個人範囲の権限は、公開アプリケーションにおいてセキュリティリスクを伴うため、個人用の自動化スクリプトでのみの使用を推奨します。詳細については、[Privilege scopes](https://developers.arcgis.com/documentation/security-and-authentication/reference/privileges/#privilege-scopes) をご参照ください。  

{{% /notice %}}

### API キーのコピー

1. [開発者の認証情報を作成] > [API キーの生成] ウィンドウで、[今すぐ API キーを生成します。 キーをコピーして保存する準備ができました。] を選択します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_7.png" width="800px">

2. [次へ] をクリックします。
3. 表示されたウィンドウから API キーをコピーし、アプリケーションに貼り付けます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_8.png" width="800px">

{{% notice note %}}

APIキーのアクセス トークンの値にアクセスできるのはこの時だけです。再度アクセスすることはできません。新しいキーを取得するには、API キーのアイテムページを使ってキーを再生成する必要があります。

{{% /notice %}}

### 認証情報の管理 (オプション)

API キーのアイテムを作成した後、そのプロパティはアイテム詳細ページに移動していつでも管理できます。設定メニューでは、API キーの以下のプロパティを管理できます。
* セカンダリ API キーの生成 : 同じ認証情報で、同じ権限と新しい有効期限を持つセカンダリ API キーを生成できます。
* API キーの再生成 : API キーにアクセスできなくなった場合、新しい有効期限で再生成することができます。
* API キーの無効化 : API キーを無効にして、アプリケーションで機能しなくすることができます。
* 権限の編集 : API キーの認証レベルを調整するために、API キーの認証情報の権限を編集することができます。
* アイテムのアクセス権を編集 : API キーの認証情報がアクセス許可されているアイテムを編集することができます。
* 使用状況の表示 : API キーの使用状況を監視して、サービスの使用状況を追跡し、請求情報を表示することができます。詳しくは、[API key credentials](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/api-key-credentials/) をご覧ください。