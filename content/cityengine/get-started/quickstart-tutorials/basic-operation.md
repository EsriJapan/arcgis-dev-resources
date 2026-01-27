+++
title = "基本操作"
description = "CityEngine の起動と基本操作を確認します。"
Weight = 1
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷"
draft = false 
+++

## 概要
ここでは、ArcGIS CityEngine の Welcome Wizard を使って、簡単に街のモデルを作成・操作する方法をご紹介します。

|演習|
|:--|
|・[CityEngine の起動](#cityengine-の起動)|
|・[City Wizard の利用](#city-wizard-の利用)|
|・[画面の操作](#画面の操作)|




## CityEngine の起動


1.	 [スタート] → [すべてのプログラム] → [ArcGIS] → [CityEngine 202x.x] をクリックします。
2.	自動的に「Welcome to CityEngine」ウィンドウが表示されます。
[Generate an Imaginary City] からは、City Wizard を起動して初心者の方でもウィザード形式で簡単に街を作成することができます。

{{< callout >}}

※ 起動時にこのウィンドウが出ない場合は、[File] メニュー → [New] → CityEngine フォルダー → [City Wizard] から City Wizard を起動し、「City Wizard の利用」から始めてください。<br>
※ 本チュートリアルでは、Light テーマを使用します。テーマ カラーは、[Edit] メニュー → [Preferences] → [Appearance] → [CityEngine Theme] から変更できます。

{{< /callout >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/Welcome_to_CityEngine.png" title="Welcome to CityEngine" width="700" >}}


## City Wizard の利用
1.	Terrain トピックで、[Scene Name] に任意の名前を付けます。Scene (シーン)とは、地形や図形などのレイヤーや設定をひとまとめにするファイルです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20250802_1.2.1.png" title="Terrain" width="700" >}}

2.	[Next] をクリックします。

3.	Street Graph トピックで、好きな道路ネットワークの形状を選択し、[Next] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/1.2.3.png" title="Street Gtaph" width="700" >}}

4.	Rules トピックで、International City を選択します。 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20250801_1.2.4.png" title="Rules" width="700" >}}

5. 手順 1 で指定した名前のプロジェクトが追加され、都市が生成されます。
CityEngine では、プロジェクトと呼ばれるフォルダーごとにデータを管理します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20250801_1.1.53.png" title="プロジェクト" width="900" >}}


## 画面の操作
以下の図は CityEngine のインターフェイスで、代表的なウィンドウ配置の例です。CityEngine にはさまざまなウィンドウが用意されており、ウィンドウは移動して任意の位置に配置することができます。また上部の [Window] メニューから必要なウィンドウを開くことができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20250801_p2.png" title="ウィンドウ" width="900" >}}


#### ウィンドウ
・  __Navigator__: データを管理するウィンドウです。データの追加、削除を行う際に使用します。<br>
・	__Scene Editor__: 表示を管理するウィンドウです。レイヤーの表示/非表示などを操作する際に使用します。<br>
・	__CGA Rule Editor__: ルール ファイルを表示するウィンドウです。ルールを作成・編集する際に使用します。<br>
・	__Viewport__: シーンを表示するウィンドウです。Top View、Side View 等の種類がありますが、デフォルトの Viewport モードは 3D View です。<br>
・	__Selection Tool__: データを選択するウィンドウです。単数・複数選択や範囲選択をする際に使用します。<br>
・	__Inspector__: 属性を管理するウィンドウです。ルール ファイルやパラメーターの設定を行う際に使用します。


#### 標準ツールバー
マップを操作する際に利用できるツールが用意されています。モデルの選択や、移動、図形の作成などをする際に使用します。実際のツール名は英語ですが、各ツールの意味については以下を参考にしてください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20250801_1.3_2_5.png" title="標準ツールバー" width="900" >}}


#### 3D View ウィンドウ ツールバー
3D View の上部には、表示設定のためのツールバーがあります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/1.3_3_2.png" title="3D View ウィンドウ ツールバー" width="550" >}}

※より詳細な説明は [Help] メニュー → [CityEngine Help] からヘルプをご参照ください。

それではツールバーを使用して、作成した街のシーンを操作してみましょう。





<u>操作例1 (ナビゲーション) :</u>

[Pan/Track] (平面移動)、[Tumble/Rotate] (回転移動)、または [Dolly/Zoom] (ズームイン/アウト) ツールを選択し、クリックしながら画面を操作しましょう。これらはそれぞれ、[Alt] キーを押しながらのマウス中ボタン (ホイール)、左ボタン、右ボタンでのドラッグでも行えます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/1.3_4_3.png" title="ナビゲーション" width="900" >}}


<u>操作例2 (パラメーターの変更) :</u>

[Select] (選択) ツールで、建物を 1 つクリックして選択します。ここで [F] キーを押すと、この建物にズームします。[Inspector] ウィンドウの [Shape] メニュー で [HeightFactor] (高度係数) パラメーターに任意の値を入力、または、スライダーをドラッグして建物の高度係数を変更しましょう。また、[Shapes] メニューの [Update Seed] (シード値の更新) をクリックして、モデルを更新しましょう。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/1.3_41_2.png" title="パラメーターの変更" width="900" >}}



<u>操作例3 (ダイナミック シティ レイアウト) :</u>

 [Move] (移動) ツールで道路を 1 つ選択し、表示された 3 方向の矢印または黄色い円をドラッグして道路の形状、位置を変更しましょう。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/1.3_42_2.png" title="ダイナミック シティ レイアウト" width="900" >}}



<u>操作例4 (ダイナミック シティ レイアウト) :</u>

道路を作成します。[Street Creation]  (道路作成) ツールをクリックし、既存道路の端点にカーソルを合わせます。スナップされ、カーソルがオレンジ色の四角形の表示になったら、クリックします。そのまま何もないスペース上でクリックしていくと、新規に道路を作成できます。最後に再度既存道路の端点にカーソルを合わせ、スナップされたらダブルクリックで道路作成の作業を終了します (道路作成の作業の編集は [Esc] キーを押すことで終了することもできます)。道路を繋いで区画ができると、区画にルールが自動的に適用され、街ができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/1.3_5_2_v1.png" title="ダイナミック シティ レイアウト" width="900" >}}


<u>操作例5 (効果) :</u>

ビューの設定からは、さまざまな効果や表示を行うことができます。[Viewport] ウィンドウ → [View Settings] (ビューの設定) のカメラのアイコンをクリックして開きます。各機能をオン、オフに切り替えて、効果や表示がどのように変わるのかを試してみましょう。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20250801_1.3_6_4.png" title="効果" width="700" >}}


このように、CityEngine はアルゴリズムで建物や道路の 3D モデルを生成しているため、簡単で対話的な操作性で思い通りの都市を作成・編集することができます。
建物や道路のモデルを選択して、[Inspector] ウィンドウの “Rule File” で設定したファイルが、そのアルゴリズムを記述したルール ファイルです。もととなる図形からこれに書かれた手順に従って 3D モデルが生成されており、その図形を編集するとすぐにまたルールに従ってモデルが再生成され、このようなレイアウト変更が可能になるのです。

[File] メニュー → [Save] でシーンを保存します。







