+++
title = "スマート マップ サーチで有望エリアの抽出・共有"
description = "スマート マップ サーチの利用方法を学びます。"
weight = 8
alwaysopen = false
draft = false
publishDate = 2022-04-01T00:00:00+09:00
+++

複数の変数を選択し、条件に一致する区画エリアを表示することのできる「スマート マップ サーチ」を利用して、以下の条件を満たすエリアを対話的な操作で抽出します。

* 20 歳代の人口が多い
* 独身世帯の比率が高い
* 借家比率が高い

## 解析範囲への移動

1. [マップ] タブ→ [住所または緯度/経度の入力] 左横のアイコンをクリック → [エリアの拡大] を選択します。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-1_24r2.png" width="300 px" >}}

2. [都道府県、市区町村、町丁・字等など] に「大阪市北区」と入力し、Enter キーを押します。
   
大阪市北区周辺にマップが移動しました。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-2.png" width="60%" >}}

## 絞り込み条件の設定
1. [マップ] タブ の [マップの作成] → [スマート マップ サーチ] をクリックします。
2. スマートマップ サーチのクイック ツアーを案内するダイアログが表示された場合は、[却下] をクリックします。
3. [スマート マップ サーチ] ダイアログで、[すべての変数の参照] をクリックします。
4. データ ブラウザーの「婚姻関係」カテゴリをクリックし、「2020 人口 未婚 (国勢調査)」にチェックを入れます。
5. 「住宅」カテゴリをクリックし、「2020 一般世帯数 民営借家 (国勢調査)」にチェックを入れます。
6. 「年齢」カテゴリをクリックし、[年代別人口] を選択し、「2020 人口 20歳代 (国勢調査)」にチェックを入れます。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/Select20s.png" width="80%" >}}

ここまでの操作で [選択した変数] に、３つの変数が追加されます。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/smm_selectedvars.png" width="60%" >}}


## 変数リストの保存

1. 右下の [リストの保存] をクリックします。
2. [リスト名] に「ターゲット層」と入力します。
3. [リストのアイコン] の [▼] → [形状とアイコン] から任意のアイコンを選択して、[保存] をクリックします。
   
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-3_24r2.png" width="60%" >}}

変数リストが保存されました。

{{< callout type = "important" >}}

よく使う変数の組み合わせを変数リストとして保存することで、スマート マップ サーチの [マイ リスト] タブからアクセスできます。

{{< /callout >}}

## エリアの絞り込み

1. データ ブラウザーで [適用] をクリックします。

マップ上に、色付きの区画ポリゴンが追加されるので、変数の範囲を設定し、ターゲット層が多く住むエリアを絞り込みます。

2. [スマート マップ サーチ] ダイアログで、「2020 人口 未婚」の最小値に「500」と入力し、Enter キーを押します。
3. 「2020 一般世帯数 民営借家」の [計算: 個数] をクリックして、[割合] を選択します。
4. 最小値を「50」と入力し、Enter キーを押します。
5. 同様の手順で「2020 人口 20歳代」を [割合] に変更して、最小値を「15」と入力し、Enter キーを押します。

さらに、解析の範囲を大阪市北区のみに限定します。

6. [区画] → [解析の範囲] の虫眼鏡マークをクリックし、[都道府県、市区町村、町丁・字等 など] に「大阪市北区」を入力します。
7. [27127 大阪市北区] が候補として表示されるので、選択します。

以上で、条件に合致する大阪市北区内の条件に合致するエリアを特定することができました。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-6.png" width="80%" >}}

## 結果の共有

### Excel へエクスポート

1. スマート マップ サーチの [結果] パネルで [テーブル] に切り替えます。
2. [結果] パネル上部の [Excel にエクスポート] をクリックします。
3. Excel ファイルを任意の場所に保存し、Excel ファイルを開きます。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-7.png" width="80%" >}}

スマート マップ サーチの結果を Excel にエクスポートすることができました。

### Web マップとして共有

1. [マップ] タブの [結果の共有] → [ArcGIS Web マップ] をクリックします。
2. [タイトル] に 「有望エリア」と入力します。
3. マップの共有範囲を [全組織] もしくはグループから選択します。
4. [マップ レイヤーを新しいホスト フィーチャ サービスにエクスポートします。] にチェックを入れ、[共有] をクリックします。
5. 共有が完了すると、表示されるポップアップ内の [ここをクリックしてマップにアクセス] をクリックします。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-8.png" width="30%" >}}

ArcGIS Online で、共有した Web マップのアイテム詳細ページが開きます。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/SmartMapSearch-9.png" width="60%" >}}

Web マップを共有することができました。Web マップは、Map Viewer などで開くことで、シンボルの変更やデータの追加、空間解析が可能です。
