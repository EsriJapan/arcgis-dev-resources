+++
title = "マップの作成"
description = "マップの作成を行います。"
weight = 3
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++

## <a href="https://doc.arcgis.com/ja/insights/latest/create/create-maps.htm" target="_blank">マップの作成</a>
<br>マップに可視化するためには位置情報が不可欠です。先の演習の最後に「従業員_新宿.Table」や「オフィス.Table」の [データ テーブル] を表示して、テーブル内に「住所」、「緯度経度」といった位置情報が格納されていることを確認しました。

今回は、従業員の居住地は「従業員_新宿.Table」の「緯度経度」フィールド、事業所の位置は「オフィス.Table」の「住所」フィールドを使用して可視化を行います。

1. 「従業員_新宿.Table」の右横にある [データセットのオプション] → <a href="https://doc.arcgis.com/ja/insights/latest/get-started/enable-locations.htm" target="_blank">[位置の有効化]</a> をクリックします。

2. 以下のようにパラメーターを設定して、[実行] をクリックします。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/CreateMap/EnableLocations1.png" title="パラメーター" width="20%">}}

- [位置情報の種類] : 座標 (デフォルト)
- [ X (経度)] : 経度
- [ Y (緯度)] : 緯度
- [空間参照]: 4326 ‐ GCS WGS 1984
- <a href="https://doc.arcgis.com/ja/insights/latest/get-started/enable-locations.htm" target="_blank">[同じフィーチャの繰り返し]</a> をオン


処理が完了すると、自動的に「従業員_新宿.Table」に [座標] フィールドが追加されます。

{{< callout >}}

座標または住所で位置を有効化した場合では、同じポイントのフィーチャはデフォルトで 1 つのフィーチャに集約されます。全てのポイント フィーチャを集約せずに維持するには、[位置の有効化] で [同じフィーチャの繰り返し] パラメーターをオンにする必要があります。

{{< /callout >}}

3. [座標] フィールドを選択し、右側のページにドラッグすると表示される [マップ] 領域でドロップすれば、従業員の居住地を示す <a href="https://doc.arcgis.com/ja/insights/latest/create/create-maps.htm" target="_blank">[マップ カード]</a> が作成されます。これで従業員の居住地を「緯度経度」を用いて、マップ上に可視化することができました。マップの識別を分かりやすくするために、左上の [カード 1 ] をクリックして、[従業員居住地] と変更します。

4. 「オフィス.Table」の [データセットのオプション] → [位置の有効化] をクリックします。

5. 以下のようにパラメーターを設定して、[実行] をクリックします。
   
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/CreateMap/EnableLocations2.png" title=パラメーター" width="20%">}}

- [位置情報の種類] : 住所
- [ジオコーディング サービス]: ArcGIS World Geocoding Service
- [国] : 日本
- [住所フィールド]: １ つ
- [住所] : 住所
- <a href="https://doc.arcgis.com/ja/insights/latest/get-started/enable-locations.htm" target="_blank">[同じフィーチャの繰り返し]</a> をオフ

{{< callout >}}

ArcGIS World Geocoding Service を利用して位置を有効化する際には、<a href="https://doc.arcgis.com/ja/insights/latest/administer/credits.htm" target="_blank">クレジット</a>を消費します。本演習では、0.12 クレジットを消費します。

{{< /callout >}}

処理が完了すると「オフィス.Table」に [住所] フィールドが追加されます。

6. [住所] フィールドを選択し、右側のページにドラッグすると表示される [マップ]  領域でドロップすると、事業所の位置を示す [カード 2] が作成されます。[カード 2] のテキスト上をクリックし、カード名を「事業所の位置」に変更します。これで事業所の位置を「住所」を用いて、マップ上に可視化することができました。

7. 左上にある [保存]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Save.png" title="保存" width="8%" style="all:initial;">をクリックしてワークブックを保存します。
