+++
title = "オフラインで参照するためのベースマップを配置"
description = "組織のタイルパッケージ、もしくは独自の航空写真や背景データを配置しベースマップとして利用します。"
weight = 3
alwaysopen = false
publishDate = 2023-03-31T00:00:00+09:00
draft = false
author = "馬野"
+++
オフライン調査のために、[オフライン ベースマップの設定](https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-map.htm#ESRI_SECTION2_4308BA6C95E543C1B209EBEB95A00452) を行うことができます。組織で共有されているタイルパッケージを使用、もしくは独自の背景データをパッケージ ファイルとして端末に配置することで Field Maps モバイル アプリ上で利用できます。ファイルは USB ケーブルやクラウド ドライブなどを介してコピーすることができ、オフライン環境でも利用可能です。パッケージ ファイルの作成には ArcGIS Pro が必要です。

### 組織のタイル パッケージを利用
Field Maps Web アプリ上で、組織で共有されているタイル パッケージをオフライン ベースマップとして設定することができます。
1. オフライン利用を行う Web マップを [Field Maps Web アプリで開きます](/fieldmaps/get-started/prepare/start/)。
2. [オフライン] タブをクリックします。
3. [ベースマップとタイル パッケージ] セクションを開き、[組織のタイル パッケージ] を選択します。
4. [参照] をクリックし、組織で共有されている任意のタイルパッケージを、[タイル パッケージの選択] から選択します。
5. [保存] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-organization.png" title="組織のタイル パッケージの選択" width="700" >}} 


### 独自のタイル パッケージを利用
独自の背景データをパッケージ ファイルとして端末に配置することで Field Maps モバイル アプリ上で利用できます。
#### パッケージ ファイルの作成
ArcGIS Pro で、下記のいずれかのパッケージ ファイルを作成します。

|  背景データの種類  |  作成するデータ  |  作成方法  |
| ---- | ---- | ---- |
|  **衛星画像、航空写真**  |  タイル パッケージ (\*.tpk、*.tpkx)  |  [マップ タイル パッケージの作成](https://pro.arcgis.com/ja/pro-app/latest/tool-reference/data-management/create-map-tile-package.htm)  |
|  **フィーチャ (区画など)** |  ベクター タイル パッケージ (*.vtpk)  | [ベクター タイル パッケージの作成](https://pro.arcgis.com/ja/pro-app/latest/tool-reference/data-management/create-vector-tile-package.htm)|

#### パッケージ ファイルの配置
利用するモバイル端末の OS や方法で手順が異なります。
- [iOS (iTunes)](#ios-itunes)
- [iOS (ファイル アプリ)](#ios-ファイル-アプリ)
- [Android](#android)

##### iOS (iTunes)

1. デバイスをコンピューターに接続します。
1. iTunes を開き、デバイスを選択します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-device.png" title="iTunes でデバイスの選択" width="250" >}} 

1. [ファイル共有] をクリックし、[Field Maps] を選択します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-fieldmaps.png" title="Field Maps セクション" width="450" >}} 

1. パッケージ ファイル (\*.tpk、\*.tpkx、*.vtpk) を [Field Mapsの書類] セクションにドラッグ & ドロップして追加します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-sideload.png" title="ファイルのサイド ロード" width="550" >}} 
1. [同期] をクリックします。
1. Field Maps モバイル アプリを再起動します。
1. 通常のマップまたは[オフライン マップで利用](/fieldmaps/get-started/offline/edit-sync)します。

##### iOS (ファイル アプリ)

1. パッケージ ファイルをクラウド ドライブ (iCloud、Dropbox など) にコピーします。
1. iOS 端末で、ファイル アプリを起動します。
1. パッケージ ファイルのアップロード先を参照します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-fileapp.png" title="パッケージ ファイルの参照" width="250" >}} 

1. 右上の […] → [選択] → コピーしたいファイルを選択し、下部のフォルダーのアイコンをタップします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-select.png" title="パッケージ ファイルの選択" width="250" >}} 

1. [このiPhone内] → [Field Maps] フォルダーを選択し、右上の [コピー] をタップします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-copy.png" title="パッケージ ファイルのコピー" width="250" >}} 
1. Field Maps モバイル アプリを再起動します。
1. 通常のマップまたは[オフライン マップで利用](/fieldmaps/get-started/offline/edit-sync)します。

##### Android

1. デバイスをコンピューターに接続します。
1. Windows エクスプローラーを開き、パッケージ ファイルを下記のフォルダーにコピーします。フォルダーが存在しない場合は作成します。  
*\Android\data\com.esri.fieldmaps\files\basemaps*

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/deploy-basemap-android.png" title="Android の場合" width="550" >}} 

1. Field Maps モバイル アプリを再起動、またはマップ一覧の画面を下にスワイプし表示を更新します。
1. 通常のマップまたは[オフライン マップで利用](/fieldmaps/get-started/offline/edit-sync)します。









