+++
title = "サンプルの活用"
description = "サンプルの活用と利用方法について解説します。"
Weight = 6
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷"
draft = false 
+++

## 概要
[テクスチャーの適用]({{% ref "/cityengine/get-started/quickstart-tutorials/apply-texture" %}} "テクスチャーの適用")の建物モデルについては、テクスチャーを貼り付けてより見栄えの良いものにしましたが、道路についても、ArcGIS Online で共有されているサンプル データを活用することで、簡単にリアリティーを増すことができますので、その方法を紹介します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/sample2.png" title="サンプル データの活用" width="700" >}}

|演習|
|:--|
|・[サンプル データの入手](#サンプル-データの入手)|
|・[サンプル データの利用](#サンプル-データの利用)|
|・[編集したサンプル データの利用](#編集したサンプル-データの利用)|
|・[ルールの属性を変更](#ルールの属性を変更)|
|・[その他のサンプル](#その他のサンプル)|
|・[補足 Download Tutorials and Examples からサンプル データをダウンロード](#補足-download-tutorials-and-examples-からサンプル-データをダウンロード)|

## サンプル データの入手
CityEngine のサンプル データは、現在使用している「Esri.lib」や「City Wizard」に含まれるもの以外にも、[Help] メニュー → [Download Tutorials and Examples] から取得できる Tutorials や Examples、Esri のオンライン サービスである「ArcGIS Online」から入手できるものがあります。<br>
ここでは、Download Tutorials and Examples から入手する方法をご紹介します。

#### CityEngine アプリケーションからダウンロードする
1. Help メニュー → [Download Tutorials and Examples] を選択します。
2. 表示されたダイアログから、[Example Complete Streets 2025.0] チェックボックスをオンにし、[Download] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20250801_p14.png" title="Example_Complete_Streets__2025_0のダウンロード" width="700" >}}

3. しばらくすると Navigator ウィンドウにダウンロードした [Example Complete Streets 2025.0] が表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20250801_p11.png" title="フォルダーの選択" width="500" >}}

Example Complete Streets には高度な道路用 CGA ルール ファイルが格納されています。Navigator ウィンドウ上にあるプロジェクトのルール ファイルは、そのまま他のプロジェクトにも適用できます。

## サンプル データの利用
1. [Scene] ウィンドウの Streetnetwork レイヤーを展開し、Blocks レイヤーの表示チェックボックスをオフにして非表示にします。

2. Network レイヤーを選択した後、[Select] メニュー [Select Objects in Same Layer] を選択するか、または [3D View] ウィンドウで [Selection] ツールを使い、道路ネットワークをすべて選択します。<br>
ここで、[Inspector] ウィンドウを開き、パラメーターを確認します。<br>
現在適用されているルール ファイル (Street_Modern_Standard.cga) は、Esri.lib に格納されている簡単な道路のルール ファイルですので、パラメーターも多くありません。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/road-rule-parameter2.png" title="道路ルール パラメーター" width="900" >}}

では、次に Complete_Street.cga という道路用のルール ファイルを適用してみましょう。

3. [Navigator] ウィンドウ → [フォルダー] タブ→ Example_Complete_Streets__2025_0 プロジェクト → rules フォルダー → Complete_Streets フォルダー → Complete_Street.cga ルール ファイルを、選択した道路ネットワークにドラッグ & ドロップします。[Set Start Rule] ダイアログが表示された場合は、[Apply to all selected shapes] を選択し [OK] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p2.png" title="[Set Start Rule] ダイアログ" width="700" >}}

4. 自身のプロジェクトの道路に Complete_Street.cga の道路ルールが適用されました。<br>
[Inspector] ウィンドウを開き、パラメーターを確認します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p12.png" title="パラメーター" width="500" >}}

先ほどの Street_Modern_Standard.cga のルール ファイルと比べて、パラメーター数がかなり多いことが確認できます。<br>
これは、道路に関する詳細な設定が行えるということになります。見た目では違いが分かりにくいので、道路幅を広げます。

5. 道路を選択した状態で [Inspector] ウィンドウの [Segments] タブ [Segment Width] で値を「12」に変更します。または、ツールバー上の [Streets Designer] ツールで対話的に変更しても構いません。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p3.png" title="道路幅" width="500" >}}

6. [Inspector] ウィンドウの [Segment] タブで、他のパラメーターを任意に変更していきます。<br>
例えば、 [CENTER SECTION LAYOUT] → [Basic Attributes] → [Center_Type] を [White Centerline] に変更すると、中心線の色が変わります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p4.png" title="中心線 Yellow" width="900" >}}

このように Esri が提供しているサンプルなどを使用すれば、高度なルールファイルを自身のシェープに適用して、簡単にモデルを作成することができます。

しかし、今回の Complete_Street.cga ルールで使用される素材 (アセット) は西洋的なものが多いので、日本を想定したモデル空間に適用するとしっくりこない場合があります。そんな時は、ルール ファイルを少し編集して、日本風にすることができます。<br>
続いては、Complete_Street.cga ルールを編集した Complete_Street_jp.cga ルールと日本の道路標示等のアセットを使用し、かつ電線などを生成するルールも使用することで日本の景観を再現します。

## 編集したサンプル データの利用

#### 使用するアセットの変更

シーンを日本風にするために Complete_Street_jp.cga ルールを適用する前にアセットを日本のテクスチャのものに変更します。

{{< callout >}}

これから行う作業によって先の Complete_Street.cga ルールを使用した際に、右側通行の道路に日本の道路標識が適用されたシーンとなってしまう可能性があります。<br>
完全に戻したいという場合は、[Navigator] ウィンドウで Example Complete Streets 2025.0 プロジェクトを一度削除し、前述の「サンプル データの入手」を参考に再度 ArcGIS Online よりダウンロードしてください。

{{< /callout >}}

1. 以下の ArcGIS Online のページから日本語用サンプル データを任意の場所にダウンロードします（サポート ページへのログインが必要です）。<br>
[Example_Complete_Streets 日本対応ファイル](https://ej.maps.arcgis.com/home/item.html?id=7d75a96ec2ea40efb9f494a5f8263584)

2. ダウンロードした Zip ファイルを展開し、中に格納されている assets フォルダーと rules フォルダーをワークスペース内の Example_Complete_Streets_2025_0 フォルダーにコピー & ペーストし、上書き保存します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p5.png" title="データの上書き" width="700" >}}

3. CityEngine を再起動し、[Scene] ウィンドウの Streetnetwork レイヤー → Network レイヤーを選択し、右クリックで [Select Objects] を選択するか、[3D View] ウィンドウで [Selection] ツールを使い、道路ネットワークをすべて選択します。

4. [Navigator] ウィンドウの Example_Complete_Streets_2025_0 プロジェクト → rules フォルダー → Complete_Streets フォルダー → Complete_Street_jp.cga ルール ファイルを、選択した道路ネットワークにドラッグ & ドロップします。[Set Start Rule] ダイアログが表示されますので、[Apply to all selected shapes] を選択し [OK] をクリックします。<br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p6.png" title="[Set Start Rule] ダイアログ" width="500" >}}

下図のように右側通行から左側通行に、英語表記から日本語表記に変わり、電柱・電線を生成したりすることができるようになりました。<br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/edits.png" title="モデルの生成" width="700" >}}

このようにルール ファイルやアセットを変更するだけで、一から作成しなくても、自分の目的に合わせてモデルを生成することができます。

## ルールの属性を変更
道路ネットワークに適用した Complete_Street_jp.cga には、様々なパラメーター (属性) が用意されており、[Inspector] ウィンドウで直接入力やスライダーバー、プルダウン メニュー等で値を変更することができます。

1. 道路が選択されていない場合は、再度 [Scene] ウィンドウで Streetnetwork レイヤーを右クリックし、[Select] メニュー → [Select Objects] を選択してすべての道路ポリゴンを選択します。

2. [Inspector] ウィンドウで属性を変更します。属性には例えば次のような項目があります。

#### 中央分離帯を作成
1. Complete_Street_jp / CENTER SECTION LAYOUT / Basic Attribute / Center_Type を [Barrier] に変更します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p7.png" title="中央分離帯" width="900" >}}

#### 街路樹の表示
2. Complete_Street_jp / CENTER SECTION LAYOUT / Basic Attribute / Center_Type を [Median] に変更し、Center_Width を「2 m」に設定します。<br>
中央分離帯に、自動的に街路樹が生成されます。<br>
3. Complete_Street_jp / CENTER SECTION LAYOUT / Median Plantings / Median_Tree_Spacing を「5 m」に変更します。<br>
また、[Median_Tree_1_Type] で任意の樹木タイプに変更します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p8_v1.png" title="樹木" width="900" >}}

#### 自動車や歩行者の表示
4. Complete_Street_jp / POPULATION / Vehicles_per_km (車線上 1 km 区間あたりの車の台数) を「20」にします。<br>
また、[Sidewalk] タブに変更し、Complete_Street_jp / POPULATION / People Percentage (歩道上の単位エリアでの人の存在確率) を「30 %」にします。<br>
数値を大きくすると表示モデルが増えてパフォーマンスが遅くなりますので注意してください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p9.png" title="自動車や歩行者" width="900" >}}

#### 電柱・電線の表示
5. Complete_Street_jp / Power Lines Construction / Show_Power_Lines を [Enabled] にすることで、電柱と電線が表示されます。<br>
6. Complete_Street_jp / PowerLines / poleDiam で電柱の太さを設定できます。<br>
7. Complete_Street_jp / PowerLines / poleDist で電柱の間隔を設定できます。<br>
8. Complete_Street_jp / PowerLines / powerlineLineHeight で電線の高さを設定できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/Show_Power_Lines_240717.png" title="電柱や電線" width="900" >}}

#### ガードレールの表示
9. Complete_Street_jp / GuardRailsImport / guard_rails を [Enabled] にすることで、ガードレールが表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/20240722_p10.png" title="ガードレール" width="900" >}}

他にも様々な項目がありますので、設定を変更してみてください。<br>
道路の設定が終了したら、[Scene] ウィンドウの Streetnetwork レイヤーを展開し、Blocks レイヤーのチェックボックスをオンにし、区画を表示させます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/street-network2.png" title="ストリート ネットワーク" width="500" >}}


## その他のサンプル
ArcGIS Online には、他にも砂漠の都市 (Example Desert City) やベニス (Example Venice)、ポンペイ (Example Pompeii)、未来のニューヨーク (Example NY2259)、中世の都市 (Example Medieval City)、破壊された街 (Example Downtown Damage) などのサンプルがありますので、これらに含まれるルールを適用してみると、様々な都市の景観を表現することができ、面白いと思います。<br>
ちなみに、先ほど使用した Complete_Street_jp.cga の中の電柱と電線も、Example Desert City のルールをほとんどそのまま移植したものです。<br>
このようなルールを自分で 0 から書くのは大変ですが、どのサンプルにどういうルール (モデル) があるのか、頭の片隅にでも入れておけば、それを利用して楽をすることができます。<br><br>
ESRIジャパンが作成したサンプル ルールは、ルール パッケージ (RPK) としても ArcGIS Online で共有されています。<br>
[ESRIジャパン製のルールパッケージ全集](https://arcg.is/Lqy1S) <br>
各ルールの適用方法はコンテンツの詳細ページをご確認ください。

## 補足 Download Tutorials and Examples からサンプル データをダウンロード
ここでは [Help] メニュー → [Download Tutorials and Examples] から Tutorials や Examples を取得する方法をご紹介します。

#### サンプル データのダウンロード

1. [Help] メニュー → [Download Tutorials and Examples] を選択します。
2. 表示されたダイアログから、任意のサンプル データのチェックボックスをオンにし、[Download] をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/checkbox3.png" title="チェックボックス" width="700" >}}

3. しばらくすると [Navigator] ウィンドウにダウンロードしたプロジェクトが表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/utilize-sample/navigator-window2.png" title="[Navigator] ウィンドウ" width="700" >}}
このプロジェクトにある CGA やアセットが利用可能です。
また、[Navigator] ウィンドウ上にあるプロジェクトのルール ファイルは、そのまま他のプロジェクトにも適用することができます。

このように Esri が提供している Tutorials や Examples 等のサンプルを使用し、高度なルールファイルを自身のシェープに適用して、簡単にモデルを作成することができます。