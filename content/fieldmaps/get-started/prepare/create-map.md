+++
title = "Web マップの作成"
description = "Field Maps Web アプリを利用して、現地調査で使用するフィーチャ レイヤーおよび Web マップを作成します。"
weight = 2
alwaysopen = false
publishDate = 2024-03-25T00:00:00+09:00
draft = false
author = "角名"
+++


Field Maps Web アプリで現地調査の際に利用するフィーチャ レイヤーおよび Web マップを作成することができます。<br>
Web アプリの起動方法については 「[Field Maps Web アプリの利用](/fieldmaps/get-started/prepare/start/)」をご参照ください。

1. フィーチャ レイヤーの作成 <br>
   Field Maps Web アプリを開き、[＋ 新規マップ] を選択し、[新しいマップの作成] ページで [新しいレイヤーを使用して開始] をクリックします。詳細は「[Field Maps Web アプリの利用](/fieldmaps/get-started/prepare/start/)」をご参照ください。<br>
   レイヤー名およびレイヤー タイプを設定します。また、必要に応じて [＋] ボタンをクリックしてレイヤーを追加します。現地調査に必要なレイヤーの追加が完了したら [次へ] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/create-map-create-layer.png" title="フィーチャー レイヤーの作成" width="1300" >}}

    {{< callout >}}

    [新しいマップの作成] ページで [マップ テンプレートを使用して開始] を選択することによってマップとレイヤーの作成をより簡潔に行えます。
    マップ テンプレートには、ロジックや計算式、すぐに使えるポップアップなどのフォームが事前に定義されたレイヤーが含まれており、作成後、ニーズに合わせてマップとレイヤーをカスタマイズすることが可能です。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/create-map-template.png" title="マップ テンプレートの使用" width="500" >}}

    {{< /callout >}}


2. レイヤー設定 <br>
現地調査時に高度なデータ収集を行う場合は、以下の設定を有効化することができます。

    <ul>
        <li> [データ収集には高精度 GPS 受信機が使用されますか？] : GPS 受信機を使用して <a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/high-accuracy-data-collection.htm#ESRI_SECTION1_C992B4FE465A4AFAB98A4972E336E808" target="_self">GPS メタデータ</a>を自動収集したい場合 (ポイント レイヤーのみ)</li>
        <li> [3D 空間がモデル化、または分析されますか？] : <a href="https://support.esri.com/ja-jp/gis-dictionary/z-value" target="_self">Z 値</a>を収集したい場合</li>
        <li> [相対位置をリニア リファレンスに使用しますか？] : <a href="https://support.esri.com/ja-jp/gis-dictionary/m-value" target="_self">M 値</a>を収集したい場合</li>
        <li> [高度な設定] : 任意の座標系を設定したい場合</li>
    </ul>

    設定が完了したら [次へ] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/create-map-layer-setting.jpg" title="フィーチャ レイヤーの設定" width="700" >}}


3. 名前を付けてマップを保存<br>
マップおよびフィーチャ レイヤーのタイトルを設定します。また、保存先のフォルダーを指定することができます。<br>
マップやレイヤー名の設定が完了したら [マップの作成] をクリックし、Web マップを作成します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/create-map-title.jpg" title="マップの設定" width="700" >}}

    {{< callout >}}

    タイトルについて、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また、半角英数字およびアンダースコア (_) での入力を推奨します。

    {{< /callout >}}

    マップの作成が完了すると以下の [フォーム] 画面が開きます。以下の画面では編集したいフィールドを追加することができます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/create-map-app-configulation.png" title="Web アプリの構成" width="700" >}}

    フォームの構成については「[フォームの構成](/fieldmaps/get-started/prepare/build-form/)」、その他の構成については「[Web マップの構成](/fieldmaps/get-started/prepare/configure-map/)」をご参照ください。