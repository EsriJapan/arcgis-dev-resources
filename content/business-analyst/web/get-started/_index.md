+++
title = "スタートアップ ガイド"
description = "BA Web and Mobile Apps のご利用を開始する方のためのガイドです。"
weight = 1
alwaysopen = false
+++

ArcGIS Business Analyst Web and Mobile Apps (以降「BA Web and Mobile Apps」) のセットアップを行います。

## 動作環境

最新の動作環境は以下をご確認ください。
- [ArcGIS Business Analyst Web App の動作環境](https://doc.arcgis.com/ja/business-analyst/web/system-requirements.htm)
- [ArcGIS Business Analyst Mobile App の動作環境](https://doc.arcgis.com/ja/business-analyst/mobile/system-requirements.htm)

## セットアップ

### 1. ArcGIS Online の設定

はじめに、「<a href="/online/" target="_blank">ArcGIS Online スタートアップ ガイド</a>」を参考にベースとなる ArcGIS Online のセットアップを行います。

### 2. (Advanced の場合) アドオン ライセンスの割り当て

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/licenses-assign-image_24r2.png" width="50%" title="">}}

BA Web and Mobile Apps Advanced を利用する場合 ArcGIS Online ユーザーに対して、アドオン ライセンスを割り当てます。アドオン ライセンスは Creator 以上の[ユーザー タイプ](https://www.esrij.com/products/arcgis-online/plan/organization/)に割り当てることができます。

**管理者**の方は組織サイトから各メンバーにライセンスの割り当てを行ってください。ライセンスの割り当て方法は、<a href="/online/get-started/administer/license/assign/" target="_blank">ArcGIS Online スタートアップ ガイド「ライセンスの割り当てと解除」</a>をご確認ください。

{{< callout type="important" >}}

BA Web and Mobile Apps Advanced のアドオン ライセンスは、[アドオン ライセンス] ページの [アプリケーション] グループに格納されています。

{{< /callout >}}

{{< callout type ="warning" >}}

BA Web and Mobile Apps Standard は、割り当てなしで利用できます。利用できる機能の差異については [詳細](https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/compare-ba-function.pdf)をご確認ください。

{{< /callout >}}

### 3. BA Web App の初期設定

次に、BA Web App を快適に利用するための初期設定を行います。

#### アプリの起動

1. BA Web and Mobile Apps のライセンスが割り当てられているアカウントで、ArcGIS Online 組織サイトにサイン インします。
2. 右上の [アプリ] ランチャーをクリックして、一覧から [Business Analyst] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/launch-ba-web-app.png" width="60%" title="">}}

3. BA Web App が起動します。初回起動時には、プロフィール画像の設定ダイアログが表示されます。設定を行う場合は [プロフィール画像の追加] をクリックし、画像を選択してください。設定しない場合は、[このステップをスキップ] をクリックします。
4. 次に、プロジェクトの作成を求められるので、[プロジェクトの作成] をクリックします。
5. [プロジェクトの設定] ダイアログが開いたら、任意のプロジェクト名を入力し、[作成] をクリックします。
    {{< callout type="info" >}}

    初回起動時は、ガイド ツアー「プロジェクトの作成」が自動で開始されます。表示されるポップアップ ガイドに従って、プロジェクトを作成してください。

    {{< /callout >}}
6. プロジェクトの作成が完了すると、[ホーム] タブに切り替わり、先ほど作成したプロジェクトが追加されます。
   {{< callout type="info" >}}

      本アプリケーションで作成したデータやマップは、すべてプロジェクトに格納されます。

    {{< /callout >}}

#### アプリの初期設定

日本を対象に解析するにあたり、お勧めするアプリの初期設定について説明します。初期設定は、アプリ右上の [初期設定] ボタンをクリックすると開きます。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/open-preference_24r2.png" title="">}}

{{< callout type="info" >}}

初期設定の変更した後、[保存] することで、次回以降、起動時に自動的にデフォルト設定として適用されます。元の設定に戻すには、[デフォルトに戻す] をクリックし、[保存] をクリックします。

{{< /callout >}}

**解析する国の選択**

解析対象の国や地域を設定します。
- [一般] タブの [設定] を開き、[オプション] の「デフォルトの国」のプルダウン リストから、「日本」を設定します。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/setting-country_24r2.png" width="60%" title="" >}}

**データ ソース**

解析に使用するデータ ソースを選択します。一部の国では、複数のデータ ソースから選択できます。日本は、以下の 2 つを選択可能です。選択中のデータ ソースは [選択済み] と表示されます。

|データの種類|説明|
|:--|:--|
|Esri ジャパン|ESRIジャパンが提供するデータ ソースです。人口や世帯、年収・消費などに関する約 2,650 の変数を利用できます。|
|Standard|ドイツの MBR 社 (Michael Bauer Research GmbH) が提供するデータ ソースです。約 120 の変数を利用できます。|

- [一般] タブの [設定] を開き、[オプション] の [データ ソース] のドロップダウン リストから [Esri ジャパン] を選択し、[適用] をクリックします。

**単位**

距離の計測単位を設定します。
- [一般] タブの [設定] を開き、[オプション] の [デフォルトの単位] のドロップダウン リストから、「**キロメートル**」を選びます。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/setting-unit_24r2.png" width="60%" title="">}}


**背景地図**

マップに表示させたり、インフォグラフィックスやレポートに表示させたりするためのデフォルトの背景地図を設定します。
- [一般] タブの [設定] を開き、[背景地図] の一覧から任意の地図を選択します。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/setting-basemap_24r2.png" width="60%" title="">}}

{{< callout type="info" >}}

マップを選択すると、[デフォルトのマップ位置] のマップが選択した背景地図に切り替わります。マップは拡大・縮小することができ、プレビューすることができます。

{{< /callout >}}

**自動保存**

自動保存を有効にすると、サイン アウトするか、ブラウザーを閉じた時点でのマップが保存され、次回起動時に前回のマップを表示することができます。
- [一般] タブの [設定] を開き、[自動保存] トグルをオンにします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/setting-auto-save_24r2.png" title="">}}

{{< callout type="important" >}}

  以下は、**管理者ロール**を持つユーザーのみ設定できます。

{{< /callout >}}

**レポートとインフォグラフィックス**

組織の[メンバー ロール](https://doc.arcgis.com/ja/arcgis-online/administer/member-roles.htm)に応じて、BA Web App で利用できる[インフォグラフィックス](https://business-map.esrij.com/glossary/4328/)やクラシック レポートを変更します。

データ ソースを「Esri ジャパン」に設定している場合、デフォルト設定では [インフォグラフィックスの実行] ツール等で、英語と日本語のテンプレートが両方表示されます。日本語のテンプレートのみを表示するには、以下の設定を変更します。

1. [組織] タブ → [レポートとインフォグラフィックス] を開きます。
2. [ロールの選択] で設定を変更するロールを選択します。
3. [インフォグラフィックス] タブを選択し、[標準インフォグラフィックス] から、英語名のテンプレートのチェックを外します。
4. 複数のロールに対して設定を行う場合は、[ロールの選択] でロールを切り替え、同様の操作を行います。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/setting-infographics.png" width="60%" title="">}}

{{< callout type="info" >}}

  [ロールのプレビュー] をクリックすると、変更内容を反映したアプリの操作画面をプレビューすることができます。
[レポート] タブ → [レポートの実行] メニュー → [インフォグラフィックスの実行] をクリックすると、テンプレートの選択画面が開きます。

{{< /callout >}}

**ガイド ツアー**

BA Web App では、各ツールの操作をレクチャーする機能「[ガイド ツアー](https://doc.arcgis.com/ja/business-analyst/web/guided-tours.htm)」を利用できます。大半のガイド ツアーは設定を行うことなく実行できますが、以下のツアーを日本国内で実行するには設定変更が必要です。
- ArcGIS Living Atlas から Web マップ レイヤーを追加
- レポートおよび解析で使用するカスタム データの設定

{{< callout type="important" >}}

デフォルトの設定のままの場合、ツアーを実行するためには解析対象の国をアメリカに変更する必要があります。

{{< /callout >}}

1. [組織] タブの [ガイド ツアー] を開きます。
2. ガイド ツアーを行う国として、「日本」を指定します。
3. [レイヤーの参照] をクリックして [レイヤーの選択] ダイアログを開き、検索ボックス内に「CO2排出量」と入力して検索します。
4. 検索結果に「CO2排出量 市区町村別（2019 年）」が表示されるので、アイコン上にカーソルを当て、[追加] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/get-started/setting-guided-tour.png" width="60%" title="">}}

以上で、BA Web App のセットアップが完了しました。

### BA Mobile App の設定 (オプション)

スマートフォンなどのモバイル端末を利用して解析を行う場合は、端末に BA Mobile App をインストールし、起動および初期設定を行います。

#### アプリのインストール

使用する端末の OS に応じて、[App Store](https://apps.apple.com/jp/app/arcgis-business-analyst/id936839636) または [Google Play](https://play.google.com/store/apps/details?id=com.esri.bao.baomobile) からアプリケーションをインストールします。

#### アプリにサイン イン

1. BA Mobile App を起動し、[ArcGIS Online にサイン イン] をタップします。
2. BA Web and Mobile Apps のライセンスが割り当てられている ArcGIS Online アカウントで、サイン インします。
3. サイン インが完了すると、マップが表示されます。これで、解析を開始するための準備が整いました。

#### アプリの初期設定

アプリ左上の [オプション メニュー] → [設定] から、アプリの初期設定を変更できます。詳細は BA Mobie App の[ヘルプ ページ](https://doc.arcgis.com/ja/business-analyst/mobile/set-mobile-app-preferences.htm)をご確認ください。

以上で、BA Web and Mobile Apps のセットアップはすべて完了です。