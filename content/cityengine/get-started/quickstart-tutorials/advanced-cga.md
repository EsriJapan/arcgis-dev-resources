+++
title = "高度な CGA"
description = "日本の戸建て住宅のような感じにするために、区画と CGA ルールを改良します。"
Weight = 4
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷"
draft = false 
+++

## 概要
[CGA の作成]({{% ref "/cityengine/get-started/quickstart-tutorials/create-cga" %}} "CGA の作成")で作成したモデルの区画や建物の形状を整え、日本の戸建て住宅のような感じにするために、区画と CGA ルールを改良します。  

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/advanced-cga/advanced-cga-intro.png" width="900">}}  
<br>

|演習|
|:--|
|・[区画の調整](#区画の調整)|
|・[フットプリントの生成](#フットプリントの生成)|
|・[分岐の使用](#分岐の使用)|
|・[今回作成した CGA](#今回作成した-cga)|

[CGA の作成]({{% ref "/cityengine/get-started/quickstart-tutorials/create-cga" %}} "CGA の作成") での CGA ルールは以下のような記述になっています (以下のコードをコピー & ペーストして利用することもできます。)  
「#」 以下はコメント文ですので実際には書く必要はありません。

```
attr Height = rand(5,20)  #5~20m の間でランダムに高さを設定
@Color
attr roofcolor = listRandom("#ff7f50;#9acd32;#ff4500")
@Color
attr wallcolor = listRandom("#ffff00;#00ffff;#dda0dd")
  
Footprint-->
    extrude(Height) #[Height] 属性に基づいて立ち上げ
    House 
House-->
    comp(f){top: Roof | side: Wall} #シェープをトップ (屋根) とサイド (壁) に分割
Roof-->
    roofGable(20,1,1) #Gable (切妻型) の屋根を設定
    color(roofcolor)
Wall-->
    color(wallcolor)
```

## 区画の調整
CityWizard のデフォルト設定で作成された区画は、日本の戸建て住宅としては大きすぎるので、各区画の面積が 100 ～ 150 平方メートルになるように設定します。  
1. [Scene] ウィンドウで Streetnetwork レイヤーを右クリックし、[Select Objects] を選択します。
2. [Inspector] ウィンドウで [Block] タブを開き、[Subdivision Type] を「Recursive Subdivision」に変更します。
   また、[lotAreaMin] に「100」、[lotAreaMax] に「150」を入力します。  

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/advanced-cga/advanced-cga-block2.png" title="区画のパラメーター" width="500">}}  

## フットプリントの生成
現状、生成されるモデルは形が少しいびつだったり、まっすぐ立ち上がっていなかったり、家と家の間に全く隙間がなかったりと不自然な点がありますので、区画からフットプリント (建物の 2 次元形状) を生成しつつ、そういった点も改善してみましょう。  

まず、House_rule.cga で定義されている建物の高さ (Height 属性) のデフォルト値が戸建て住宅に見合うように、5 ～ 10 メートルの間のランダム値になるように変更します。  

```
attr Height = rand(5,10)
```
また、以下の Lot ルールを Footprint ルールの上に追加します。
やや高度なものを使っていますが、ここでは体験ということであまり深く考えずにこの通りに書いてください。

```
@StartRule  #以下の「Lot」ルールをスタート ルールとする
Lot-->
    offset(-2,inside)  #敷地外周を2m後退して庭を作る
    innerRectangle(edge) {shape : Footprint | remainder :NIL} #フットプリントの形状を長方形にする
```

各オペレーション (関数) の詳細については、オンライン ヘルプの [CGA リファレンス](https://doc.arcgis.com/en/cityengine/latest/cga/cityengine-cga-introduction.htm) を参照してください。  
CGA が書けたら上書き保存し、[Scene] ウィンドウ → Streetnetwork レイヤー → Blocks レイヤーを選択し、右クリック → [Select Objects] ですべての区画を選択します。
[Inspector] ウィンドウで [Lot] タブを開き、[Rule File] として [House_rule.cga]、[Start Rule] として [Lot] を選択してモデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/advanced-cga/advanced-cga-house-rule3.png" title="フットプリントの生成" width="900">}}

## 分岐の使用
#### 条件による分岐  
CGA では、対象の図形の状態によって条件分岐させるコードを書くことも可能です。
ここではフットプリントの面積が 50 平方メートル未満の場合には建物を建てないようにしてみましょう。 
[House_rule.cga] の Footprint ルールを以下のように変更します。
case の後が条件で、対象図形の面積が 50 以下なら NIL、つまり「何もない状態」で置き換える、そうでなければ Height の高さだけ立ち上げる、とします。

```
Footprint-->
    case geometry.area() < 50: NIL #50平米より狭い場合は消去
    else: 
        extrude(Height)
        House
```

#### 割合による分岐  
屋根形状は現状では切妻屋根 (roofGable) だけですが、寄棟屋根 (roofHip) や片流れ屋根 (roofShed) にしたりするとさらにバリエーションが増します。
Roof ルールを以下のように変更してみましょう。
ここでは切妻屋根が 40%、寄棟屋根が 40%、残りが片流れ屋根となるように配合します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/advanced-cga/advanced-cga-roof.png" title="屋根の種類" width="500">}}  

```
Roof-->
    40%:
        roofGable(20,1,1)  # 切妻屋根
        color(roofcolor)
    40%: 
        roofHip(20,1)  # 寄棟屋根
        color(roofcolor)
    else:
        roofShed(10)  # 片流れ屋根
        color(roofcolor)
```

CGA が書けたら保存し、再度 Blocks レイヤーを右クリック → [Select Objects] ですべての区画を選択後、モデルの生成 ([Generate models of selected shapes] ボタン) をしてみましょう。  
少なくとも形状については、だいぶ日本の住宅地っぽくなったのではないでしょうか？  

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/advanced-cga/advanced-cga-result.png" title="割合による分岐結果" width="700">}}  

[テクスチャーの適用]({{% ref "/cityengine/get-started/quickstart-tutorials/apply-texture" %}} "テクスチャーの適用") ではいよいよテクスチャーの貼り付けです。
今回作成した単純な建物モデルが、簡単なテクスチャーを貼り付けるだけで一気にそれっぽくなります！

## 今回作成した CGA

```
attr Height = rand(5,10)
@Color
attr roofcolor = listRandom("#ff7f50;#9acd32;#ff4500")
@Color
attr wallcolor = listRandom("#ffff00;#00ffff;#dda0dd")
@StartRule  #以下の「Lot」ルールをスタート ルールとする
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
        roofGable(20,1,1)  # 切妻屋根
        color(roofcolor)
    40%: 
        roofHip(20,1)  # 寄棟屋根
        color(roofcolor)
    else:
        roofShed(10)  # 片流れ屋根
        color(roofcolor)
Wall-->
    color(wallcolor)
```
