+++
title = "ラベルを変更したい"
description = "マップ上のフィーチャにテキストを表示します。"
weight = 3
alwaysopen = false
publishDate = 2022-04-06T00:00:00+09:00
draft = false
author = "馬野"
+++

マップ上のフィーチャにテキストを表示します。

1. Map Viewer でレイヤーを含むマップを開くか、[マップにレイヤーを追加](/online/users-guide/map/set-map#レイヤーの追加)します。
1. [レイヤー] ウィンドウで、ラベルを適用するレイヤーを選択します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/label-Select-layer.png" title="レイヤーの選択" width=350" >}}

3.	[設定] ツールバーの [ラベル] をクリックします。
4.	[フィーチャのラベル作成] ウィンドウで、[ラベルの有効化] 切り替えボタンをオンにします。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/label-label.png" title="ラベル" width=300" >}}

{{< callout >}} 

使用する PC の画面サイズによって、[設定] ツールバーの [ラベル] などのツールが [その他] タブ内に隠れている場合があります。 

{{< /callout >}}

5.	[ラベル クラスの追加] をクリックした後、必要に応じて[ラベル フィールドの変更](#ラベル-フィールドの変更)、[ラベル フィルターの編集](#ラベル-フィルターの編集)、[ラベル スタイルの編集](#ラベル-スタイルの編集)等を行います。


### ラベル フィールドの変更
[ラベル フィールド] に設定されているフィールド名をクリックし、ラベルに使用する属性フィールドを選択します。


 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/label-field.gif" title="ラベル フィールド" width=500" >}}

  {{< callout >}}

属性フィールドの代わりに、Arcade で記述したカスタム属性式を使用できます。[式の使用] </> をクリックし、エディター ウィンドウを使用して式を作成します。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-labels-mv.htm)をご参照ください。

{{< /callout >}}

### ラベル フィルターの編集
[フィルター] の [ラベル フィルターの編集] をクリックします。[新しく追加] をクリックしてフィルターを設定します。 詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/apply-filters-mv.htm)をご参照ください。


 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/label-filter.gif" title="ラベル フィルター" width=500" >}}

### ラベル スタイルの編集
[ラベル スタイルの編集] をクリックします。フォント、テキスト サイズ、配置などのラベルのスタイルを変更します。 詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-labels-mv.htm)をご参照ください。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/label-style.gif" title="ラベル スタイル" width=500" >}}

 {{< callout >}}

ラベル クラスの名前を変更するためにはラベル クラス名の横にある [オプション] をクリックして [名前の変更] をクリックし、新しい名前を入力した後 [OK] をクリックします。
また、ラベル クラスを削除するにはラベル クラス名の横にある [オプション] をクリックしてから [削除] をクリックします。

{{< /callout >}}

6. ラベルの設定が終了したら、[フィーチャのラベル作成] ウィンドウを閉じます。