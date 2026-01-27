+++
title = "住所リストのインポート"
description = "店舗等の住所データの取り込みの方法について学習します。"
weight = 5
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++

住所が格納された Excel / CSV ファイルをマッピングする (= ジオコーディング) 代表的な方法を 2 つご紹介します。

{{< callout type = "important" >}}

ジオコーディングでは、住所 1,000 件につき 40 クレジットが消費されます。（緯度経度の取り込みは、クレジットは消費しません。）

{{< /callout >}}


### 方法 1 : BA Web App 上でファイルを追加

BA Web App 上で、ウィザードに示された手順に沿って簡易的にジオコーディングする方法です。<br/>
インポート可能なファイル サイズに上限があり、ジオコーディングの詳細設定ができないなどの制限があります。

**手順**
- <a href="https://doc.arcgis.com/ja/business-analyst/web/import-file.htm" target="_blank" rel="noopener noreferrer">BA Web App 上でファイルを追加する方法</a>

### 方法 2: ArcGIS Online 上でデータを作成し BA Web App に追加

ArcGIS Online 上でジオコーディングを行ってから、BA Web App に追加する方法です。<br/>
インポート可能なファイル サイズの上限が大きくなり、ジオコーディングの詳細設定が可能、地図上から対話的に住所の修正が行えるなどの利点があります。

**手順**
1. BA Web App 右上の [アカウントの詳細] → [マイ プロフィール] をクリックし、開いたページ上部の [コンテンツ] タブをクリックします。
2. <a href="https://doc.esrij.com//online/users-guide/create-data/feature/file" target="_blank">ArcGIS Online 逆引きガイドの Excel やテキスト ファイルからフィーチャ レイヤーを作成したい</a>を参考にフィーチャ レイヤーを作成します。
3. BA Web App を開き、[マップ] タブの [データの追加] → [Web マップおよびレイヤー] をクリックします。
4. [Web マップおよびレイヤー] ウィンドウで [マイ コンテンツ] をクリックします。
5. 適宜レイヤー名などで検索をして、作成したレイヤーのサムネイルにカーソルを合わせ、[+ マップに追加] をクリックします。

{{< callout type = "info" >}}

**BA Web App に追加したフィーチャ レイヤーから商圏を作成する方法**

1. BA Web App 左上の [<プロジェクト名>] タブをクリックして、プロジェクト エクスプローラーを開きます。
2. プロジェクト エクスプローラー内の [Web マップおよびレイヤー] を展開し、追加したレイヤーを最後まで展開します。
3. 展開したレイヤ―の [...] → [レイヤーの設定] をクリックします。<br>{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/projExplorer.png" width="40%" >}}
4. [レイヤーの設定] ウィンドウで下記を設定し、[レイヤーの設定] をクリックします。
   1. アイテム名となるフィールド
   2. 追加するアイテム
   3. リング / 運転時間 / 徒歩時間いずれかの商圏<br>{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/Configlayer.png" width="30%">}}
{{< /callout >}}
