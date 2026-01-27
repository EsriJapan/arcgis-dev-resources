+++
title = "チュートリアル 16: 都市計画"
description = "CityEngine をどのように典型的な都市計画タスクに利用できるかを学習します。"
Weight = 19
alwaysopen = false
publishDate = 2022-03-23T00:00:00+09:00
draft = false
author = "加藤"
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。  



## 概要
本チュートリアルでは、CityEngine をどのように典型的な都市計画タスクに利用できるかを学習します。  

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-3CD50E51-91B3-4972-8362-AF72E1743259-web.jpg" title=" " width="400" >}}  

## はじめに
本チュートリアルでは、CityEngine をどのように典型的な都市計画タスクに利用できるかを学習します。ここでは、街の中心に 9 つの建物の建設用地がある仮想の開発エリアを例として使用します。最終的なゴールとしては、ショッピングや、居住区、商業区を含めた複合地区をデザインします。本チュートリアルでは、このエリアの用途地域に沿った概略的なデザインを構築します（本チュートリアルは、[Matthias Buehler](https://www.garsdaledesign.co.uk/) および CityEngine を日常的に使用しているスイスの都市計画会社 [SEILER&SEILER](https://seilerseiler.com/)の協力を得て作成されています）。  

当然のことながら、実際の都市計画のプロセスはこのチュートリアルで述べるような簡単な事例ではなく、より高度で複雑です。現実世界では、これらのプロセスは、ステークホルダーの利益や、予算、プロジェクトの期間、流動的なターゲット、インフラの許容量（公共交通機関、供給と廃棄）、周囲の建物、自然保護など、さまざまな制約による影響を受けます。今回の例は 2 時間で行うように簡略化していますが、現実世界では数か月から数年単位の時間を要します。CityEngine はこのような反復的な性質のプロセスを処理するのに特に適しています。CityEngine Web シーンで提案するデザインを共有すれば、クライアントからのフィードバックが容易に得られます。CityEngine の典型的な使用例として、形状や位置の調整、**[Inspector]** ウィンドウによる属性の変更でデザインの改善が簡単にできます。適用結果はすぐに **FAR (延べ床面積)** などの数値レポートに反映されます。  

本チュートリアルでは、ポイントやポリゴン等のフィーチャを出発点とした半自動的ワークフローにおいて、CityEnigne のプロシージャル モデリングがどのように適用されるかを見ていきます。建物の配置パターンを独自にルールで記述しようとすると非常に複雑な CGA コードになってしまうので、本チュートリアルでは、フットプリントを配置するための手っ取り早い手段として、ポイントや手動で作成したフットプリント シェープを使用することを提案しています。特に小から中くらいのサイズの領域であれば、ほとんどの場合、この方法の方が直感的でより柔軟に利用できるはずです。

### 本チュートリアルの概要
- **Urban Planning**: 都市計画タスクを実行するための CGA ファイル
- **Zoning**: 開発エリアにおける用途地域を建物の高さの上限とセットバックで定義し、表示します。
- **Masterplanning**: 上述の用途地域に則した形で建物の敷地の概略的なデザインを構築します。  

CityEngine はこのようにプロジェクトのさまざまな状況や規制、計画工程で使用することができます。


|演習|
|:--|
|・[Part 1: Urban Planning ツール](#part-1-urban-planning-ツール)|
|・[Part 2: ゾーニング](#part-2-ゾーニング)|
|・[Part 3: 土地利用の定義](#part-3-土地利用の定義)|
|・[Part 4: 建物の高さとセットバックの定義](#part-4-建物の高さとセットバックの定義)|
|・[Part 5: ゾーニング定義の反映](#part-5-ゾーニング定義の反映)|
|・[Part 6: マスタープラン](#part-6-マスタープラン)|
|・[Part 7: 2 つのランドマーク建物を追加](#part-7-2-つのランドマーク建物を追加)|
|・[Part 8: 屋外空間のデザイン](#part-8-屋外空間のデザイン)|

## Part 1. Urban Planning ツール
以下は、本チュートリアルで使用する CGA ファイルの一覧です。
### ルール
- **Zoning.cga:** 建物の用地のセットバックや、高さ制限の上限などの土地利用の定義を適用し、フレームとして表示します。
- **Pointmaker_To_FootprintShape.cga:** ポイント マーカー シェープからフットプリント シェープを作成し、**FootprintShape_To_Building.cga** をフットプリントに適用してこれらを立ち上げます。グリッドのサイズ、フットプリントの形状、そして各種属性情報があれば、フットプリントのカスタマイズが容易にできます。ポイント マーカーを描画するには **Shape Creation** ツール ([Viewport] ウィンドウ上、または Shift+S キーを押す) を使用します。建物を回転させるには、R キーを使用してマーカーを回転し、サイズを変更するには、E キーを押します。
- **FootprintShape_To_Building.cga:** フットプリント シェープを押し出し、建物の用途分類を適用します。属性は **Zoning.cga** で定義した用途地域に基づいて建物の各パーツの表示を切り替えます。範囲内に完全に収まらないパーツは赤い色で表示されます。これは、複数のデザインを視覚的確認するときに便利です。
- **スタート ルールを Water bodyに設定したLandscape.cga:** 水域と水域を囲う縁石を生成します。
- **スタート ルールを Trees または TreeAlley に設定した Landscape.cga:** スケマティックな樹木を作成し、さらにサイズや分布タイプ、密度などを変更できます（ノート：TreeAlley は動的な道路シェープで使用されます）。  

{{< callout >}}

・いくつかのルールは、寸法を表示するテキストを生成します。  
・すべてのルールは CGA レポートを生成します。  
・**FAR** 値のレポートを行うには、parcelArea 属性が必要です。属性マッピングについての詳細は、チュートリアル、またはマニュアルをご参考ください。  
・いくつかのルールの中には “スタイル” が定義されています。これらのスタイルは本チュートリアルで定義されたあらかじめ設定されたモデルの例であり、自由にカスタマイズすることができます。スタイルについての詳細は、[チュートリアル](https://doc.arcgis.com/en/cityengine/latest/tutorials/introduction-to-the-cityengine-tutorials.htm)、または[マニュアル](https://doc.arcgis.com/en/cityengine/latest/help/cityengine-help-intro.htm)をご参考ください。  

{{< /callout >}}

スタイルの例:

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-BF295AF6-FB46-4F86-9E96-B34D89C60970-web.jpg" title="スタイルの例" width="400" >}}  

モデルの例:
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-A90221E3-B06F-4B0A-857A-7AB51D3E391C-web.jpg" title="モデルの例" width="400" >}}  

1. **2_UrbanPlanning_Tools.cej** シーンを開きます。
2. [Inspector] ウィンドウでさまざまなルールを変更してどのような設定があるかを確認しましょう

## Part 2. ゾーニング  
ここでは、開発フレームワークの定義に焦点を当てます。通常、各地域や都市には公的機関により定義された特有の用途地域の体系があります。簡略化を行うために、空間的状況（分区圏、都市の構造、隣地）に基づいた開発フレームワークを定義します。まずは、異なる用途地域の割合と配置を定義し、建物の高さ制限とセットバック ラインを指定します。  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-D71D8387-1EB0-4D30-8BF8-C06FEFFBA0FA-web.jpg" title=" " width="400" >}}  

## Part 3. 土地利用の定義
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-B4048124-4395-4096-9484-A0181DE5285A-web.jpg" title=" " width="400" >}}  
ここでは、例として 建物用地 A を使用して、空間的条件によりどのように用途地域が決定されるかを見ていきます。以下は、定義された条件です。  
- 用地 A は開発エリアの玄関口となる場所です。
- エリアの東側を走る主要道路により、多くの自動車や歩行者、自転車などがエリアに流入してきます。  

これらの条件に基づいて、建物の一階部分に入る店舗や、上階のサービス店、建物の裏手の居住区などが並ぶ主要道路に沿って土地用途を計画します。  

1. **3_Zoning_01.cej** を開きます。このシーンは建物の用地や隣地を含みます。[Yes] をクリックすると、CityEngine がすべてのモデルを生成します。
2. 建物用地 A を選択し、F キーを押してズームインします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-9D4C3C84-3A4E-4DCD-842F-1D839C7718C7-web.jpg" title=" " width="400" >}}  
3. Zoning.cga ルール ファイルを割り当てます。
4. **Zoning.cga** から Mixed_Use のスタイルを選択します。
5. レイヤーを表示した状態で 7 キーを押して、ワイヤーフレーム表示に切り替えます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-C6B76166-3D2B-47E8-AC02-CF4E587B5555-web.jpg" title=" " width="400" >}}  

## Part 4. 建物の高さとセットバックの定義
建物の高さの上限を設定します（通常これは既存の建物と用途地域によって定義されます）。  
1. 人や物資の高密度化を許容するため、ゾーニング ボリュームの maxHeight 属性が 50 メートルになっていることを確認します。
{{< callout >}}

太陽光の入射角度を調整し（[Scene Editor] ウィンドウの [scene light] レイヤー）、建物間の空間に直射日光が入るかどうかを確認することができます。ここではこのステップは省略します。

{{< /callout >}}


2. すべてのセットバック距離を 10 メートルに設定し、駐車場や屋外ベンチなどに利用するための屋外の敷地を確保します。  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-D2AB7A0E-A745-4481-925C-883B774FD2AB-web.png" title=" " width="400" >}}  

## Part 5. ゾーニング定義の反映
最初に定義したゾーニング定義が市街地中心部としての十分な密度を確保しているかをテストします。シーン内には既に小さいテスト用のシェープ（Footprint レイヤー）があり、建物を配置するロケータ―（下図の緑の枠内のシェープ）としてこれを利用します。実際ここには 1 つのみの建物が配置されるのではなく、9 つ（3×3 グリッド）の高さ 50 m の多目的タワーを建て、[**Inspector**] ウィンドウの [**Reports**] セクションで **FAR** (延べ床面積) を確認します。  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-DF7FF54B-8D5D-4EB5-A5AB-A4A3A11A0AC2-web.jpg" title=" " width="400" >}}  

1. **3_Zoning_01.cej** を開き、すべてのモデルを生成します。
2. ルール ファイル **PointMarker_To_footprintShape** を中央にある 6 つのフットプリント シェープの 1 つに適用し、モデルを生成します。
3. [mainLength] を「25」に設定し、[mainDepth] を「25」に設定します。
4. [footprintForm]を「Rectangle」に設定します。
5. [gridWidgh] および [gridDepth] を「3」に設定します。
6. [gridDistWidth] および [gridDistDepth] を「35」に設定します。

{{< callout >}}

既に設定されているスタイルを適用することもできます。

{{< /callout >}}

7. [**Inspector**] ウィンドウで [**FootprintShape_To_Building**] セクションを開きます。
8. [numberFloors] を 「13」 に設定します。
9. 建物のレポート結果を確認します。  

現在の **FAR** 値は 0 になっています。正確な値を取得するには、建物が占める用地の面積を入力する必要があります。一番簡単な方法はルール内でユーザー設定値として値を定義することです。以下の操作を行います。  

1. **rules/helpers/reportShapeArea.cga** ルールを用地シェープに一時的に適用します。レポートされた値をメモします。この用地に対しては、40.454m2 となっているはずです（選択したフットプリント シェープによっては値が変わります）。
2. **PointMarker_To_footprintShape.cga** ルールを再度適用します。
3. **FootprintShape_To_Building** ルールの中で、parcelArea の値をユーザー指定の値として「40.445」と入力します。

{{< callout >}}

この値は手動で設定するほか、[**Inspector**] ウィンドウ内でも設定できます。

{{< /callout >}}

4. レポートの **FAR** の SUM フィールドを確認します。**FAR** 値は 1808.1 となっており、市街地中心部の要件を満たしています。  

もちろん、これは大まかなデザイン アプローチですが、これによって **FAR** に応じた施設数をすぐに割り出すことができるのです。ここからはより詳細な建物の配置と、全体的なデザインを詰めていきましょう。  

1. ゾーニング デザインとして **3_Zoning_03.cej** を開きます。
2. 残りの用地のゾーニング ボリュームを自由にデザインしてみましょう。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-A56201A9-606C-4651-A44E-323EAD0B783A-web.jpg" title=" " width="400" >}}  

## Part 6. マスタープラン
ここまでの操作で用途地域の中にスタート地点を定めることができましたので、次は開発エリア全体のスケマティック デザインに焦点を当てます。  

まず、基本的な類型に基づいて初期レイアウトと建物用地の主要な利用用途を選択し、用途地域への適合性を可視化します。次に建物用地の一つに焦点を当て、類型とデザインをさらに改善していきます。最後に屋外空間に焦点を当て、構造要素を追加していきます。

### 概略設計
ここでは、さまざまな用途を定義した L 字型シェープ、U 字型シェープ、長方形の建物シェープが混在した初期レイアウトを準備してあります。これは [**Inspector**] ウィンドウから属性を変更することによりデザインを簡単にカスタマイズできますが、用途値の構成やフットプリントの形状、グリッド上の配列などに対してあらかじめ設定してあるスタイルを使用することで、この作業をより簡単に行うこともできます。  

1. 初期シーンとして [**4_Masterplannning_01.cej**] ファイルを開きます。
2. [Inspector] ウィンドウでfootprintForm（SHAPE_BASED_BUILDING の各属性）、GRID（GRID の各属性）、FootprintShape to Building （FootprintShape_To_Building のスタイル）等を変更して結果を確認します。[**Inspector**] ウィンドウから **Reports** セクションを開き、建物の形態を変更したとき、**FAR** などの数値がどのように自動的に更新されるかを確認します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-D7EF7612-4ADA-4349-BA80-51C8176B0CDE-web.png" title=" " width="400" >}}  
3. フットプリント シェープを L 字型の建物に変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-C1022BDF-67E0-4D02-AAC1-E853264C3B36-web.png" title=" " width="400" >}}  

ではここで、建物にルールを適用して用途地域に反している建物がないかを可視化します。建物の一つを選択し、建物の高さを制限に反する値、例えば 20 階建てなどに変更します。するとこの建物は用途地域で許容されている高さ制限の上限を超えることになり、赤色になります。  

本チュートリアルの建物ルールには、例えば建物の総容積など、建物を実際にデザインするための属性がいくつか含まれています。建物の全体の高さを使用して建物の各部分を切り離して最低限の建物のデザインを行います。ここからの作業では volumeChangeFloorID、columeChangeRotation、relVolumeChangeSplit の3 つの属性を使用します。  

1. 建物の 1 つを選択します。
2. [visuallizeBrokenLaw] を「**Enable**」に設定します。
3. [numberFloors] の数を「20」に変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-D05E0A80-9833-4852-BAA2-0436267249B2-web.jpg" title=" " width="400" >}}  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-18F1958C-E763-45E5-882E-FD320DF15EBA-web.jpg" title=" " width="400" >}}  

## Part 7: 2 つのランドマーク建物を追加
建物用地の中心にズームインし、将来的に開発エリアの玄関部分となる場所をデザインします。隣接する 2 つの建物のデザインを変更してランドマークとします。**4_Masterplannning_02.cej** ファイルを開くとこれらの結果を見ることができます。

1. **4_Masterplannning_02.cej** ファイルを開き、すべてのモデルを生成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-6A8C6F62-9B78-44A6-86C0-F260ED1B6658-web.jpg" title=" " width="400" >}}  
2. L 字シェープの建物の [numberFloors] を 「13」 に変更し、[volumeChangeFloorID] を 「5」 に変更します。
3. [volumeChangeRotation] を 「330」 度に設定します。
4. [relVolumeChangeSplit] を 「0.5」 に変更します。これは建物の 5 階以上の形状を少し切り詰められたタワー型に変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-3CD50E51-91B3-4972-8362-AF72E1743259-web.jpg" title=" " width="400" >}}  
5. 一文字型の建物の [numberFloors] を「13」に変更し、[volumeChangeFloorId] を「5」に変更します。
6. [relVolumechangeSplit] を「0.7」に設定します。この属性でタワーを分割し、上部の容積の 70% (0.7 倍) を削除します。  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-9EDAC39B-8853-47D1-A3A4-8EE155C2E2E9-web.jpg" title=" " width="400" >}}  

## Part 8: 屋外空間のデザイン
4_Masterplanning_03.cej は屋外空間の基本デザイン結果を示しています。次の段階では、さらにズームインして開発エリアのちょうど入り口に位置する場所の屋外空間をデザインして行きましょう。エリアの入り口には池や樹木を追加して、空間の快適さを増します。

1. **4_Masterplanning_03.cej** ファイルを開き、屋外空間を確認します。
2. まずは単純なプールの作成から始めます。四角形のシェープを作成し [**Waterbody**] をスタート ルールとして設定した [**Landscaping.cga**] ルール ファイルを適用します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-A350B4A6-46D8-4D0D-B76F-3209C0B91F60-web.jpg" title=" " width="400" >}}  
3. 今回の架空の都市では、夏には気温が少し上がることが予想されています。そのため、道路に沿って樹木を配置します。
4. Landscaping ツールを使用して、自由に屋外空間をデザインしてみましょう。
5. もしどうすればよいかわからない場合は、**4_Masterplanning_04.cej** ファイルを開き、模範例を見てみましょう。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-E5BB97BE-E143-4760-901F-C7637F4CC0C9-web.jpg" title=" " width="400" >}}  
6. 視点を変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-16-urban-planning/GUID-677A5350-CC3A-4B4D-9502-BA82AD3F1FD6-web.png" title=" " width="400" >}}  

本チュートリアルでは時間も限られているため、このような小さな概略的なデザインに焦点を当てましたが、実際の都市計画のシナリオにおいても CityEngine で実施可能な有用な方法をいくつか示すことができたことと思います