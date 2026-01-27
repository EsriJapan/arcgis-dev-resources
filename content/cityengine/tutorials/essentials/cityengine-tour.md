+++
title = "CityEngine ツアー"
description = "CityEngine の主要な特徴や機能について学習します。"
Weight = 1
alwaysopen = false
publishDate = 2022-01-14T00:00:00+09:00
date = 2022-11-22T00:00:00+09:00
author = "原田" 
draft = false 
+++

チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

このチュートリアルは、Houseal Lavigne Associates の Devin Lavigne 氏との共同作業で作成されました。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-EE9729ED-697B-43FE-BD3F-453CF850F7FE-web.png" title=" " width="600" >}}


チュートリアルを開始するには、**CityEngine Tour.cej** を開きます。


## 概要
CityEngine は、対話的で没入感のある都市環境を、従来のモデリング手法よりも短時間で作成できる先進の 3D モデリングソフトウェアです。CityEngine を使って作成する都市やシーンは、現実の GIS データに基づくことも、過去、現在、未来の架空の都市を例示することも可能です。このチュートリアルでは、CityEngine の主要な特徴や機能を紹介します。この CityEngine ツアーでは、3D モデルの視覚化、デザイン、修正に使用する主要なインターフェース要素、ナビゲーション、ツールについてご紹介します。

この入門ツアーの目的は、プログラムの概要とプロのプランナーやデザイナーによる使用方法を紹介することです。このツアーではまず、ワシントン州リンウッド市の中心市街地再開発の完成シーンを紹介します。このシーンでは、将来のライトレール駅に関連する再開発の影響を予測するために CityEngine が使用されています。様々なチャプターで、ソフトウェアのハイレベルな紹介を行いながら、簡単な手順で機能や性能を紹介します。

CityEngine ツアーは、ワシントン州リンウッド市を支援するために CityEngine が使用された実際のプロジェクトに基づいています。リンウッド市はスノホミッシュ郡で 4 番目に大きな都市で、シアトルの北 16 マイル (26km) に位置しています。リンウッドはシアトルの郊外にあるベッドタウンで、小売業が集中しています。同種の郊外都市と同様、リンウッドは自動車中心の街であり、大型商業施設やストリップ型商業施設などが集中しています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-40D68EC3-43C7-48D3-B123-FCA7CA9DD30D-web.png" title=" " width="400" >}}


2007 年、リンウッド市は市の重要な区域の指針となるビジョンを提供するため、シティセンター小地区計画を採択しました。この計画の目標は、コンパクトで活気のある市街地を作り、この地域を活気ある商業の中心地、そして生活や仕事、遊びの場として魅力的な場所に変えていくことでした。スノーミッシュ郡南部とワシントン大学、シアトルのダウンタウン、イーストサイド、シータック空港などを結ぶ高速で頻繁かつ信頼性の高い鉄道輸送サービスを提供するリンウッド・リンク・エクステンションをはじめ、さまざまなプロジェクトが完了または進行中です。

シアトルとエバレット間の鉄道輸送を見越して、リンウッド・シティセンター内の区画は大きな成長圧力にさらされています。すでにいくつかのプロジェクトが開発されており、開発業者による提案では、新しい公共スペースや公園、住宅の追加、文化的アトラクションの改善、歩行者に優しい環境の創造、リンウッド シティ中心部の住みやすさのさらなる向上などが予定されています。新規開発の影響を予測するため、リンウッドでは CityEngine を使用して、ポテンシャルマスや視覚的な影響のシナリオを検討し、潜在的な住宅戸数、雇用、オフィスや小売スペースの面積を計算しました。

|演習|
|:--|
|・[ツアー ナビゲーション](#ツアー-ナビゲーション)|
|・[手動による描画](#手動による描画)|
|・[CGA モデルと Inspector](#cga-モデルと-inspector)|
|・[ダッシュボード](#ダッシュボード)|
|・[可視解析](#可視解析)|
|・[ハンドルを探索する](#ハンドルを探索する)|


## ツアー ナビゲーション
このツアーは、いくつかのチャプターで構成されており、モデル内を飛び回りながらシーンを探索することができます。また、ツアーはレイヤーで構成されており、各章ごとに異なるレイヤーが使用されています。Viewport の上にあるツールバーの **[Bookmarks]** メニューや、[Scene Editor] でレイヤーをオン・オフすることで、各章を参照することができます。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-A4CF3EEA-888F-4F32-A949-31035C6A90CB-web.png" title=" " width="350" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-38437279-D32E-41C5-9E6A-BCD05F120B83-web.png" title=" " width="350" >}}
 
## 手動による描画
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-BADE5EED-49FF-4007-9572-92A5E911326D-web.png" title=" " width="600" >}}

チュートリアルの前半では、CityEngine の [Manual Drawing] ツールの使い方を説明します。CGA コードとルール ファイルによって 3D モデルをプロシージャルに生成できるのが CityEngine の最大の特徴ですが、情報や形状が存在しない場合や、ルール ファイルでは目的の 3D 建物を正確かつ迅速に生成できない場合があります。このような場合、CityEngine で [Manual Drawing] ツールを使って形状や 3D ジオメトリを描画することができます。

このシーンでは、CityEngine の [Manual Drawing] ツールを使って作成した 4 つの建物 (Lynnwood Public Library、Civic Center、Convention Center、そして年齢層を絞った集合住宅である Destination 61+) をご紹介します。このチュートリアルの最初のパートでは、Destination 61+ の建物の最初のフットプリントのスケッチから作成する方法を説明します。

このチュートリアルのパートを開始するには、**[Bookmark]** ドロップダウン メニューで **[Manual Drawing]** を選択します。[Scene Editor] で **Overall** レイヤーの可視性をオフにして、**Manual Drawing** レイヤーの可視性をオンにします。



### フットプリントのトレース
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-52E500F4-B3E5-458D-BEC9-1008E8B579D3-web.png" title=" " width="600" >}}
GIS データから得られる建物のフットプリントが少し古くなっていたり、都市計画や設計の過程で新しい建物が描かれることはよくあることです。このチュートリアルでは、リンウッドの最近の開発プロジェクトである Destination 61+ を、航空写真の上に CityEngine のツールを使って建物の描画から作成します。

建物のトレースを開始するには、**Destination 61+** レイヤーが選択されていることを確認し、**[Polygonal Shape Creation]** をクリックするか、S キーを押します。メイン メニューの **[Shapes] → [Polygonal Shape Creation]** をクリックすることでもできます。

ツールをアクティブにしたら、下図のように建物の角の 1 つから描画を開始します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-770EF3FA-CBE1-4A51-8875-3CF34E6897BC-web.png" title=" " width="600" >}}

 
**[Tool Options]** ウィンドウの **[Snapping]** オプションを有効にすると、CityEngine は、90 度の角度、平行線、線の延長、および線の中点を描くのに役立つスナップ ポイントとガイドを提供します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-65555BFA-0A8C-4B0E-9173-A7F001F3E51A-web.png" title=" " width="600" >}}

 
建物の周りをなぞり続けます。形状が完成したら、下の写真のようなフットプリントができるはずです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-026E93B4-0904-480A-AE28-082E5C995B09-web.png" title=" " width="400" >}}


### [Push Pull] ツールを使って建物の中心を押し出す
次のステップは、建物を押し出すことです。**[Push Pull]** ツールを使うと、2D 形状の押し出しや、既存の 3D 押し出しの修正ができます。**[Push Pull]** ツールを選択し、フットプリントの上にカーソルを置いてください。オレンジ色のハンドルが表示されます。このハンドルをクリックし、フットプリントを上にドラッグします。建物を好きな高さまで引き上げることができますが、CityEngine では正確な距離を指定することもできます。建物を引き上げる前に、CityEngine のメインメニューから **[Window]** をクリックし、**[Tool Options]** をクリックして、**[Tool Options]** を表示します。**[Tool Options]** ウィンドウ ツールオプションには、**[Distance (m)]** ダイアログ ボックスがあり、面やエッジを押したり引いたりする距離をフィードバックし、正確な距離を指定してロックできるようになっています。

建物の 1 階部分を作るには、**[Distance (m)]** ダイアログ ボックスに「5」と入力して Enter キーを押すか、[lock] ボタンをクリックして距離をロックしてください。中央の形状をクリックして引き上げ、1 階部分を作成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-49DFF9BE-CD22-4B2D-B2FC-0E9680B0F211-web.png" title=" " width="600" >}}
 

2 階建てを作成するには、「Distance (m)」ダイアログボックスに「3」と入力して Enter キーを押すか、[lock] ボタンをクリックして距離を固定します。今回は、Ctrl キーを押しながら面をクリックして上にドラッグすると、新しいエッジができます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-0F379832-D5BF-41D2-BC4D-670986DEB52F-web.png" title=" " width="600" >}} 


{{< callout >}}

 Ctrl キーを押さない場合、別のエッジは追加されず、1 階部分に 3 メートルだけ追加されます。

{{< /callout >}}

この手順を、建物の同じ部分にあと 5 回繰り返します。完成すると、6 階建てのタワーができあがります。

### 建物に色を適用
[Scene Editor] で、**Destination 61+** レイヤーに色を割り当てることで、建物に色を適用することができます。**[Set Color]** チェック ボックスにチェックを入れると、カラー ピッカーが表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-00CA40BE-80D9-45DC-80E6-EBB4AAF01616-web.png" title=" " width="350" >}} 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-871F893F-B1BE-420B-8B79-F59800B6CFE3-web.png" title=" " width="350" >}} 

都市計画者が使用する典型的な色と一致するように、多世帯住宅には茶色を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-CF50B06A-D393-4F82-A5CD-27F0D3295BFA-web.png" title=" " width="600" >}} 

## CGA モデルと Inspector
[Scene Editor] で、**Manual Drawing** レイヤーの可視性をオフにし、**CGA Model Inspector** レイヤーの可視性をオンにします。次に、**[Bookmarks]** メニューを開き、「**CGA Model Inspector**」を選択します。ビューは、このチュートリアルの次の部分である、City Center at Lynnwood ビルに再フォーカスします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-E1DF139A-FA35-44DE-B0C9-4DDA5D6138D1-web.png" title=" " width="600" >}} 

CityEngine の CGA (Computer Generated Architecture) 形状文法は、建築物の 3D コンテンツを生成するために指定できる独自のプログラミング言語です。基本的には、CGA のルールを形状に割り当てたり適用したりすると、3D モデルが作成されます。3D モデルの複雑さは、ルールとその中の命令に依存します。CityEngine はプロシージャル モデリング アプリケーションです。つまり、形状は 3D モデルを作成する一連の手続き (CGA ルールファイル) を通過します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-CFE23A9E-8B74-4C43-9748-FE22917764F7-web.png" title=" " width="700" >}} 


### **Inspector** の使用
左側の City Center at Lynnwood ビルのフットプリントを選択し、[Inspector] でその属性を確認します (**[Inspector]** が開いていない場合は、**[Window] → [Inspector]** をクリックします)。**[Inspector]** ウィンドウには、形状の名前、ルール ファイル、開始ルールなど、形状に関する情報が表示されます。フットプリントにルールが割り当てられていないため、このフィールドは空白になっています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-C610714B-B43D-4076-8AE3-E15C09B678C4-web.png" title=" " width="600" >}} 

### ルールの適用
ルールを適用するには、まずフットプリント形状を選択します。**[Inspector]** で、**[Rules]** セクションの **[Assign]** ボタンをクリックします。ダイアログ ボックスが表示され、デフォルトでは、プロジェクトの **Rule** サブディレクトリの内容が表示されます。**Tour-Massing.cga** を選択し、**[Open]** をクリックします。ルールが割り当てられ、最後のステップでは、ツールバーの **[Generate]** ボタンをクリックするか、**[Shapes] → [Generate Models]** をクリックしてモデルを生成します。ルールは、ナビゲータから CGA ファイルを直接形状にドラッグして割り当てることもできます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-44B77F20-1D15-4D11-95EF-289F8300E6CC-web.png" title=" " width="600" >}} 


フットプリントの 3D モデルが生成され、[Inspector] で建物が選択されると、**Tour-Massing.cga** ルールファイルによって提供される属性のリストが表示されるので、単位、建物の高さ、土地利用、異なる土地利用に対する色などの 3D モデルの修正に使用することができます。


### 高さの変更
まず、**BuildingHeight** 属性を選択して、スライダーを動かしてみましょう。スライダーを左右に動かすと、建物の高さが増えたり減ったりして、スライダーにどのように反応するかを見ることができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-404D6626-6DE3-4551-A666-9B40B12C0695-web.png" title=" " width="400" >}} 

高さを指定する場合は、値をクリックし、数値を入力してください。数値をクリックし、値を **30** に変更します。他の値を変更していないと仮定して、10 階建てのビル (1 階あたり 3 メートル) が作成されたはずです。デフォルトでは、このルールは CityEngine と同様、メートル単位を使用します。しかし、CGA は強力で、ルールをコーディングしてカスタマイズすることで、多くの機能を実行することができます。たとえば、このルールは、フィートまたはメートルを指定できるようにプログラムされています。**[Units]** の値を **Feet** に変更してみてください。10 階建てのビルは 3 階建てになり、一般的な階高である 10 フィートが反映されます。

### 土地利用の変更
**[LandUse]** 属性を選択し、建物の用途を **Office** に変更します。このルールでは、建物の色が **Office_Color** 以下の属性で指定された青色に変更されます。これらの色も変更可能な属性です。16 進数のカラーコードを入力するか、クリックしてオペレーティングシステムのカラー ピッカーを開くことができます。[Inspector] で色を変更すると、シーンでも色が変更されます。

### ハンドルの使用
モデルやその属性を変更したり操作したりするもう一つの方法は、ハンドルを使うことです。**Tour-Massing.cga** ルールは、建物の高さにハンドルを提供するようにコード化されています。このハンドルによって、シーン内の属性を変更することができます。建物を選択した状態で、建物の左側にあるハンドルをドラッグすると、建物の高さを変更することができます。ハンドルを上下にドラッグすると、建物が上下に移動し、右側の **[BuildingHeight]** 属性が変更されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-F77C7E2A-69AD-4FEF-9ACC-0EA461F55FE6-web.png" title=" " width="600" >}} 


## ダッシュボード
このセクションでは、CityEngine ダッシュボードについて紹介します。CGA ルールが 3D モデルを生成するとき、ルールはダッシュボードを駆動する情報やデータを報告するようにプログラムすることができます。このチュートリアルを始めるには、[Scene Editor] で **CGA Model & Inspector** レイヤーの可視性をオフにし、**Dashboards** レイヤーの可視性をオンにします。次に、**[Bookmarks]** メニューを開き、**[Dashboards]** を選択します。[Inspector] とハンドルで変更する Lynnwood City Center 内のブロックにビューが再度フォーカスされ、モデルへの変更がダッシュボードでどのように即座に報告されるかが確認できます。まず、すべての形状を選択し (**[Select] → [Select All]** をクリックするか、Ctrl+A キーを押します)、**[Generate]** をクリックするか、Ctrl+G キーを押します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-EAA096E6-C4D0-42E9-A01D-CAFCAAA29D8D-web.png" title=" " width="600" >}} 


### [Dashboard] ウィンドウを開く
CityEngine のデフォルト レイアウトには、**[Dashboard]** ウィンドウが含まれていません。これを開くには、メニューから **[Window] → [Dashboard]** をクリックします。**[Dashboard]** ウィンドウのデフォルトの位置は、インターフェースの右側ですが、CityEngine ユーザー インターフェース (UI) には、必要に応じて位置やサイズの変更が可能なウィンドウがいくつかあります。このチュートリアルでは、**[Dashboard]** ウィンドウを下に沿って配置します。ウィンドウをドラッグすると、ウィンドウを配置するための黒いバウンディング ボックスが表示されます。このボックスを画面全体の下にドラッグしてください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-D570210C-C2A1-4A43-B577-E5B1C9DADC5C-web.png" title=" " width="600" >}} 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-0CF50225-364E-4134-96E9-733FBB86FCA2-web.png" title=" " width="600" >}} 

## ハンドルを探索する
開発ブロックにある建物のどれかを選択すると、その用途がダッシュボードの **[Selection Only]** 属性に表示されることに気づくでしょう。次に、ハンドルで建物の高さを変更し、ダッシュボードがどのように反応するかを見てみましょう。建物の高さが高くなるにつれて、すべての円グラフでオフィス スペースの床面積が増え、従業員数も増えています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-10F75FCC-7E0F-42F3-9191-A143F9A2BB9E-web.png" title=" " width="600" >}} 

### [Inspector] で値を変更
次に、別の建物を選択し、[Inspector] を使用していくつかの属性を変更します。この例では、**[LandUse]** 属性を「**Multi-Family**」に、**[BuildingHeight]** を「**60**」に、そして **[BuildingShape]** を「**L-Shape**」に設定しています。

### 探索を続ける
再開発エリアのすべてまたは一部を選択し、モデルへの変更 (ハンドルまたは [Inspector] で行った) がダッシュボードにどのように影響するかを引き続き調査します。

### 可視解析
このセクションでは、CityEngine 可視性および可視領域分析機能の概要を説明し、Lynnwood City Centerの完全な再開発コンセプトを取り上げ、Lynnwood Convention Center (青緑の建物)、City Center at Lynnwood (ブックマーク 2 の三角形の建物)、Destination 61+ ([Manual Drawing](#手動による描画) の建物) という 3 つの建物への可視性とそこからの可視性について調査します。

このチュートリアルのパートを開始するには、**[Dashboard]** ウィンドウを閉じるか最小化し、[Scene Editor] の **Dashboards** レイヤーの可視性をオフにし、**Visibility Analysis** レイヤーの可視性をオンにします。次に、**[Bookmarks]** メニューを開き、**Visibility Analysis** を選択します。ビューが再フォーカスされます。モデルがまだ生成されていない場合は、すべての形状を選択し (**[Select] → [Select All]** または Ctrl+A キーを押す)、**[Generate]** をクリックするか Ctrl+G キーを押します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-C098A306-3C70-467C-974F-A42FB0383781-web.png" title=" " width="600" >}} 


### 可視領域の作成
CityEngine で可視領域を作成すると、可視解析を行うことができ、特定の視点から何が見えるか見えないかを、サーフェスや構造物をハイライト表示することで示すことができます。**[Viewshed Creation]** ツールをクリックします。下図のように、City Center at Lynnwood ビルの上階でポイントを選択し、Lynnwood Convention Center の反対側へドラッグします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-88BC0C44-7FA2-4D62-BECA-DE3C953EDFEE-web.png" title=" " width="600" >}} 

可視領域が作成されると、CityEngine は可視解析を表示します。緑色でハイライトされたサーフェスはすべて、建物上のポイントの可視領域から、またはその範囲内で見ることができます。赤色で表示されているものは、障害物であり、見えません。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-8410D19D-D6E1-4E85-A4FD-A4DE1FC9858F-web.png" title=" " width="600" >}} 


### 別の可視領域の追加
シーンに 2 つ目の可視領域を追加するには、**[Viewhed Creation]** ツールをクリックするか、メニューの **[Analysis] → [Viewshed Creation]** をクリックして、もう一つの集合住宅である Destination 61+ ビルの上階のスポットを探し、前回の例で行ったように Lynnwood Convention Center を横切るようにドラッグします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-3905F1D8-A83E-4FB0-B2D1-AAF060820D5F-web.png" title=" " width="600" >}} 

2 つ目の可視領域が作成されます。Lynnwood Convention Center の建物に黄色い面が見えますが、これは両方の視点からの視認が可能な面です。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-8FE0C3DC-B72B-4911-B7B2-F2BBB624AAD8-web.png" title=" " width="600" >}} 



### 可視領域の修正
Viewport にあるハンドルを使って、可視領域の位置や角度を調整・変更することができます。原点にあるハンドルは見晴らしの良い場所の位置を変更し、他のオレンジ色のハンドルはビューの方向と角度を変更します。

### モデルのエクスポート
次のセクションでは、CityEngine のエクスポート機能を使用して、3D モデルを他のプログラムに取り込む方法を説明します。まず、[Scene Editor] の **Visibility Analysis** レイヤーの可視性をオフにし、**Export Models** レイヤーの可視性をオンにしてください。次に、**[Bookmarks]** メニューを開き、**[Export Models]** を選択します。ビューが再フォーカスされます。もう一度、モデルがまだ生成されていない場合は、すべての形状を選択し (**[Select] → [Select All]** をクリックするか、Ctrl+A キーを押す)、**[Generate]** をクリックするか、Ctrl+G キーを押します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-EF4D0831-11C1-4D51-9DD1-BD8B550D6D49-web.png" title=" " width="600" >}} 

### モデルの選択
CityEngine のエクスポート機能は、コマンド実行時に選択されているモデルのみをエクスポートするため、よりコントロールしやすくなっています。このチュートリアルでは、メニューからすべてのモデルを選択します (**[Select] → [Select All]** をクリックするか、Ctrl+A キーを押します）。また、すべてのモデルの周囲に選択ボックスをドラッグすることもできます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-F4088F2E-BEA7-447E-B80C-B5705D46FFAF-web.png" title=" " width="600" >}} 

### モデルのエクスポート
モデルを選択したら、メニューから **[Files] → [Export Models]** を選択するか、Ctrl+E キーを押します。エクスポート ダイアログ ボックスが表示され、エクスポートするプログラムとファイル形式を指定することができます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-E7BD9A2B-E794-4A4F-91FA-E19972CC1BF2-web.png" title=" " width="400" >}} 


### Unreal Engine へのエクスポート
Unreal Engine (DATASMITH) エクスポーターは、CityEngine から Unreal Engine Editor への効率的なデータ転送を提供します。このエクスポーターの主な目的は、建築およびデザインのビジュアライゼーション ワークフローですが、ゲームやその他の作業にも使用できます。

Unreal Engine を選択して **[Next]** をクリックすると、エクスポートのオプションを指定するための別のウィンドウが表示されます。

GIS とは異なり、ほとんどの 3D プログラムは、グローバル座標系ではなくローカル座標系を使用します。これは、それらの中心が 0,0 であることを意味します。**[Global Offset]** オプションの **[Center]** をクリックすると、Unreal Engine の座標の中心にモデルを移動させることができます。その他の設定を変更したり、詳細について知りたい場合は、[Export Datasmith](https://doc.arcgis.com/en/cityengine/latest/help/help-export-unreal.htm?rsource=https%3A%2F%2Flinks.esri.com%2Fcityengine%2Ftutorials%2Fcityengine-tour%2Fexport-unreal) をご参照ください。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-0138A11E-EA9D-4383-84E0-456C29966DCE-web.png" title=" " width="400" >}} 

### シーン レイヤー パッケージをエクスポートする
Esri Scene Layer Package (SLPK) は、ArcGIS Online で共有し、Scene Viewer で表示できる、Web に最適化されたカスタム フォーマットです。SLPK は GIS で使用されるため、モデルはグローバル座標にエクスポートされます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-805A0A35-92A8-4CBE-9B77-F1691AD03076-web.png" title=" " width="400" >}} 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/GUID-C201015C-7920-48D2-9037-E35243068FDA-web.png" title=" " width="400" >}} 


その他の設定を変更する場合、または詳細については、[Export SLPK](https://doc.arcgis.com/en/cityengine/latest/help/help-export-slpk.htm?rsource=https%3A%2F%2Flinks.esri.com%2Fcityengine%2Ftutorials%2Fcityengine-tour%2Fexport-slpk) をご参照ください。

CityEngine の学習を続けるには、[CityEngine チュートリアル](https://doc.esrij.com/cityengine/tutorials/) をご参照ください。










