+++
title = "API キーの取得"
description = "アプリケーションを公開するために必要な API キーを取得する手順について紹介します。"
Weight=2
aliases = ["/get-api-key/"]
+++

出典：Security and authentication guide - [Tutorial: Create an API key](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/tutorials/create-an-api-key/location-platform/)

APIキーの認証情報を使用してAPIキーを作成し、管理する方法を学びます。

## API キーとは
API キーは、ArcGIS のセキュアなサービス、コンテンツ、および機能へのアクセスをアプリケーションに許可する、長期間のアクセス トークンです。API キーは、ポータルでホストされているアイテムの一種である API キーの認証情報を使用して生成されます。API キーの認証情報には、API キーを生成し、その権限や有効期限などのプロパティを管理するための設定が含まれています。 API キーの認証情報を作成し、アプリケーションで API キーを使用するプロセスは、API キー認証として知られています。

このガイドでは、APIキーの認証情報を作成し、以下のことを行う方法を説明します。
* 長期的な API キーを生成し、アプリケーションに保存
* API キーが ArcGIS のサービス、コンテンツ、および機能にアクセスできる権限の設定
* API キーの有効期限と参照元 URL の設定
* API キーの認証情報のアイテムページを使用した、API キーの管理

このガイドでは、ロケーション サービスにアクセスできる公開アプリケーション用の API キーの作成に焦点を当てています。
API キーの詳細については [Introduction to API key authentication](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/) (英語) をご参照ください。

## 前提条件
1. ArcGIS Location Platform アカウント、ArcGIS Online アカウント、ArcGIS Enterprise アカウントのいずれかが必要です。ArcGIS Online アカウントおよび ArcGIS Enterprise アカウントの場合は、アカウントに適切なユーザー タイプとロールが設定されている必要があります。詳細については、[製品およびアカウントの要件](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/#product-and-account-requirements) を参照してください。
2. API キーに割り当てる権限を把握する必要があります。割り当てられた権限により、アプリケーションは特定の ArcGIS サービスおよびリソースにアクセスできるようになります。詳細は [Privileges](https://developers.arcgis.com/documentation/security-and-authentication/reference/privileges/) を参照してください。

## API キーの作成手順

### ポータルにサイン イン

APIキーの認証情報を含むアイテムの作成と管理にはポータルを使用します。

#### ArcGIS Location Platform
1. ブラウザーで [https://location.arcgis.com](https://location.arcgis.com) にアクセスし、ArcGIS Location Platform アカウントでサイン インします。ダッシュボードで「My portal」をクリックして、ポータルに移動します。

#### ArcGIS Online
1. ArcGIS Online アカウントで[ポータル](https://www.arcgis.com/index.html)にサイン インします。

#### ArcGIS Enterprise
1. ブラウザーで、ArcGIS Enterprise ポータルにアクセスし、ArcGIS Enterprise アカウントでポータルにサイン インします。


### API キーの作成

1. ポータルで、[コンテンツ] > [マイ コンテンツ] > [新しいアイテム] をクリックします。
2. [開発者の認証情報] > [API キーの認証情報] を選択し、[次へ] をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_01.png" width="800px">

{{< callout >}}

ArcGIS Online アカウントの場合は、アカウントに管理者権限または API キーの生成権限を持つカスタム ロールが設定されている必要があります。詳細については、[ロールに付与される権限](https://doc.arcgis.com/ja/arcgis-online/administer/privileges-for-roles-orgs.htm) を参照してください。

{{< /callout >}}

### アプリケーションの種類を選択
このメニューでは、開発中のアプリケーションの種類に合わせて API キーの認証情報を設定できます。このメニューの設定によって、次の手順で選択可能な権限が決まります。

1. [これらの認証情報はどこで使用しますか？] メニューで、[パブリック アプリケーション] を選択します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_02.png" width="800px">

{{< callout type="warning">}}

公開アプリケーションを構築していない場合は、代わりにこのメニューにある「プライベート アプリケーション」のオプションのいずれかを選択してください。これらのオプションでは、「一般」および「管理」カテゴリの下にある追加の権限へのアクセスが可能になりますが、公開アプリケーションに組み込むべきではありません。

{{< /callout >}}

2. [次へ] をクリックします。

### アイテムのアクセス権の選択 (オプション)
アプリケーションが特定のプライベート アイテムへのアクセスを必要とする場合は、開発者の認証情報を設定してアクセスする必要があります。アイテムのアクセス権 メニューでは、ポータルのコンテンツを参照し、API キーに特定のアイテムへのアクセス権限をを付与することができます。

1. トークンがアイテムへのアクセス権を必要としない場合は、[アイテムへのアクセスなし] を選択し、[次へ] をクリックします。
2. そうでない場合は、[特定のアイテムへのアクセス権を付与] を選択します。
3. アクセス権を付与したいアイテムを選択します。このメニューでは最大 100 件まで選択できます。
4. [次へ] をクリックします。

{{< callout type="warning">}}

アプリケーションで、機密情報を含むデータ サービスにアクセスする必要がある場合は、他の[認証方式](../security)を使用してください。

{{< /callout >}}

### 権限の選択
API キーの認証情報を設定を変更することで、生成される API キーの権限を構成できます。API キーをアプリケーションで機能させるためには、アプリケーションが使用するコンテンツやサービスにアクセスするための適切な権限が必要です。このメニューでアプリケーションに必要な権限を選択してください。

{{< callout >}}

API キーに必要な権限は、アプリケーションに必要なコンテンツ、サービス、機能によって異なります。[チュートリアル](https://developers.arcgis.com/documentation/mapping-and-location-services/tutorials/)を行う場合は、必要な権限の一覧を参照してください。

{{< /callout >}}

1. [開発者の認証情報を作成] の [権限] ウィンドウでアプリに必要な権限を選択します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_03.png" width="800px">

{{< callout >}}

権限の一覧は [Privileges](https://developers.arcgis.com/documentation/security-and-authentication/reference/privileges) をご参照ください。

{{< /callout >}}

2. [次へ] をクリックします。

### 有効期限と参照元 URL の設定
API キーの認証情報は、API キーと呼ばれる長期間のアクセス トークンを生成します。API キーは最大 1 年間有効で、有効期限は生成時に設定されます。また、APIキーに参照元を設定し、許可されたドメインからのみ使用できるように制限することもできます。

1. [開発者の認証情報を作成] ウィンドウで、[有効期限日] をクリックします。アクセス トークンの有効期限を最大 1 年後まで設定できます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_04.png" width="800px">

2. [参照元 URL] でアクセス トークンを制限したい Web ドメインを設定します。これはセキュリティのために強く推奨されます。参照元 URL の詳細については、[API key credentials](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/api-key-credentials/#referrers) をご覧ください。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_05.png" width="800px">

3. [次へ] をクリックします。

{{< callout >}}

アクセス トークンの有効期限と参照元 URL は、トークンを無効にしない限り変更できません。

{{< /callout >}}


### アイテムの保存
API キーの認証情報のプロパティを設定した後、API キーを新しいアイテムとして保存します。

1. [開発者の認証情報を作成] ウィンドウで以下のプロパティを設定し、[次へ] をクリックします。
    * タイトル
    * タグ
    * サマリー

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_06.png" width="800px">

2. [サマリー] ウィンドウで、設定したプロパティ、権限、アイテムのアクセス権を確認し、[次へ] をクリックします。

{{< callout type="warning">}}

この認証情報によって生成される API キー アクセス トークンにより、ここに記載されている権限へのアクセスが許可されます。アイテムが選択されている場合は、それらに機密情報や個人情報が含まれていないことを確認してください。API キーのローテーション、有効期限、参照元 URL に関しては、セキュリティーの[ベストプラクティス](https://developers.arcgis.com/documentation/security-and-authentication/security-best-practices/) に従ってください。

{{< /callout >}}

### API キーのコピー

1. [開発者の認証情報を作成] > [API キーの生成] ウィンドウで、[今すぐ API キーを生成します。 トークンをコピーして保存する準備ができました。] を選択します。
後で API キーを生成する場合は、アイテム詳細ページから生成できます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_07.png" width="800px">

2. [次へ] をクリックします。
3. 表示されたウィンドウから API キーをコピーし、アプリケーションに貼り付けます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/get-api-key/create_apikey_08.png" width="800px">

{{< callout >}}

APIキーのアクセス トークンの値にアクセスできるのはこの時だけです。再度アクセスすることはできません。新しいキーを取得するには、API キーのアイテムページを使ってキーを再生成する必要があります。

{{< /callout >}}