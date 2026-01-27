+++
title = "CGA の作成"
description = "CGA スクリプトを作成して、ルールをどのように設定するかを解説します。"
Weight = 3
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷"
draft = false 
+++

## 概要
CityEngine では、プロシージャルという技術を使用して、都市をモデリングします。プロシージャル モデリングを行うには、CGA スクリプトを書いてルールを定義する必要があります。<br>
ルールとは、モデルをどのように構築するかを記述した設計図です。
そして、そのルールを書きこむのが、CGA スクリプト (ルール ファイル) という一連の処理 (コマンド) を記述したスクリプトです。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-1-1-cga-script.png" title="CGA の作成" width="700" >}}

CGA スクリプトを作成して、実際にルールをどのように設定していくかを紹介します。

|演習|
|:--|
|・[準備](#準備)|
|・[CGA スクリプトの記述](#cga-スクリプトの記述)|
|・[属性](#属性)|
|・[基本的なオペレーション](#基本的なオペレーション)|
|・[今回作成した CGA](#今回作成した-cga)|

## 準備
[プロジェクトの作成]({{% ref "/cityengine/get-started/quickstart-tutorials/create-project" %}} "プロジェクトの作成")から続けて行う場合は、ステップ 1、2 はスキップしてください。

1. [スタート] → [すべてのプログラム] → [ArcGIS] → [CityEngine 202x.x] をクリックし、CityEngine を起動します。
1. [Navigator] ウィンドウで、前章で作成したプロジェクトの scenes フォルダーを開き、保存したシーン ファイル (MyScene1.cej) をダブルクリックして開きます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/19_MD_2.png" title="第 2 章で作成したプロジェクト" width="900" >}}

1. [Scene] ウィンドウ → [New Shapes] のチェックボックスをオフにして、前章で作成したシェープを非表示にします。
   また、Streetnetwork レイヤーを展開し、Blocks レイヤーのチェックをオンにして表示します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-1-3-scene-pane-2.png" title="Scene ウィンドウ" width="500" >}}

これで準備が整いました。

## CGA スクリプトの記述
#### CGA ルール ファイルの作成

1. 新規ルール ファイルを作成します。
[File] メニュー → [New] → [Select a wizard] ダイアログで、CityEngine フォルダー → [CGA Rule File] を選択して、[Next] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/20250801_3-2-1_2-select-a-wizard-dialog.png" title="[Select a wizard] ダイアログ" width="700" >}}

2. [CGA Rule File] で、フォルダーの格納先を選択し、[File name] に「House_rule.cga」と名前を付けて、[Finish] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-2-2-cga-rule-file.png" title="[CGA Rule File] で格納先と名前を設定" width="700" >}}

3. [Navigator] ウィンドウ → プロジェクト → rules フォルダー → [House_rule.cga] をダブルクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-2-3-navigator-pane.png" title="[Navigator] ウィンドウ" width="500" >}}

4. 画面の左下のウィンドウに House_rule.cga ルール ウィンドウが開きます。
   ウィンドウの右端をつまんで少し右にドラッグしてウィンドウを広げると見やすくなります。<br>
   (ルール ウィンドウ内の右上の [Maximize] ボタンをクリックすれば、ウィンドウを最大表示にすることができます。)

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-2-4-house-rule-pane2.png" title="House_rule.cga ルール ウィンドウ"  width="900" >}}

#### CGA の記述
ルール ウィンドウにある [House_rule.cga] の中で、以下のように記述します。
これは Footprint というルールの定義です。
このルールの中では、extrude() という面を立ち上げる操作 (これを「オペレーション」と呼びます) を行い、その結果、生成した図形を次の House というルールに送ります。
オペレーションは一般的なプログラミング言語の関数のように引数をとることができます。
この場合は 10m 立ち上げる、という操作です。「#」は、これより右に書かれた文字列を無視する記号 (コメント アウト) です。

 ```
 Footprint-->
    extrude(10) #10m 立ち上げるオペレーション
    House #次のルール
 ```

ルールを記述すると、下図のようになります。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/20250801_3-2-5_3-rule-description.png" title="ルールを記述" width="700" >}}

ルールを定義したら、[File] メニュー → [Save] をクリックして (またはキーボードの Ctrl + S)、ルール ファイルを保存します。

#### CGA リファレンス
オペレーションの使い方など CGA についての詳細は[オンライン ヘルプ](https://doc.arcgis.com/en/cityengine/latest/cga/cityengine-cga-introduction.htm)に記載されています。<br>
各オペレーションをクリックし、その特徴や使用方法を確認します。今回は [[extrude](https://doc.arcgis.com/en/cityengine/latest/cga/cga-extrude.htm)] (立ち上げ)、[[comp](https://doc.arcgis.com/en/cityengine/latest/cga/cga-comp.htm)] (シェープの要素分割)、[[roofGable](https://doc.arcgis.com/en/cityengine/latest/cga/cga-roof-gable.htm)] (切妻型の屋根)、[[color](https://doc.arcgis.com/en/cityengine/latest/cga/cga-color.htm)] (色の変更) オペレーションを使用しますので、確認してみましょう。


#### ルールの適用

1. ツールバーより [Select] (選択) ツールを選択し、3D View ウィンドウで、[Ctrl] キーを押しながらクリックして区画をいくつか選択します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-2-7-select-parcels.png" title="いくつかの区画を選択" width="700" >}}

1. [Inspector] ウィンドウの [Lot] タブ → [Rules] → [Rule file] で、[Assign] ボタンをクリックし、保存した  ルール ファイルを参照します。
   このルール ファイルがモデル生成時に使用されます。

1. [Start rule] で、[Select] ボタンをクリックし、[Footprint] を選択します。
   スタート ルールとは、ルール ファイルの中でも実行される最初のルールを定義しています。
   今回はフットプリント (2 次元の建物形状) から作成していくので、Footprint ルールをスタート地点として選択します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-2-8-start-rule2.png" title="スタート ルールを定義" width="500" >}}

   
1. ルール ファイルで定義した家モデルが生成されます。
   また、区画上に CGA ルール ファイルをドラッグ & ドロップすることでもモデルを生成することができます。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-2-9-generate-model.png" title="家モデルを生成" width="700" >}}

## 属性
CityEngine の特徴は何と言ってもプロシージャルによるモデリングです。
プロシージャル モデリングでは、モデルの様々な要素を変数化することで、無数のバリエーションを瞬時に生成することができます。<br>
また生成した後でも、この変数を変更して動的に形状を変えることができます。
この変数を「属性 (Attribute)」と呼びます。

#### 属性の設定

1. CGA を以下のように書き換え、上書き保存 (Ctrl + S) します。
   この “Height” が属性です。

    ```
    attr Height = 10
    Footprint-->
        extrude(Height)
        House
    ```

1. 先ほどと同じ 3 つの区画を選択して再度 [Generate model] (Ctrl + G) します。

1. [Inspector] ウィンドウに [Height] という項目が出ているはずです (出ていない場合は、3D View ウィンドウ上のモデル以外の場所をクリックして選択を解除後、生成されたモデルをクリックして選択し直すことで [Inspector] ウィンドウ内が更新されます)。
   この数値を 「30」などの値に変更してみましょう。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-3-1-inspector-height.png" title="Height を変更" width="700" >}}

1. 変更できましたら、 [Height] のドロップダウン リストから [Rule default] を選択し、変更をリセットします。

1. CGA 内の attr Height = 10 を以下のランダム関数を使ったものに書き換え、上書き保存した後、再度 [Generate model] します。

    ```
    attr Height = rand(5,20)
    ```
   
   各モデルの [Height] の値がランダム関数で定義した高さに設定されていることを確認してください。

1. [Shapes] メニューの [Update Seed] (モデル更新) ボタンを何度かクリックして、ランダム関数で定義しておいた高さがランダムに変化するのを確認してください。


## 基本的なオペレーション
#### 要素分割と色付け
先ほど書いた CGA の末尾に House ルールを追加します。<br>
comp(f) は現在の立体図形 (シェープ) から面の要素を抽出するオペレーションです。
抽出した要素をそれぞれ Roof と Wall というルールに渡して屋根と壁を作ります。
color() は色を付けるオペレーション、roofGable() は切妻屋根を作成するオペレーションです。

 ```
 House-->
     comp(f){top: Roof | side: Wall} #シェープをトップ (屋根) とサイド (壁) に分割
 Roof-->
     roofGable(20,1,1) #Gable (切妻型) の屋根を設定
     color(roofcolor)
 Wall-->
     color(wallcolor)
```

また、先頭の attr Height・・・の行の下に以下の 4 行を追加します。

 ```
 @Color
 attr roofcolor = listRandom("#ff7f50;#9acd32;#ff4500")
 @Color
 attr wallcolor = listRandom("#ffff00;#00ffff;#dda0dd")
 ```
これらは、屋根と壁をそれぞれ 3 つの色からランダムに選択して属性値とする、という記述です。
色の記述に関しては、任意の検索サイトで「HTML カラーコード」で検索して調べてください。
@Color は、この下の属性に対して [Inspector] ウィンドウ上で色の選択ができる GUI を利用可能にします。
このように、属性に付与して [Inspector] ウィンドウ上での振る舞いを定義する「＠」で始まる文字列のことを「アノテーション」と呼びます。

{{< callout >}}

アノテーションの種類とそれぞれの詳細については、[CGA Annotations](https://doc.arcgis.com/en/cityengine/latest/cga/cga-annotations.htm) をご参照ください。

{{< /callout >}}

これまでと同様、上書き保存してモデルを再生成します。<br>
※すでにルールが適用されている区画のみを再選択するには、モデルを 1 つ選択して、右クリック → [Select Objects with Same Rule File] を選択すると簡単です。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-4-1-generate-model.png" title="モデルの再生成" width="700" >}}

[Shapes] メニューの [Update Seed] (モデル更新) ボタンを何度かクリックして、ランダム関数で定義しておいた色がランダムに変化するのを確認してください。

最後に、[Inspector] ウィンドウを開き、CGA スクリプトで設定した [Height]、[roofcolor]、[wallcolor] の属性を変更してみましょう。<br>
例: [Height] パラメーターの値を デフォルトから「20 m」に変更し、[roofcolor] と [wallcolor] を変更

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-cga/3-4-2-wall-roofcolor-wallcolor.png" title="[Height] パラメーターの値を デフォルトから「20 m」に変更し、[roofcolor] と [wallcolor] を変更" width="900" >}}

このように、単純なルールを幾つもつなぎ合わせて行くことで、より複雑なモデルを構築していくことができ、また属性の設定により、モデル生成後も自由に形状や色を変えることができるのです。<br>
[高度な CGA]({{% ref "/cityengine/get-started/quickstart-tutorials/advanced-cga" %}} "高度な CGA")では、もう少し高度な CGA を使用して、より現実に即した街並みにします。


## 今回作成した CGA

```
attr Height = rand(5,20)
@Color
attr roofcolor = listRandom("#ff7f50;#9acd32;#ff4500")
@Color
attr wallcolor = listRandom("#ffff00;#00ffff;#dda0dd")
      
Footprint --> 
    extrude (Height) 
    House
House-->
    comp(f){top: Roof | side: Wall} #シェープをトップ (屋根) とサイド (壁) に分割
Roof-->
    roofGable(20,1,1) #Gable (切妻型) の屋根を設定
    color(roofcolor)
Wall-->
    color(wallcolor)
```