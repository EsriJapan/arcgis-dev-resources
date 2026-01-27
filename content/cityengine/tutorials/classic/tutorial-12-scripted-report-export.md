+++
title = "チュートリアル 12: スクリプトによるレポートのエクスポート"
description = "Python をベースにしたエクスポート機能を使ってCGA レポート変数を使用する方法を学習します。"
weight = 12
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
Python をベースにしたエクスポート機能を使用して [CGA](https://doc.arcgis.com/en/cityengine/latest/cga/cityengine-cga-introduction.htm) レポート変数を使用する方法を学習します。島の未来都市のシーンを使用して、シーン内に配置された散在しているインスタンスの情報をレポートにまとめ、シンプルなテキスト ファイルにインスタンス マップを生成します。このテキスト ファイルには、分散された建物インスタンスを任意のフォローアップ アプリケーションに、読み込むためのデータが含まれています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-0ABBFA13-C90D-4C3F-AD23-800425355FA.png" title=" " width="750" >}}

すべてのインスタンスに対し、次の値を出力します。

* アセットの識別子 (ファイル名)
* 3 軸の位置
* 3 軸の回転
* 3 軸のスケール

これらを以下の形式で書きます。

| nr | asset | xpos | xrot | xscale |
|:---|:---|:---|:---|:---|
|0 |scifi_building_9.obj |-529.4803009 |0 |1.051229466 |
|1 |scifi_building_17.obj |236.6141357 |0 |0.933861537 |
|2 |scifi_building_5.obj |499.4240112 |0 |1.256899709 |

このチュートリアルは、3 つのパートで構成されています。
* 最初に、既存の CGA ファイルを拡張し、汎用ルールでインスタンス建物を配置し、その建物に関する変数をレポートします。
* 次に、レポートされた変数をテキストファイルに書き込む Python スクリプトを作成します。
* 最後に、チュートリアルの Part: 1 で作成したルールを再利用して、追加のアセットについての変数をレポートおよびエクスポートします。

このチュートリアルでは、CGA 言語と Python スクリプトの基本知識が必要です。詳細は、[スクリプトベースのエクスポート](https://doc.arcgis.com/en/cityengine/latest/python/python-script-based-export.htm)を確認ください。

|演習|
|:--|
|・[Part 1: インスタンス建物の情報をレポート](#part-1-インスタンス建物の情報をレポート)|
|・[Part 2: レポートをエクスポートするためのスクリプト作成](#part-2-レポートをエクスポートするためのスクリプト作成)|
|・[Part 3: 追加のアセット情報のレポートとエクスポート](#part-3-追加のアセット情報のレポートとエクスポート)|

## Part 1: インスタンス建物の情報をレポート
Part 1 ではまず、レポート用に使用する外部 CGA ファイルを準備します。

### レポート用の汎用ルールを作成
レポート用の汎用ルールを作成するには、以下の手順に従ってください。
1. [[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウで Tutorial_12_Scripted_Report_Export チュートリアルフォルダーを展開します。
2. scenes フォルダー内の reportInstances_01.cej シーンをダブルクリックして、[[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウでシーンを開きます。
3. **[File] メニュー → [New …] → [CityEngine] → [CGA Rule File]** をクリックして、ルール ファイルを作成します。
4. ファイルの名前を instanceReporting.cga にします。

### 変換データのレポート
次に、レポートルールを構築します。

1. InstanceReport ルールを追加します。アセット識別子をレポートするために、ルール パラメーター [asset] が必要になります。
```
InstanceReport(asset) -->
	report("asset", asset)
```
2. スケールのレポート コマンドを追加します。
多くの場合、元のアセット サイズに対する相対的なスケールが必要となります。そのため、スコープ サイズだけをレポートするのではなく、アセットサイズで除算する必要があります。オリジナル アセット サイズは assetInfo () コマンドを使用して調べることができます。assetInfo (asset, “sx”) は x 軸方向のサイズを調べます。
```
report("xscale", scope.sx/assetInfo(asset, "sx"))
report("yscale", scope.sy/assetInfo(asset, "sy")) 
report("zscale", scope.sz/assetInfo(asset, "sz"))
```
3. 回転はワールド座標系でレポートする必要があります。したがって、convert() コマンドを使用して、ピボットの回転パラメーターを変換します。
```
report("xrot", convert(x, scope, world, orient, 0,0,0))
report("yrot", convert(y, scope, world, orient, 0,0,0))
report("zrot", convert(z, scope, world, orient, 0,0,0))
```
4. アセットのピボットと位置を確認します。
アセットを正しくインスタンス化するためには、使用されるアセットのピボットと位置に注意することが重要です。この例では、アセットのピボットは地面の中心にあり、ワールド原点に配置されています。
これをすることで、報告された位置がアセットのピボットに一致することが保証されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-D0F01A5D-D6A4-47C9-B055-5CD5C835C409-web.png" title=" " width="750" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-4B940896-B56C-47D8-822E-BA41F8F367DA-web.png" title=" " width="750" >}}
1. ワールド座標系に位置を変換します。
これで、必要なすべての値がレポートされました。
```
report("xpos", convert(x, scope, world, pos, scope.sx/2,0,scope.sz/2))
report("ypos", convert(y, scope, world, pos, scope.sx/2,0,scope.sz/2))
report("zpos", convert(z, scope, world, pos, scope.sx/2,0,scope.sz/2))
```
6. 不要なジオメトリが表示されないようにするために、レポート ルールの最後に NIL コマンドを追加します。instanceReporting_dist.cga ファイルを開いて、最終的なルールを確認します。
```
InstanceReport(asset) -->

	## report instance ID
	report("asset", asset)	
	
	## report scale values relative to asset
	report("xscale", scope.sx/assetInfo(asset, "sx"))
	report("yscale", scope.sy/assetInfo(asset, "sy")) 
	report("zscale", scope.sz/assetInfo(asset, "sz"))

	## report rotation in world coords
	report("xrot", convert(x, scope, world, orient, 0,0,0))
	report("yrot", convert(y, scope, world, orient, 0,0,0))
	report("zrot", convert(z, scope, world, orient, 0,0,0))

	## report position in world coords
	report("xpos", convert(x, scope, world, pos, scope.sx/2,0,scope.sz/2))
	report("ypos", convert(y, scope, world, pos, scope.sx/2,0,scope.sz/2))
	report("zpos", convert(z, scope, world, pos, scope.sx/2,0,scope.sz/2))

	NIL
```

### レポートルールの使用
次に、ルール ファイルを開き、準備したレポート ルールを使用します。
1. [rules] フォルダー内の instance_city_01.cga ファイルをダブルクリックして、[[CGA エディター](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)] ウィンドウでルール ファイルを開きます。
1. instance_city_01.cga ファイルの最初に、instanceReporting という識別子を含んだレポート ルール ファイルをインポートするため、次の一文を加えます。
```
import instanceReporting:"instanceReporting.cga"
```
3. InstanceReport ルールを建物ルールの最後に加えます。
アセットが生成されたことを確認するために、insert コマンドの後ろに終端ルールとして [asset] も追加します。
```
Building(asset) --> 
	s('1,0,'1) 
	i(asset) Asset.
	instanceReporting.InstanceReport(asset)
```
4. 建物を生成し、**[Inspector]** ウィンドウの **[Report]** タブを確認します。次の例のように表示されます。 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-633E1235-B475-4722-BE63-430FAF3BBEDC.png" title=" " width="500" >}}


## Part 2: レポートをエクスポートするためのスクリプト作成
ここでは、次に Python スクリプト ベースのエクスポートを使用して、準備したレポート データをエクスポートします。そのためには、Python スクリプトを作成する必要があります。詳細については、[スクリプトベースのエクスポート](https://doc.arcgis.com/en/cityengine/latest/python/python-script-based-export.htm)を確認ください。

### エクスポート レポート テンプレートに基づいたモジュールの作成
最初に、Python モジュールを作成します。
1. **[File] メニュー → [New …] → [Python] → [Python Module]** にあるテンプレートから新規 Python エクスポート スクリプトを作成します。
1. **[Source] フォルダー** の **[Browse…]** をクリックして [scripts] フォルダーを選択します。スクリプトの名前を [exportInstances] にします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-9D3AB2EC-0F16-4F88-AD60-D485CA05F3D5.png" title=" " width="500px" >}}
1. **[Finish]** をクリックして **[Template]** ダイアログ ボックスを開きます。
1. Module Export (Reporting) を選択して **[OK]** をクリックします。[exportInstances] モジュールを Python エディターで開きます。テンプレートには 4 つの関数が含まれていますが、このチュートリアルでは、finishModel() と finishExport() 関数のみが必要です。他の関数は削除しても構いません。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-5CBB3CA5-20C8-4B3C-98D1-A0C429C916A8-web.png" title=" " width="500px" >}}

### finishModel() からレポートデータにアクセス
次に、レポート変数にアクセスします。
1. finishModel() 関数の末尾に以下の行を追加します。現在処理されているシェープのレポート変数の配列にアクセスできます。[asset] はレポート変数の名前です。
 ```
model.getReports()['asset']
```
2. 生成されたすべてのシェープ (例えば空のグラウンド シェープや道路シェープなど) がインスタンスを持っているわけではないので、まずはレポート変数の 1 つである [asset] を使って、レポート データの有無を確認する必要があります。
 ```
if(model.getReports().has_key('asset')):
```
3. 報告されたデータ セットをループするために、次の行を追加します。生成された建物の CGA ルール を確認すると、いくつかのシェープが 1 つ以上のインスタンスを含んでいることが分かります。そのため、最初に [asset] 配列の長さを取得することで、シェープごとに報告されたデータ セットをループすることができます。テストとしてコンソールにレポート データ配列をプリントします。
 ```
l = len(model.getReports()['asset'])
for i in range(0,l): 
	print model.getReports()
```

### スクリプトをテストするために、コンソールに出力を表示
レポートデータの配列を Python コンソールに表示するには、次のようにします。
1. 少数の建物、または lot シェープを選択します。
1. **[File] メニュー → [Export Models]** をクリックして、[Choose formatfor model export] ダイアログ ボックスを開きます。
1. **[Script Based Exporter (Python)]** → **[Next]** をクリックします。
1. [scripts] フォルダー内の exportInstances.py を参照して選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-E0554A0D-2EFA-4CE0-AA52-5845DCB48F51.png" title=" " width="500" >}}
1. **[Finish]** をクリックしてエクスポートを実行します。
1. **[Window] メニュー → [Console]** をクリックして Python コンソールを開きます。
Python コンソールには以下のようなものが表示されます。**[コンソール]** ツールバーの **[Display Selected Console]** ドロップダウン メニューで出力コンソールを選択できます。
 ```
{'zpos': [-362.6108093261719], 'yrot': [-69.42008209228516], 'asset': ...
{'zpos': [-362.6108093261719], 'yrot': [-69.42008209228516], 'asset': ...
{'zpos': [-412.1033630371094], 'yrot': [165.30718994140625], 'asset': ...
```
### グローバル変数を追加
 processInstance () 関数を追加し、レポート値を処理して収集します。また、データを収集しインスタンスの数を追跡するための 2 つのグローバル関数 (finishModel 関数外で) を追加します。
 ```
# グローバル変数
gInstanceData = "" # 書き出される全データを収集するグローバル変数 (文字列)
gInstanceCount = 0 # 全インスタンスに番号を振るグローバル変数 (カウント)
```

### finishModel() 関数の更新
finishModel() 関数を次のスニペットに更新します。
 ```
# 生成後の各初期シェープに対して呼び出し
def finishModel(exportContextOID, initialShapeOID, modelOID):
	global gInstanceData, gInstanceCount
	model = Model(modelOID)
	if(model.getReports().has_key('asset')): # レポート データが存在する場合に t3d エントリのみ書き出し
		# モデルに対して複数のアセットが存在する場合があるのでループを使用する
		l = len(model.getReports()['asset'])
		for i in range(0,l):
			instanceData = processInstance(model.getReports(),gInstanceCount, i-1)
			gInstanceData = gInstanceData+instanceData
			gInstanceCount = gInstanceCount+1
```

### processInstance() 関数
report 変数をタブ区切りの文字列で返す processInstance() 関数を追加します。
 ```
# インスタンス情報をタブ区切り文字列で収集
def processInstance(reports, count, index):

	## asset 文字列からパスを削除
	asset = reports['asset'][index]
	asset = asset.rpartition("/")[2]

	## インスタンス マップ用の文字列を用意
	text  = "%d\t" % count;
	text += "%s\t" % asset;
	text += "%.3f\t%.3f\t%.3f\t" % (reports['xpos'][index],reports['ypos'][index], reports['zpos'][index])
	text += "%.3f\t%.3f\t%.3f\t" % (reports['xrot'][index],reports['yrot'][index], reports['zrot'][index])
	text += "%.3f\t%.3f\t%.3f\n" % (reports['xscale'][index], reports['yscale'][index], reports['zscale'][index])
	return text
```

### finishExport() 関数
finishExport() 関数を追加します。この関数は、すべてのシェープの生成が完了した後に呼び出されます。インスタンス マップを含むテキスト ファイルのファイル名を定義し、writeFile() 関数を呼び出します。
 ```
# すべての初期シェープが生成された後で呼び出される。
def finishExport(exportContextOID):
	global gInstanceData, gInstanceCount

	## 出力ファイルのパス
	file = ce.toFSPath("models")+"/instanceMap.txt"

	## 収集されたデータをファイルに書き出し
	writeFile(file, gInstanceData)
	print str(gInstanceCount)+"instances written to "+file +"\n"
```

### writeFile() 関数
writeFile() 関数を追加し、ヘッダー情報を追加して収集したレポート文字列をディスクに書き込みます。その後、exportInstances.py スクリプトを保存します。
 ```
# データ (ヘッダーと内容) を結合し、ファイルに書き出し
def writeFile(file, content):

	## ヘッダー文字列を準備
	head = "nr\tasset\txpos\typos\tzpos\txrot\tyrot\tzrot\txscale\tyscale\tzscale\n"

	## ヘッダーと内容を結合
	content = head + content

	## データをファイルに書き出し
	report = open(file, "w")
	report.write(content)
	report.close()
```

### 完成したスクリプトの実行
完成したスクリプトを実行し、エクスポート ファイルを作成します。
1. 建物のセット、または lot シェープを選択します。
1. **[File] メニュー → [Export Models...]** をクリックします。
1. **[Script Based Exporter (Python)] → [Next]** をクリックします。
1. **[Browse...]** をクリックし、exportInstances.py スクリプトを選択します。
1. **[Finish]** をクリックし、エクスポートを実行します。実行結果の instanceMap.txt ファイルは、[models] フォルダーに保存されます。
1. instanceMap.txt ファイルをダブルクリックして開きます。[scripts] フォルダー内の exportInstances_dist.py ファイルを開いて最終スクリプトを確認します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-604C2FB4-8E4A-4647-8576-BB607DC7AB5D-web.png" title=" " width="500px" >}}

{{< callout >}}

タブ区切りのテキストファイルに書く代わりに、任意の方法でレポート データを処理することができます。 例えば、インスタンスを作成する Maya 用の Mel スクリプトを書く、データベースに位置情報を書き込む、または独自の ASCII 形式で書くなどがあります。

{{< /callout >}}

## Part 3: 追加のアセット情報のレポートとエクスポート
レポート ルールを使用することで、CGA ルール セットにレポートおよびエクスポート用の追加インスタンス要素を拡張することができます。これにより、詳細なデータの報告とエクスポートが可能になります。

1. reportInstances_02.cej シーンと instance_city_02.cga ルールを開きます。
1. ズームをして、アーク形の未来的な橋に注目します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-6F29925C-88EF-4D55-B02F-00462A1D2475-web.png" title=" " width="500px" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-35823839-A8C1-400A-A381-936830ECAEFE.png" title=" " width="500px" >}}

1. instance_city_02.cga のルールで、Bridge ルールの一番下に instanceReport ルールを追加して、橋のアセットのインスタンス情報を instanceMap.txt ファイルにエクスポートします。
以前の instanceMap.txt ファイルが上書きされ、新しいファイルには橋のアセットのインスタンスも含まれています。reportInstances_03.cej シーンと instance_city_03.cga ルールを開いて、最終ルールが割り当てられたシェープを確認します。

 ```
Bridge --> 
	s(1,8,scope.sz+3.2) center(xz) 
	i(bridge_asset) 
	s(calcHeight2(scope.sx),calcHeight2(scope.sy),'1)
	Bridge.
	instanceReporting.InstanceReport(bridge_asset)
```
4. ルールを保存します。
1. シーン内のいくつかのストリートを含む新しい選択を行います。
1. エクスポートを再度実行します。
1. instanceMap.txt ファイルを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-12-scripted-report-export/GUID-95D9FEA6-55FF-4FE9-A7FD-0BC78EFB61B5-web.png" title=" " width="500px" >}}
以前の instanceMap.txt ファイルは上書きされ、新しい instanceMap.txt ファイルには、橋のアセットのインスタンスも含まれます。
<br><br>reportInstances_03.cej シーンと instance_city_03.cga ルールを開いて、最終ルールが割り当てられたシェープを確認します。

このチュートリアルでは、次のことを学びました。
<br>・ インスタンス化されたアセットの情報をレポートする方法
<br>・ レポートをテキストファイルにエクスポートできるスクリプトを作成する方法
<br>・ スクリプトベースのエクスポーターを通じてエクスポートスクリプトを実行する方法

CityEngineの学習を続けるには、[CityEngine チュートリアル カタログ](https://doc.esrij.com/cityengine/tutorials/)をご覧ください。
