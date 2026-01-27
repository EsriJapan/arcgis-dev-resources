+++
title = "Web マップの構成"
description = "Field Maps Web アプリを利用して、現地調査で使用する Web マップの構成を設定します。"
weight = 4
alwaysopen = false
publishDate = 2023-11-27T00:00:00+09:00
draft = false
author = "角名"
+++

「[Web マップの作成](/fieldmaps/get-started/prepare/create-map/)」で作成したマップに対して、各タブで詳細な設定を行います。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/configure-map-app.png" title="Web アプリの構成" width="45%" >}}


<ol>
    <li>概要</li>
        作成した Web マップの概要が表示されます。
    <li>フォーム</li>
        モバイル アプリ利用者が調査項目の確認、入力、更新を行う画面を設定します。
        <br>詳細は「<a href="/fieldmaps/get-started/prepare/build-form/" target="_self">フォームの構成</a>」をご参照ください。
    <li>ジオフェンス</li>
        ジオフェンスを設定します。設定することで以下の機能が利用可能です。
        <ul>
            <li>位置情報アラート: エリア内の出入りを検知して、メッセージを送信します。</li>
            <li>位置情報の共有: エリア内の出入りを検知して、位置情報の共有を有効化または無効化します。</li>
        </ul>
        詳細は<a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-map.htm#ESRI_SECTION1_E8B0E2C111E94ED2A3609A5DEE40C779" target="_self">ヘルプ</a>をご参照ください。
    <li>オフライン</li>
        モバイル アプリ利用者がオフライン環境で使用できる機能を設定します。
        <br>詳細は「<a href="/fieldmaps/get-started/offline/" target="_self">オフライン利用</a>」をご参照ください。
    <li>アプリの設定</li>
        より細かなアプリの設定をします。具体的には、取得する GPS などの位置情報の精度やアップロードする添付ファイルのサイズ制限などを行うことができます。
        <br>詳細は<a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-map.htm#ESRI_SECTION2_FAF7A6B4C41E417989359254DC794F27" target="_self">ヘルプ</a>をご参照ください。
    <li>共有</li>
        作成した Web マップの共有設定をします。共有レベルの設定や共有オプションとして QR などを使用できます。
        <br>詳細は<a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-map.htm#ESRI_SECTION1_6703B3048FFB46D9A5581F45D9A31D9D" target="_self">ヘルプ</a>をご参照ください。
    <li>開く</li>
        Map Viewer にアクセスして、ポップアップやシンボルの設定ができます。
</ol>