+++
title = "GIS データを使った作業"
description = "GIS データを使った CityEngine の使い方を学習します。"
Weight = 3
alwaysopen = false
publishDate = 2022-12-22T00:00:00+09:00
draft = false
author = "中田"
+++


チュートリアル データは、**\[Help\] メニュー** → **\[Download Tutorials
and Examples...\]** を選択し、\[CityEngine Tutorial\]
からダウンロードできます。

このチュートリアルは、Houseal Lavigne Associates の Devin
Lavigne 氏との共同作業で作成されました。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-4ABE2289-B105-4573-9560-23424E7D5036-web.png" title=" " width="500" >}} 

## 概要

GIS データを扱うことは、都市計画にとって重要なワークフローです。このチュートリアルでは、GDB インポートについて紹介し、実際の GIS 情報を使用して 3D 都市をプロシージャルに作成する方法について説明します。

既存の GIS 情報が存在する場合、CityEngine
はそのデータをインポートして、すべての空間属性とともにジオメトリにアクセスすることができます。例えば、セットバック情報を持つ区画は、この情報を
CityEngine に渡してゾーニング・エンベロープを素早く生成したり、既存の土地利用情報を使ってプロトタイプの建物を生成したりすることが可能です。この機能は、再開発のコンセプトや、コンセプトを既存の開発コンテクストに適合させる場合に特に便利です。このような場合、既存の
GIS 情報から既存のコンテクストを簡単に生成し、特定の区画に再開発の機会を適用することができます。

このチュートリアルでは、デトロイト市によるインフィル開発の定量化・可視化に CityEngine が使用された実際のユースケースを中心にご紹介します。2021 年 5
月、米国住宅都市開発省 (HUD) は、高い競争力を持つ憧れの Choice
Neighborhoods
助成プログラムの勝者としてデトロイトを選びました。この助成金は、デトロイトのダウンタウン西側に位置するコークタウン地区に、500
戸の手頃な価格の住宅を建設するためのものです。

この地域に対するデトロイト市の計画は、都市計画開発局と住宅再生局が 18
ヶ月をかけて開発した Greater Corktown Framework
を基にしています。市の指導者、住民、地域団体、非営利団体、民間開発コミュニティが協力して、近隣地域の活性化と課題に対処するためのデトロイトの入札を行いました。Greater
Corktown Framework では、以下のことを求めています。

-   困窮した公的支援住宅を代替する。

-   教育、雇用、健康に関する世帯の成果を向上させる。

-   手頃な価格の住宅と市場価格帯の住宅をよりよく統合し、すべての人にとって快適で多様性のあるコミュニティを確保する。

-   治安の改善や幼児教育などのアメニティや資産を提供するために、困難な状況にある地域に再投資を行う。

Greater Corktown Framework
のフォローアップ実施活動として、フレームワークの提言と政策の可視化に
CityEngine
が使用され、そのダッシュボードとレポートが助成金申請と将来の意思決定に役立てられました。このチュートリアルでは、市の
GIS 情報を使用して、このプロジェクトと同様の方法で作業を行い、既存の GIS
情報を使用する際の一般的なワークフローとタスクについて説明します。

|演習|
|:--|
|・[データのインポート](#データのインポート)|
|・[道路網のクリーンアップ](#道路網のクリーンアップ)|
|・[ESRI.lib のルールの使用](#esrilib-のルールの使用)|
|・[既存の建物との連携](#既存の建物との連携)|
|・[ゾーニング エンベロープ](#ゾーニング-エンベロープ)|
|・[インフィル開発](#インフィル開発)|
|・[区画と属性の編集](#区画と属性の編集)|
|・[コンテキストの追加](#コンテキストの追加)|
|・[エクスポート](#エクスポート)|

## データのインポート

このチュートリアルの最初のステップでは、ファイル
ジオデータベースからフィーチャーまたはレイヤーを、ジオリファレンス付きの航空写真と一緒にシーンにインポートします。

## レイヤーのインポート

メニューの **\[File\] → \[Import\]**
でインポートすることができます。ダイアログ ボックスで **CityEngine Layers** フォルダーにある **\[File GDB Import\]** を選択します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-B597A818-D6DF-43E2-8089-0BE6E1A90865-web.png" title=" " width="500" >}}

**\[FileGeodatabase\]** ダイアログ ボックスが表示され、プロジェクトの
data フォルダー内の **Corktown.gdb** ファイル
ジオデータベースを参照することができます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-05DA857E-E3F7-4BA9-A52D-D3AA1D8EBAFD-web.png" title=" " width="500" >}}

または CityEngine プロジェクト内の **Corktown.gdb**
フォルダーを参照し、右クリックして **\[Import\]**
を選択します。この方法は簡単そうに見えますが、このチュートリアルではデータをこのディレクトリに移動していることに留意してください。**\[File\]
→ \[Import\]**
を使用すると、コンピュータまたはネットワーク上の任意の場所にあるジオデータベースを参照することができます。

レイヤーをインポートする前に、**\[Create Block\\Lot Shapes from
Graph\]**
チェックボックスをオフにしておくとよいでしょう。実際の区画を使用するため、CityEngine
にブロックと区画を作成させる必要はありません。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-6436A954-2E02-4EE4-B048-87197031DE05-web.png" title=" " width="500" >}}

**\\Corktown\\Buildings_Detroit**
データセットをアンチェックし、**\[Finish\]**
をクリックします。すべてのデータがシーンにインポートされると、以下の画像のようになります。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-C767F71C-4C6C-4D31-B75C-95A9FC1618FA-web.png" title=" " width="500" >}}

## 航空写真のインポート

航空写真をインポートするには、**\[Navigator\]** ウィンドウで
**\\images\\CorktownAerial** フォルダーを参照します。**Aerial Base.jpg**
ファイルをシーンにドラッグすると、インポート完了のダイアログ
ボックスが表示されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-6ED1667F-2519-4D5D-9282-E91B4EBD23D7-web.png" title=" " width="500" >}}

**\[Texture Import\]** を選択し、**\[Next\]**
をクリックします。次の画面で、**\[Finish\]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-A2401FA6-FE7C-41C0-8589-14DB7FFD11C9-web.png" title=" " width="500" >}}

## 道路網のクリーンアップ

道路を扱う際の最初のステップの 1
つは、自分のデータを扱う際に予想される一般的なクリーンアップを行い、CGA
ルールを適用することです。

道路の中心線のグラフ
ネットワークが調査エリアからはみ出ていて、長さが異なっていることに気づくかもしれません。それらを短くして、交差点がわずかに延びるようにします。よりスタイリッシュな変更ですが、見た目がすっきりし、調査エリアに焦点を当てることができます。

## レイヤーの可視性を設定する

まず、**StreetCenterlines_Corktown** レイヤーを除くすべてのレイヤーの可視性を手動でオフにします。これにより、他の情報に気をそらされることなく、このレイヤーに集中することができます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-4CB0524B-8E86-4F82-A240-C25203A18FAA-web.png" title=" " width="500" >}}

## ストリート・セグメントの短縮化

ノードを選択したまま、**[Transform Move Tool\]**
を起動し、ノードを移動して長さを短くします。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-95BA7095-41D9-40A2-B0CE-AA335A8EA0AA-web.png" title=" " width="500" >}}


赤または青の矢印を使用すると、シーンのワールド
オリエンテーションに沿ってノードがドラッグされることにお気づきかもしれません。この動作は、変形ツールオプションの
**[Adjust Position and Orientation]** トグルキーまたは (o)
キーを使用して、格子状の道路に沿って一時的に向きを調整することによって変更することができます。

下の画像のようになるまで、対象エリアの周囲を作業してください。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-8371A181-69F3-4A06-B00E-044EAE0AEE58-web.png" title=" " width="500" >}}

## 競合する形状の修正

交差点の 1
つに、修正が必要なエラーがあることに気づくかもしれません。これは競合する形状と呼ばれ、CityEngine
が交差点とノードに関連するジオメトリを作成するための十分なスペースがない場合に発生します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-D2B11664-6C51-4F9A-BDEE-E235CAE73DF9-web.png" title=" " width="500" >}}

まず、エラーを発生させているノードを選択します。次に、**\[Inspector\]**
ウィンドウの **\[Node Parameters\]** セクションにある **\[Curb
Radius\]** を変更します。値を 3 から 2 に変更すると、エラーが解決されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-7EEB541E-44A0-4FC1-BA08-D66A50010CD0-web.png" title=" " width="500" >}}

## コーナーを簡略化

インポートしたデータには、もう一つ問題があります。おそらく、データにz値（高さ）が含まれていたか、CityEngine
が下の角で道路を上向きに弧を描いたかのどちらかだと思います。よく見ると、このコーナーには
3 つのノードがあることがわかります。一般的なアドバイスとして、グラフ
ネットワーク内のノードまたは頂点が少ないほど、競合が少なくなり、グラフ
ネットワークの調整が容易になります。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-A608FB19-9496-4128-ADA2-9D00467C64D5-web.png" title=" " width="500" >}}

ノードを削除するには、ノードを選択し、**\[Transform Move Tool\]** (W)
で隣接するノードの上に移動するだけです。自動的にスナップして、一度離すと
2 つのノードが統合されます。この位置でこの作業を 2
回行う必要があります。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-5AB523E6-2CB3-4CBD-A9C0-35997F4065FF-web.png" title=" " width="500" >}}

## コーナー カーブの調整

ノードが 1 つ残ったら、最後のクリーンアップとして、この道路のカーブと位置を修正します。最後に残ったノードを選択して、**\[Edit
Streets/Curves\]** ツールを起動します
(C)。このツールでは、選択したノードを移動し、ハンドルを使ってコーナーまたはカーブの長さと弧を編集することができます。ガイドのために
**Parcels Corktown** レイヤーをオンにして、**\[Edit Streets/Curves\]**
ツールを使って道路を区画の間にフィットするように調整します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-1C314069-846B-4495-A2C3-2F246475B1B2-web.png" title=" " width="500" >}}

## ESRI.lib のルールの使用

CGA ルールは、図形を 3D モデルに変換するものです。道路に適用するルール
ファイルは既に作成されており、**ESRI.lib** のルールの 1
つとして提供されています。ESRI.lib は、CityEngine のプロジェクトで CGA
ルールやアセットなどの便利なリソースを含むライブラリです。これらは、プロジェクトを開始するのに役立ちます。**ESRI.lib**
は CityEngine のワークスペースに自動的にインストールされます。

## 道路形状を選択

中心線に関連するすべての図形を選択します。オブジェクトを選択する方法はいくつかあります。手動で
**\[Select\]** ツール(Q)、**\[Select\]** メニュー、または **\[Scene
Editor\]** で **StreetCenterlines_Corktown**
レイヤーを右クリックし、**\[Select Objects\]** をクリックします。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-1CC2052A-44D1-4F31-834F-AA8EC60028D2-web.png" title=" " width="500" >}}

## ルールの割り当て

すべての図形が選択された状態で、**\[Inspector\]** ウィンドウの
**\[Rule\]** セクションで **\[Assign\]**
をクリックすると、ルールを適用することができます。ダイアログ
ボックスが開き、**ESRI.lib → rules → Streets_Modern_Standard.cga**
ルールにナビゲートすることができます。ルールを選択したら、**\[Open\]**
をクリックし、図形にルールを割り当てます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-4B3DF666-2F18-4771-A7FD-8B94AD6ED7D7-web.png" title=" " width="500" >}}

または、**ESRI.lib** プロジェクト
フォルダーから選択した図形に直接ルールをドラッグ アンド
ドロップすることもできます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-9D07514A-3D6C-4654-85B5-88A3581A2A9B-web.png" title=" " width="500" >}}

道路モデルがシーンに生成されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-E1D0151C-084D-4E4F-97AB-F040AE195B85-web.png" title=" " width="500" >}}

## 既存の建物との連携

シーンにインポートされたレイヤーの 1
つに、近隣の既存の建物を含む **Buildings_Corktown**
レイヤーがあります。既存の情報を使って、CGA の助けを借りて、それらを 3D
モデルに変換することができます。

続行する前に、**\[Scene Editor\]** で **Buildings_Corktown**
レイヤーを可視化し、他のレイヤーを全て非表示にします。

## オブジェクトの属性

独自の GIS 情報を使用する主な利点と理由の 1 つは、CityEngine
の形状にマッピングされる属性です。このプロジェクトのフットプリント
データには、STORIES (高さ)、DESCRIPTION (屋根形状)、RED、GREEN、BLUE
(建物の色) の 5
つの属性が含まれており、モデルの生成に使用することが可能です。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-ACEBC51B-C5BA-4804-8ED3-6A9E9478EB34-web.png" title=" " width="500" >}}

## デトロイト建物ルールの適用

既存の建物に適用するために、**DetroitBuildings.cga**
ルールを使用します。この作業は、チュートリアルの前半で道路にルールを適用した方法と同じです。**Buildings_Corktown**
レイヤーを右クリックし、**\[Select Objects\]**
をクリックします。ここで、道路の場合と同様に、**\[Inspector\]**
ウィンドウでルールを割り当てるか、**\[Navigator\]** ウィンドウから
**DetroitBuildings.cga**
ルールを選択した建物の図形にドラッグしてください。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-0B2EC8D2-9A2E-4AF7-9317-B183A960F756-web.png" title=" " width="500" >}}

**\[Inspector\]**
ウィンドウからルールを割り当てる場合、唯一の違いは、図形が自動的に生成されないことです。**\[Generate
Models\]** ツール (Ctrl+G) をクリックすると、モデルが生成されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-EC401C38-0218-4D18-B1CC-2985155E5EAF-web.png" title=" " width="500" >}}

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-9617DD5B-1BA7-4E0B-A0FD-40C8657F7DF2-web.png" title=" " width="500" >}}

## 自動フィールド マッピング

3D モデルは、データの作成方法と CGA
ルールの書き方によって、自動的に生成されます。CGA ルールには GIS
データのフィールドと同じ名前の属性が含まれているので、フィールドのマッピングが自動的に行われます。そのためルールを適用するとすぐに、適切な高さに押し出され
GIS の RGB 値に従って色付けされます。また \[DESCRIPTION\] 属性が
\[Single-Family Housing\] に設定されている場合は寄棟屋根が適用されます。

**\[Inspector\]**
ウィンドウを見ると、属性の横に「Object」という単語が斜体で表示されています。これはこの
CGA
属性がオブジェクトまたは図形の属性から値を提供されることを知らせています。**\[Rules\]**
または **\[Object Attributes\]**
セクションで値を変更することにより、これらの属性のいずれかをオーバーライドできることに注意してください。このセクションでは、すべての値を見ることができます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-E7CFC221-641A-4E2C-B5D6-C3AA39A5E7C0-web.png" title=" " width="500" >}}

## レイヤーの名前の変更

建物が押し出され、色付けされた状態で、シーンを整理するためにレイヤーの名前を変更することができます。レイヤーの名前を「**Buildings-Land
Use**」に変更します。レイヤーの名前を変更するには、以下の方法があります。

-   レイヤーの名前をダブルクリックする

-   レイヤーを右クリックし、**\[Rename\]** をクリックします。

-   レイヤーを選択し、**\[Inspector\]**
    ウィンドウに新しい名前を入力します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-4C338F46-5109-4995-B2DE-1D8D858789B5-web.png" title=" " width="500" >}}

## ゾーニング エンベロープ

地域計画担当者は、土地区画に何が建てられるかについて、ゾーニング規制がどのように影響するかを視覚化する必要がある場合がよくあります。CityEngine
ではすでに区画を特定し、道路に設定しているため、このプロセスは簡単です。

次に、区画のゾーニング情報を使ってゾーニング
エンベロープを作成し、必要なセットバックや建物の高さが配置や建設にどのように制限されるかを視覚化するのに役立てます。

**\[Scene Editor\]** を調整し、**Parcels_Corktown**
レイヤーの図形だけが表示されるようにします。

## ストリート エッジの割り当て

CityEngine
が道路ネットワークから作成する図形ではなく、独自の区画データを使用するため、各区画の道路に面したエッジを特定する必要があります。これは、道路に面している区画のエッジを選択し、メイン
メニューの **[Shapes]** → **[Set Street Edges]** 
を選択する手動作業となります。

複数の道路のエッジを一度にドラッグし、選択ボックスを囲めるようにビューを変更します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-C197DDBB-FD26-4426-8D7A-33F8A6D3455C-web.png" title=" " width="500" >}}
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-A64899DA-458F-41A2-BB65-C101A67CE468-web.png" title=" " width="500" >}}

## キーボード ショートカットの設定

このような処理を行う場合、メニューのツールにアクセスするのに多くの時間を費やすことになります。スピードアップのために、ショートカットの設定を検討してみてください。ショートカットを設定するには、メインメニューの
**\[Edit\]** → **\[Preference\]** をクリックします。**\[Keys\]**
を検索します。これにより、メニュー
ツールにキーストローク、またはキーストロークの組み合わせをバインドすることができます。下の例では
**\[Set Street Edges\]** のキーボード ショートカットが Ctrl + Shift + E
に設定されています。これでエッジまたはエッジのグループを選択すると、このキーの組み合わせでエッジが道路エッジに素早く設定されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-B0C0BEB8-F99B-48BD-9DBB-9B664544415C-web.png" title=" " width="500" >}}

## 区画へのルールの適用

すべての区画を選択するには **Parcels_Corktown**
レイヤーを右クリックし、**\[Select Objects\]** をクリックします。

**ZoningEnvelope.cga** ルールは **rules**
フォルダーにあります。これは、ファイル
ジオデータベースの区画の属性データを使用して、セットバック情報を単純なゾーニング
エンベロープに自動的に変換する単純なルールです。

区画を選択した状態で **\[Navigator\]** ウィンドウから区画の 1
つにルールをドラッグします。

## 自動属性マッピング

既存の建物と同様に、区画と **ZoningEnvelope.cga**
ルールは同じフィールドまたは属性で用意されているため、フィールド
マッピングは自動的に行われます。

表と裏が反転している図形に見つけることがあります。これは何らかの理由で道路端が設定されていないためです。これを解決するには、これらの形状の道路エッジを割り当てるプロセスを繰り返します。最終的に下の画像のような仕上がりになります。\
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-A3D0126D-ED9C-4A88-AA96-47D892AC6863-web.png" title=" " width="500" >}}

区画レイヤーが3Dゾーニング
エンベロープになったため、レイヤー名を「**Zoning
Envelopes**」に変更し、シーンの整理に役立てます。

## インフィル開発

HUD
の助成金の一環として、デトロイト市は急速に再開発が進むコークタウン地区に
500
戸以上の手頃な価格の住宅を新たに導入する予定です。過去数十年にわたり、デトロイト土地銀行公社は、街の荒廃した空き物件を生産的な用途にもどすという使命の一環として、老朽化した空き区画を買収してきました。このチュートリアルの次のパートでは、Land
Bank Authority が所有する区画を 3D 開発モデルに変換しています。

## 建物レイヤーの複製

すべてのレイヤーをオフにして、何も表示されないようにします。次に、**\[Scene
Editor\]** で **Buildings-Land Use**
レイヤーをクリックし、選択します。次にメイン メニューの **\[Layer\]** →
**\[Duplicate\]**
をクリックし、レイヤーのコピーを作成します。この新しいレイヤーの名前を「**Buildings--Context**」に変更します。

## コンテキスト レイヤーの準備

**Buildings--Context** レイヤーを右クリックし、**\[Select Objects\]**
をクリックします。すべてのオブジェクトを選択した状態で、**\[Inspector\]**
ウィンドウの **\[Color Mode\]**
オプションを「**White**」に変更します。これにより、既存の建物を目立たなくさせることができます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-AFF5A377-C126-4F6F-A5DA-F257CEE9F78F-web.png" title=" " width="500" >}}

## ランドバンク区画の建物の削除

**Landbank_Corktown** と **Buildings-Context**
レイヤーの可視性をオンにし、他のレイヤーをすべてオフにしてください。ランドバンクが所有する区画にいくつかの建物があります。これらの住宅は、すでに取り壊されているか、取り壊される予定で、新しい建物を建てるために利用できる区画になっていると思われます。シーンを移動して、ランドバンクの区画にある建物を選択し、Delete
キーを押します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-7E5F3D98-0BD9-4191-82B8-E6FEF33C1B2D-web.png" title=" " width="500" >}}
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-194CF6A1-FC80-4284-934C-CA2F1A7D1C04-web.png" title=" " width="500" >}}

## 再開発ルールの適用

**LandBank Corktown**
レイヤーのオブジェクトをすべて選択し、**LandbankDevelopment.cga** ルールを図形またはオブジェクトに適用し、**\[Generate
Models\]** ツール (Ctrl+G) をクリックして 3D
モデルを作成します。このルールでは、市の用途地域規制を区画に適用し、区画に新しい住宅を生成します。

## ストリート エッジの割り当て

区画レイヤーと同様に、**Landbank_Corktown**
の区画のうち、道路に面しているエッジを特定する必要があるからです。これは、前回と同様に、道路に面している区画の端を選択し、メインメニューの
**\[Shapes\]** **→** **\[Set Street Edge\]**
をクリックするだけの手動処理です。この場合も、一度に複数のストリートエッジの周囲に選択ボックスをドラッグして、多くのオブジェクトにストリート
エッジを設定できるようにビューを変更すると、より簡単に行えるかもしれません。シーン内を移動して、すべてのストリート
エッジが設定されていることを確認します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-CDB86050-CE52-403A-A81E-274666D9948D-web.png" title=" " width="500" >}}
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-747F616C-56B8-44B2-940A-6F5E76823AFE-web.png" title=" " width="500" >}}

CityEngineが樹木モデルのために遅くなる場合は **\[Inspector\]**
ウィンドウ でのツリーモデルの表現を **Realistic** から **Fan**
に変更することを検討してください。

## 区画と属性の編集

このルールによって、ほとんどの場合の再開発が可能になりますが、中には現実的な建物が建たないようなユニークな形状の区画も存在しています。これは現実の世界ではよくあることで、不動産が分割や統合される主な理由の1つでもあり、所有者が区画整理の要件に対する許可や緩和を申請する理由でもあるため、ご心配要りません。このチュートリアルの次のパートでは、図形の編集と属性の変更に焦点を当て、開発を完成させます。以下の方法のいくつかは、図形に対して実行され、他には
**\[Inspector\]** ウィンドウで 3D
モデルの属性を調整することに注意してください。F12
キーは、モデルの表示や非表示を切り替える便利なショートカットキーで、編集を行うのに最適な表示状態に切り替えることができます。また
**\[Visibility settings\]** の **\[Models\]**
をクリックし、手動でこれらのオンとオフを切り替えることもできます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-EC192C2C-1F1B-4470-B362-9CE200428C05-web.png" title=" " width="500" >}}

## 大型区画の分割

分割して 2
軒の家を建てることができる大きな土地もあります。図形をクリックして選択します。I
キーを押して選択範囲を孤立させ、選択した区画以外を隠します。次に F
キーを押し、選択範囲を枠で囲みます - 区画を拡大します。**\[Polygonal
Shape Creation\]** ツール (S） をクリックするか、メイン メニューから
**\[Shapes\]** → **\[Polygonal Shape Creation\]**
をクリックします。中点付近の図形にカーソルを合わせると、CityEngine
は描画ツールを線の中点にスナップさせます。クリックすると、線の始点が設定されます。区画を分割したい場所に線を引き、反対側のエッジの中点でスナップし、クリックで線を完成させます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-448A33DE-D84B-42EA-951F-BDA1907B1661-web.png" title=" " width="500" >}}

線が区画を 2
つに分割したように見えても、まだ処理は完了していません。分割を完了するには、メイン
メニューの **\[Shapes\]** → **\[Separate Faces\]**
をクリックして面を分離します。2つの新しい形状が作成されたことになるため、図形が消えます。I
キーをもう一度押して分離モードを終了すると、新しい図形が、他のすべての図形と一緒に、再び表示されます。この作業をシーン全体で繰り返し、大きな区画を
2 つ以上の小さな区画に分割して、インフィル再開発を最大化させます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-084118CB-A7B1-44D3-B86C-419D77798451-web.png" title=" " width="500" >}}

## 小区画のマージ

もう一つの一般的な編集方法は、2 つ以上の図形を 1
つに統合することです。シーンの中には、小さい区画や不規則な形状の区画があり、より適切な区画に統合する必要があります。これを行うには、マージしたい最初の区画を選択し、Shift
キーを押しながら、2 番目の区画を選択するだけです。次に、メニューの
**\[Shapes\]** → **\[Union Shapes\]**
をクリックし、図形を統合します。このプロセスをシーン全体で繰り返し、より現実的な建物を作るために結合すべき
2 つ以上の区画がある場合は、その区画を選択します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-0E87809D-0E9B-41ED-8001-F6F5A466502F-web.png" title=" " width="500" >}}

## インスペクター ウィンドウでセットバックの調整

図形の大きさに満足したところで、家屋や 3D
モデルの中には、予期したような展開にならないものがあるかもしれません。シーンを移動しながら、結果に満足できない事象を見つけます。その形状またはモデルを選択し、セットバックの属性を変更します。基本的には例外を作成し、プランナーはこれを分散と呼びます。これは反復プロセスであり、**ストリート
エッジ**を設定することで前庭の位置を変更する必要がある場合もあります。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-A0921413-FFE2-42A7-97C9-AF1567983800-web.png" title=" " width="500" >}}
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-5283BD93-AAE0-4175-A999-F97FA0F7A97C-web.png" title=" " width="500" >}}

シーンを整理するために、このレイヤーを「**Infil
Redevelopment**」にリネームしてください。また必要ではありませんが、**\[Scene
Editor\]**
でレイヤーをクリックし、上下にドラッグすることでレイヤーを再編成することができます。

モデルがすべて生成され、表示されていることを確認し、シーンは下の画像のようになります。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-20AE8E5D-B933-442E-B12B-5E4C096A9126-web.png" title=" " width="500" >}}

## コンテキストの追加

エクスポートする前に、最後のレイヤーを追加してください。コークタウン地区は、デトロイトのダウンタウンのすぐ西にあり、追加される建物は作成しているシーンにとって役に立ちます。

## 既存の建物データのインポート

チュートリアルの最初に行ったものと同じ方法で、コンテクスト
ビルディングのフットプリントをインポートすることができます。メイン
メニューから **\[File\]** → **\[Import\]** をクリックします。次に
**\[CityEngine Layers\]** → **\[GDB Import\]**
をクリックします。**\[Next\]** をクリックします。プロジェクトの **data**
フォルダーを参照して、**Corktown.gdb** を選択します。最後に
**Buildings_Detroit** レイヤーのみを選択し、**\[Finish\]**
をクリックします。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-C74F7C35-3747-4DDA-96AC-F5C0A4B95CE6-web.png" title=" " width="500" >}}

**Buildings_Detroit**
レイヤーの名前を「**Buildings-Detroit**」に変更します。

## CGA ルールの適用

新しいレイヤーを右クリックし、**\[Select Objects\]**
を選択して新しい建物の足跡をすべて選択します。新しい建物のフットプリントをすべて選択した状態で、**DetroitContextBuildings.cga**
ルールをフットプリントの上にドラッグします。選択したすべての図形にルールが割り当てられ、モデルが生成されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-4ABE2289-B105-4573-9560-23424E7D5036-web.png" title=" " width="500" >}}

## エクスポート

CityEngine は 3D
モデルや画像を共有したり、エクスポートするためのいくつかの方法を提供しています。このチュートリアルでは、画像のエクスポートと
[360 VRExperience](https://doc.arcgis.com/en/cityengine/latest/help/help-export-360vr.htm)
へのエクスポートという 2 つのユースケースについて説明します。

## ブックマークの設定

ブックマークを設定することでカメラのビューを保存し、いつでもその位置に戻ることができるようになります。またブックマークを設定することで
360 VR Experience など、一部のタイプのエクスポート
フォーマットに追加機能が提供されます。

ブックマークを設定するには、**\[Bookmarks\]**
メニューをクリックし、**\[New Bookmark\]** を選択します。

## スナップショットのエクスポート

CityEngine での作業を伝える最も一般的で簡単な方法の 1
つは、レポート、ドキュメント、または ArcGIS StoryMaps
で使用できる画像です。現在のビューのスナップショットをエクスポートするには
**\[Bookmarks\]** メニューをクリックし、**\[Save Snapshot\]**
を選択します。これによって現在のビューがエクスポートされ、エクスポート画像のサイズと場所を変更できるダイアログ
ボックスが表示されます。デフォルトでは **Viewport** のサイズに設定され、
**images** フォルダーに保存されます。スナップショットは **.png** ファイル
フォーマットでエクスポートされます。

## 360 VR Experience のエクスポート

現在のシーンの 360 VR Experience をエクスポートするには、**\[File\]**
**→** **\[Export\]** をクリックします。**\[Export\]** ダイアログ
ボックスが表示され、さまざまな形式でシーンをエクス
ポートできます。**\[Export 360 VR Experience\]**
をクリックし、**[Next]** を選択 します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-A9223491-DB51-446B-ADFF-352C79B277BC-web.png" title=" " width="500" >}}

## 360 VR Experience の設定

**\[Export 360 VR Experience\]** ウィンドウが表示され、**360 VR
Experience** のカスタマイズが可能です。**\[Layer Composition\]**
オプションを使用し、複数のシナリオを構成することができます。各コンポジションで、どのレイヤーを表示するかを設定できます。デフォルトでは、1
つのレイヤー コンポジションのみが追加されます。**\[Layer Composition
Operations\]** で、レイヤー
コンポジションを追加することができます。**\[Bookmarked Views\]**
のチェックボックスが複数あることを確認してください。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-67BB95F8-75EF-4AB5-8EB5-BAF1D5464B08-web.png" title=" " width="500" >}}

このチュートリアルで作成したレイヤーを使って、3
種類のレイヤー合成を用意します。

1.  **Infill Development**
    のコンポジション。レイヤーは道路、建物-コンテクスト、建物-デトロイト、インフィル再開発、航空写真を確認します。

2.  **Zoning Envelopes** のコンポジション。レイヤーは道路、ゾーニング
    エンベロープ、建物-デトロイト、航空写真を確認します。

3.  **Exisiting Landuse**
    の構成。道路、建物-土地利用、建物-デトロイト、航空写真を確認します。

**\[Finish\]** をクリックすると、ファイルが作成されます。

## 360 VR Experience を見る

デフォルトの場所を受け入れた場合、360 VR Experience は、 **models**
フォルダーにエクスポートされます。**\[Navigator\]**
ウィンドウでファイルを右クリックし、**\[Open With\]** **→** **\[3VR Web
Viewer\]** をクリックします。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-9135667B-E9CB-493D-9515-A5B0353C9FE1-web.png" title=" " width="500" >}}

CityEngine 内では、ブラウザ ウィンドウが起動し、VR
を閲覧することができます。しかし、この書き出し形式の真価は、Oculus Quest
などの VR デバイスで、その VR ブラウザを使って見るときに発揮されます。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-D71E2E41-6F87-472A-9AD9-8D6DF8AAA10E-web.png" title=" " width="500" >}}

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/GUID-60D9472E-EF3C-4819-AA5A-69415FAC5080-web.png" title=" " width="500" >}}

他のエッセンシャル チュートリアルもご参照ください。: [CityEngine ツアー](/cityengine/tutorials/essentials/cityengine-tour)と
[ルール ベースのモデリング](/cityengine/tutorials/essentials/rule-based-modeling)

CityEngine の学習を続けるには、[CityEngine チュートリアル](/cityengine/tutorials/)
をご参照ください。

