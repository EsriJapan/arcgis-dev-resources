+++
title = "データ可視化の手順（3D）"
description = ""
weight = 5
hidden = true
aliases = ["/tips/data-visualization-procedure-3d/"]
+++

ArcGIS Online が提供するシーン ビューアーを使用して、3D マップにデータを可視化する方法を紹介します。

1. [3D マップを作成したい](#3D マップを作成したい)
2. [シンボルを変更したい](#シンボルを変更したい)
3. [高さを表現したい](#高さを表現したい)

## 3D マップを作成したい

 シーン ビューアー → [新しいシーン] → [レイヤーの追加] → [シーンの保存]

ArcGIS Online などに公開されている Web サービスを、レイヤーとしてマップに追加し、様々なレイヤーを組み合わせて 3D マップを作成することができます。3D マップの保存には、コンテンツを作成する権限が必要です（権限を持っていない場合でも 3D マップは作成できますが、保存することはできません）。

1. シーン ビューアーを開きます。シーン ビューアーを開いた時点でベースとなる背景地図(ベースマップ)は自動的に表示されます。

2. [レイヤーの追加] をクリックします。

3. [レイヤーの検索]、[レイヤー URL の入力] いずれかのレイヤーの追加方法を選択します。

    <img src="http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-add-layer.png" width="200px">

それぞれのレイヤー追加方法は、以下の通りです。

### レイヤーの検索
1. [レイヤーの検索] ボックスにキーワードを入力し、[検索] をクリックします。  
2. 検索結果は下部のボックス内に表示され、[追加] をクリックします。

    <img src="http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-search-layer.png">

3. [完了] をクリックし、レイヤーの追加を終了します。

### レイヤー URL の入力
URL を指定して、ArcGIS Server Web サービスのレイヤーを追加することができます。

## シンボルを変更したい

 シーン ビューアー → [レイヤー] → [レイヤーの構成] → [スタイル]

シンボルの色や形を変更します。コンテンツを作成する権限を持っている場合に可能です。  
シンボルを変更できるのは、フィーチャ レイヤーまたはシーン レイヤーです。

1. シーン ビューアーの [レイヤー] が表示されていることを確認し、シンボルを変更したいレイヤーをクリックします。

2. [レイヤーの構成] が表示されます。レイヤーの種類により、設定できるシンボルが異なります。

### フィーチャ レイヤー（ポイント）のシンボル設定

3. [①表示するメイン属性を選択] ドロップダウン リストから、シンボルの設定を行う属性フィールドを選択します。  
属性値でシンボル設定をしない場合は、[<なし>] を選択します。

4. [②描画スタイルを選択] で、変更したい描画方法の [選択] をクリックします。既に選択されている描画スタイルは [オプション] と表示されます。
 ### 2D マーカー / 3D オブジェクト
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-feature-simple.png)
 すべてのフィーチャを同じシンボルで表現します。
 ### 2D タイプ / 3D タイプ
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-feature-type.png)
 樹木の種類、道路クラス、都道府県名など、属性のカテゴリごとにシンボルを割り当てて描画します。
 ### 2D 数と量/ 3D 数と量
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-feature-number.png)
 数値データをシンボルの色や大きさ、高さで表現します。データの数値が大きいほど、シンボルは大きく、高く表示されます。
 ※レイヤーが持つ属性フィールドのタイプに応じて選択できる種類が異なります。例えば、文字列型のフィールドのみで構成されるレイヤーでは、[種類] ドロップダウン リストでサイズや色の指定はできません。

### フィーチャ レイヤー（ライン/ポリゴン）のシンボル設定

3. [シンボル] ドロップダウン リストから [シンボルの変更] を選択します。

4. シンボルのタイプ（2D または 3D）、大きさ/高さ、色を設定します。

### シーン レイヤーのシンボル設定

3. [①表示するメイン属性を選択] ドロップダウン リストから、シンボルの設定を行う属性フィールドを選択します。  
属性値でシンボル設定をしない場合は、[<なし>] を選択します。

4. [②描画スタイルを選択] で、変更したい描画方法の [選択] をクリックします。既に選択されている描画スタイルは [オプション] と表示されます。
 ### 色
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-color.png)
 すべてのフィーチャを同じシンボルで表現します。
 ### タイプ
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-type.png)
 樹木の種類、道路クラス、都道府県名など、属性のカテゴリごとにシンボルを割り当てて描画します。
 ### 数と量
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-number.png)
 数値データをシンボルの色で表現します。
 ※レイヤーが持つ属性フィールドのタイプに応じて選択できる種類が異なります。例えば、文字列型のフィールドのみで構成されるレイヤーでは、[種類] ドロップダウン リストでサイズや色の指定はできません。

5.	[オプション] をクリックすると、シンボルの詳細な設定をすることができます。
 ### 2D マーカー / 3D オブジェクトの場合
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-feature-simple-option.png)
 [シンボル] - あらかじめ用意されているシンボルから形状を選択します。  
 [色] - シンボルの色を選択します。  
 [サイズ] - 大きさを設定します。固定値のほかに属性値をもとに大きさを指定することもできます。  
 [回転] - 属性値をもとに回転の角度を設定します。
 ### 2D タイプ / 3D タイプの場合
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-type-option.png)
 表からスタイルを変更したい値を選択し、[シンボル]、[色]、[サイズ] を設定します。  
 属性値をもとに、すべてのシンボルのサイズと回転を指定することも可能です。
 ### 2D 数と量/ 3D 数と量
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-feature-number-option.png)
 [スライダー] - スライダーの上部、下部のバーを動かして、最大 / 最小クラスの閾値を変更できます。また、数値をクリックして、直接入力することもできます。  
 [シンボル] - あらかじめ用意されているシンボルから形状を選択します。  
 [色] - 色のパターンなどを変更します。  
 [サイズ] - 最大 / 最小クラスに設定した値の大きさを設定します。  
 [回転] - 属性値をもとに回転の角度を設定します。
 ### 色の場合
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-color-option.png)
 [テクスチャ] - テクスチャのタイプを選択します。  
 [色] - シンボルの色を選択します。
 ### タイプの場合
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-type-option.png)
 表からスタイルを変更したい値を選択し、[テクスチャ]、[色] を設定します。  
 ### 数と量の場合
 ![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-symbol-scene-number-option.png)
 [スライダー] - スライダーの上部、下部のバーを動かして、最大 / 最小クラスの閾値を変更できます。また、数値をクリックして、直接入力することもできます。  
 [色] - 色のパターンなどを変更します。
6. 設定後、各パネルにおいて [完了] をクリックします。

## 高さを表現したい
シーン ビューアー → [レイヤー] → [レイヤーの構成] → [標高モード]
レイヤーに含まれる Z 値や、オフセットを定義して、グラフィックの高さを表現することができます。  

1. シーン ビューアーの [レイヤー] が表示されていることを確認し、高さを表現したいレイヤーをクリックします。
2. [レイヤーの構成] が表示されます。
3. [標高モード] でモードを選択し、必要に応じてオフセットを設定します。

    <img src="http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-elevationInfo.png">

### 標高モード
#### 地表
![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-elevationInfo-on-the-ground.png)
グラフィックは、地表を覆うように配置されます。  
グラフィックに含まれる Z 値は無視されます。また、オフセットを設定することはできません。
#### 地面を基準
![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-elevationInfo-relative-to-ground.png)
グラフィックは、地面を基準にした高さに配置されます。  
グラフィックに Z 値が含まれる場合、Z 値を使用して高さは表現されます。
#### シーンを基準
![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-elevationInfo-relative-to-scene.png)
グラフィックは、シーンを基準にした高さに配置されます。  
グラフィックに含まれる Z 値は無視されます。
#### 絶対高度
![](http://apps.esrij.com/arcgis-dev/guide/img/visualization/3d-elevationInfo-absolute-height.png)
グラフィックは、測地系を基準にした高さに配置されます。  
絶対高度は、各グラフィックの Z 値により決まります。[地面を基準] と似ていますが、[絶対高度] は地表の高さを無視します。  
※レイヤーの種類により、選択できるモードが異なります。例えば、シーン レイヤーでは、[絶対高度] 以外のモードは指定はできません。
### オフセット
オフセットは、すべてのグラフィックに高さを加えます。例えば、オフセットに 100 メートルを設定した場合、グラフィックは現在の高さから 100 メートル上に表示されます。
