+++
title = "テクスチャーの適用"
description = "建物モデルにテクスチャーを貼り付けてより見栄えの良い物にします。"
Weight = 5
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷"
draft = false 
+++

## 概要
[高度なCGA]({{% ref "/cityengine/get-started/quickstart-tutorials/advanced-cga" %}} "高度なCGA") では区画を整理したり、屋根の種類を増やしたりして日本の住宅地に見られる戸建て住宅を模した形状を作成しましたが、今回はその仕上げとして、建物モデルにテクスチャーを貼り付けてより見栄えの良いものにします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/apply-texture/texture.png" title="テクスチャーの貼り付け" width="700" >}}

|演習|
|:--|
|・[テクスチャー画像の準備](#テクスチャー画像の準備)|
|・[テクスチャー貼り付け](#テクスチャー貼り付け)|
|・[今回作成した CGA](#今回作成した-cga)|

## テクスチャー画像の準備

テクスチャーに使用する画像は、サンプル データを使用すれば作るまでもありませんが、残念ながら、日本の住宅地の作成に適用できそうなものはあまりありません。<br>ESRIジャパンが作成した屋根と建物の外観 (ファサード) のテクスチャー画像を [ArcGIS Online のページ](https://ej.maps.arcgis.com/home/item.html?id=2148d9acfd2c45d8800c605ab641903c)よりダウンロードします。

ダウンロードが完了したら、Zip ファイルを 解凍し、CE2025_ZeroProject/assets に格納されている house フォルダーを MyProject プロジェクトの assets フォルダー の中にコピーしてください。<br>
また、CE2025_ZeroProject/rules フォルダーには参考用として [CGA の作成]({{% ref "/cityengine/get-started/quickstart-tutorials/create-cga" %}} "CGA の作成")から[テクスチャーの適用](#概要)で作成した CGA ルールのサンプル ファイルが格納されています。


{{< callout >}}

プロジェクトの存在するワークスペースは、インストール後、初めて CityEngine を起動したときに設定しています。<br>
使用しているワークスペースがどこにあるかわからない場合は、[Navigator] ウィンドウ でプロジェクト フォルダーを右クリック → [Properties] → [Resource] → [Location] に記述してあるパスを確認してください。

{{< /callout >}}


#### 屋根のテクスチャー
[Navigator] ウィンドウの中で MyProject プロジェクトの中の assets → house フォルダーを開きます。<br>
rooftile から始まる .jpg ファイルをダブル クリックして選択すると、プレビュー表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/apply-texture/roof-texture.png" title="屋根のテクスチャー" width="900" >}}

#### 建物前面のテクスチャー
同様に house フォルダーの house_texture… も確認します。<br>
これらは実際の家の写真を [Crop Image ツール](https://doc.arcgis.com/en/cityengine/latest/help/help-facade-wizard.htm)で正面から見た形に整形し、画像編集ソフトで壁などをきれいに塗りつぶすなどの加工をして作成しました。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/apply-texture/building-side-texture.png" title="建物全面のテクスチャー" width="900" >}}

#### テクスチャーの変数化
これらのファイルをランダムに選択して変数に格納するため、CGA の中の attr roofcolor = ・・・と attr wallcolor = ・・・の行を以下の 2 行で置き換えます。

```
const roof_texture_file = fileRandom("house/rooftile*.jpg")
const wall_texture_file = fileRandom("house/house_texture*.jpg")
```

#### 屋根の分解
屋根にテクスチャーを適用するための準備として、Roof ルールを以下のように書き換えます。<br>
comp(f) オペレーションを使用して屋根を要素分割し、屋根の上面のみを取り出して Rooftop ルールに送ります。<br>
Triangle は、切妻屋根の下の三角形の部分ですが、この後何のルールにも渡さないという事で、末尾に「.」を付けます。

```
Roof-->
    40%:
        roofGable(20,1,1)
        comp(f){vertical:Triangle.|horizontal:NIL|all:Rooftop}
    40%:
        roofHip(20,1)
        comp(f){horizontal:NIL|all:Rooftop}
    else:
        roofShed(10)
        comp(f){top:Rooftop|vertical:Triangle.|horizontal:NIL}
```

## テクスチャー貼り付け
モデル上の面へのテクスチャーの貼り付けは、基本的に setupProjection、texture、 projectUV という 3 つのオペレーションで行います。<br>
既に記載している Wall ルールを一旦削除した後、以下の 2 つのルールを CGA の末尾に追加します。

#### 屋根へのテクスチャー貼り付け

```
Rooftop-->
    setupProjection(0,scope.xy,10,10) #対象図形の xy 面に 10x10m のサイズでテクスチャー画像を並べ、これを UV セット 0 として設定する
    texture(roof_texture_file) #テクスチャーとして roof_texture_file に格納された画像 (パス) を使用する
    projectUV(0) #UV セット 0 のテクスチャーの貼り付けを実行する
```

#### 壁へのテクスチャー貼り付け

```
Wall-->
    setupProjection(0, scope.xy, scope.sx, scope.sy) #テクスチャーのサイズを対象図形のサイズと同じにする
    texture(wall_texture_file)
    projectUV(0)
```

{{< callout >}}

この記述では、建物の幅や高さにあわせて壁のテクスチャーが引き伸ばされます。<br>
それを防ぎたい場合は、setupProjection の第 3 引数、第 4 引数を屋根の場合のよう定数にします。

{{< /callout >}}

CGA が書けたら保存し、再度 [Scene] ウィンドウにて Blocks レイヤーを右クリック → [Select Objects] ですべての区画を選択後、モデルの生成 ([Generate models of selected shapes] ボタン) をしてみましょう。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/apply-texture/generate-model.png" title="モデルの再生成" width="700" >}}

だいぶ日本の住宅地っぽくなったのではないでしょうか？<br>
今回、作成したモデルは直方体の箱に屋根を付けただけのシンプルなものでしたが、テクスチャーを貼るだけでも一気にリアリティーが増します。<br>
対象図形の分割や UV セット、サイズ設定、マテリアル設定など、ここでは紹介しきれない機能がまだまだ豊富にあります。<br>
また、窓枠やバルコニーなど細部のモデリングもルールで記述することができます。

## 今回作成した CGA

```
attr Height = rand(5,10)
const roof_texture_file = fileRandom("house/rooftile*.jpg")
const wall_texture_file = fileRandom("house/house_texture*.jpg")

Lot-->
    offset(-2,inside)  #敷地外周を2m後退して庭を作る
    innerRectangle(edge) {shape : Footprint | remainder :NIL} #フットプリントの形状を長方形にする
Footprint-->
    case geometry.area() < 50: NIL #50平米より狭い場合は消去
    else: 
        extrude(Height)
        House
House-->
    comp(f){top: Roof | side: Wall} #シェープをトップ (屋根) とサイド (壁) に分割
Roof-->
    40%:
        roofGable(20,1,1)
        comp(f){vertical:Triangle.|horizontal:NIL|all:Rooftop}
    40%:
        roofHip(20,1)
        comp(f){horizontal:NIL|all:Rooftop}
    else:
        roofShed(10)
        comp(f){top:Rooftop|vertical:Triangle.|horizontal:NIL}
Rooftop-->
    setupProjection(0,scope.xy,10,10) #対象図形の xy 面に 10x10m のサイズでテクスチャー画像を並べ、これを UV セット 0 として設定する
    texture(roof_texture_file) #テクスチャーとして roof_texture_file に格納された画像 (パス) を使用する
    projectUV(0) #UV セット 0 のテクスチャー貼り付けを実行する
Wall-->
    setupProjection(0, scope.xy, scope.sx, scope.sy) #テクスチャーのサイズを対象図形のサイズと同じにする
    texture(wall_texture_file)
    projectUV(0)
```
