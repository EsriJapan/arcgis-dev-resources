+++
title = "ArcGIS Urban との統合機能"
description = "ArcGIS Urbanとの統合機能を学習します。"
Weight = 5
alwaysopen = false
publishDate = 2024-12-11T00:00:00+09:00
draft = false
author = "森"
+++

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-82A11357-2298-46A9-93F9-D1C9CD00F9F5-web.png" title=" " width="1000" >}} 

## 概要
ArcGIS Urban と ArcGIS CityEngine は、都市計画者、デザイナー、GIS アナリスト、3D ビジュアル アーティストに対して、世界中の都市コミュニティに持続可能な影響を与えるための協力的な都市計画システムを提供します。このワークフローでは、CityEngine の ArcGIS Urban 統合ツールセットを使用して、[Boston model](https://urban.arcgis.com/?id=642003449ecb4c20a26e19d7bc9ccaf1&rsource=https%3A%2F%2Flinks.esri.com%2Fcityengine%2Furban-boston-example) 内の ArcGIS Urban プランの区画と地形を強化します。

始める前に、次のものが揃っていることを確認してください。

-   [CityEngine の要件](https://doc.arcgis.com/en/cityengine/latest/get-started/cityengine-system-requirements.htm)と [ArcGIS Urban の要件](https://doc.arcgis.com/en/urban/latest/get-started/get-started-system-requirement.htm)を満たす適切なシステム。
-   ArcGIS Urban ライセンス。詳細については、[ArcGIS Urban のセット アップ](https://doc.arcgis.com/ja/urban/latest/get-started/get-started-setting-up.htm)を参照してください。
{{< callout >}}

ArcGIS Urban のライセンスをお持ちでない場合は、[トライアル](https://www.esrij.com/products/trials/)より「ArcGIS （ArcGIS Online, ArcGIS Pro, エクステンション）」を選択して、お申し込みください。
{{< /callout >}}


|演習|
|:--|
|・[CityEngine で ArcGIS Urban プラン シナリオを操作](#cityengine-で-arcgis-urban-プラン-シナリオを操作)|
|・[ナビゲートとブックマークの設定](#ナビゲートとブックマークの設定)|
|・[ArcGIS Urban に変更を保存](#arcgis-urban-に変更を保存)|
|・[ArcGIS Urban から更新を取得](#arcgis-urban-から更新を取得)|
|・[シナリオの地形を編集して公開](#シナリオの地形を編集して公開)|
|・[イメージ レイヤーをエクスポートして共有](#イメージ-レイヤーをエクスポートして共有)|
|・[次のステップ](#次のステップ)|

## CityEngine で ArcGIS Urban プラン シナリオを操作

ArcGIS Urban のプランは、長期的な都市計画シナリオを設計および評価するために使用されます。プランは、複数の街区から地区全体に及ぶ規模の調査エリアをカバーし、規制ゾーニング パラメーター内での建設可能性を描写します。シナリオを使用すると、プランの異なるバージョンを比較および分析できます。これらのプラン シナリオは、CityEngine で操作できます。

### ArcGIS Urban のプランのコピーを作成
まず、ArcGIS Urban のプランのコピーを作成します。

1. [ArcGIS Urban](https://urban.arcgis.com/) にサイン インします。
2. **[例を使ってみる]** ボタンまでスクロールし、**[例を開く]** をクリックして、[[Example Boston, MA USA]](https://urban.arcgis.com/?id=642003449ecb4c20a26e19d7bc9ccaf1&rsource=https%3A%2F%2Flinks.esri.com%2Fcityengine%2Furban-boston-example) モデルを開きます。
3. 概要で [[プラン]](https://doc.arcgis.com/ja/urban/latest/get-started/get-started-plans.htm) をクリックして、利用可能なオプションを確認します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-ACF60E61-9AC4-4A63-B48A-4A351E4A9DBB-web.png" title=" " width="500" >}}
4. **[South Boston Dot Ave]** プランをクリックして開きます。
5. **[コピーの作成]** をクリックして、機能をフルに活用できるように自分用のコピーを作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-4D08E949-DAB1-47F6-8A87-10D84FC53628-web.png" title=" " width="500" >}}
6. **[名前を付けてプランを保存]** メニューで、**[名前]** ボックスを [South Boston Dot Ave - ArcGIS Urban Integration] に変更します。
7. **[プランを別の Urban Model に保存]** オプションがオフになっていることを確認します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-6E83116B-039E-4F67-8120-C6BCBDC0E286-web.png" title=" " width="500" >}}
8. **[OK]** をクリックします。
プランが正常にコピーされるのを待ち、後でチュートリアルで変更を参照できるように ArcGIS Urban を開いたままにします。
{{< callout >}}

この新しいプランの所有者はあなたになります。つまり、オンライン コンテンツにコピーが保存されます。このチュートリアルを完了した後、不要になった古いプランは削除して、良好なデータ管理を維持するようにしてください。

{{< /callout >}}

### Web 共有のための CityEngine でのサイン イン
次に、Web 共有のために CityEngine にサイン インします。

1. CityEngine を開きます。
1. **[Sign in]** をクリックして、ArcGIS Online（または Enterprise アカウント）にサイン インします。ここには、CityEngine で開く ArcGIS Urban プランが含まれています。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-D23C3DB4-96EA-4D76-B121-B89C5F38BE19-web.png" title=" " width="500" >}}
1. ユーザー名とパスワードを入力してサイン インします。
{{< callout >}}

サイン インすると、アイコンが緑色になり、所有またはアクセスできるすべての ArcGIS Urban プランを含む ArcGIS Online ホスト アイテムに接続できます。

{{< /callout >}}
{{< callout >}}

 CityEngine をダークモードに切り替えるには、メインメニューで **[Edit]** → **[Preferences]** → **[Appearance]** → **[Theme: Dark]** をクリックします。

{{< /callout >}}

### CityEngine への ArcGIS Urban プランのインポート
ArcGIS Urban プランを CityEngine にインポートします。
1. CityEngine で、メインメニューの **[Window]** → **[Layout]** → **[Default Layout]** をクリックします。 これにより、このチュートリアルに必要な CityEngine レイアウトが表示されます。
1. [[Navigator]](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm) ウィンドウで [ArcGIS Urban] をクリックします。
1. ドロップダウン メニューで **[My content]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-4159C6E7-CFCF-4A1F-A41B-E07B8AAC31A3-web.png" title=" " width="500" >}}
1. [South Boston Dot Ave – ArcGIS Urban Integration] プランを右クリックし、**[Import as new Scene]** をクリックします。 プランが CityEngine にインポートされ、[South Boston Dot Ave – ArcGIS Urban Integration] シーンが [[Viewport]](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm) ウィンドウに表示されます。[ArcGIS_Urban_Example Boston, MA USA] モデルは、**[Navigator]** ウィンドウで CityEngine プロジェクトとして表示されます。これを後で使用します。
1. [[Scene Editor]](https://doc.arcgis.com/en/cityengine/latest/help/help-scene-editor.htm) ウィンドウで、さまざまなシナリオを探索するためにクリックします。[Existing Conditions (Exis)] がデフォルトで選択されているシナリオです。**[Scene Editor]** ウィンドウには、ArcGIS Urban で開発されたさまざまなシナリオが一覧表示されます。将来の開発シナリオは、ゾーニング コードの要件、指標、およびその他の規制基準に基づいて生成されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-8731CD75-C3DE-4878-9EB9-A177BACFBF8F-web.png" title=" " width="500" >}}

### カメラとビューポート設定の更新
フロアのエッジが自動的にレンダリングされて別々のスペースを表示しないことに気付いたかもしれません。CityEngine では、**[Viewport]** ウィンドウでビュー設定を随時変更する柔軟性があります。これにより、ArcGIS Urban プランの事前定義されたエッジ ジオメトリを **[View settings]** ツールで探索できます。

1. CityEngine の **[Scene Editor]** ウィンドウで、[Refined] シナリオをアクティブにします。デフォルトのビューは、ファザードが色で一般化されたビューが表示されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-2DA045DB-6D53-4DD0-87CC-54372B68BF31-web.png" title=" " width="500" >}}
1. **[View settings]** ツールをクリックします。

　　　  a. **[Wireframe on shaded/textured]** をクリックするか、7 キーを押して床を表示します。

　　　  b. **[Compass]** をクリックするか、D + C キーを押してコンパスを表示します。

　　　  c. **[Grid]** をクリックするか、D + G キーを押してグリッドをオフにします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-BEB9E4C7-A2E5-4628-B6A4-106D2F6EC383-web.png" title=" " width="500" >}}
3. さまざまなオプションを探索し、上記のビュー設定をコピーします。 シーンは、ArcGIS Urban モデルで表示されるようにフロアのエッジを表示します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-EC1791D0-7307-4DDC-B078-05DD8359C5FB-web.png" title=" " width="500" >}}

## ナビゲートとブックマークの設定
いくつかのショートカットとブックマークを使用すると、区画編集のワークフローを実行する際にナビゲートが容易になります。以下のヒントを使用して、このチュートリアルのために **[Viewport]** ウィンドウを設定します。
1. CityEngine の [Scene Editor] ウィンドウで、[Refined (Refi)] シナリオをアクティブにします。
1. **[Viewport]** ウィンドウをクリックしてアクティブにします。
1. Shift + N キーを押して、プランのトップ ビューにナビゲートし、北に向けます。
1. A キーを押してプランの範囲をフレームに収めます。
1. **[Bookmarks]** で **[New Bookmark]** をクリックします。
1. 新しいブックマーク名を [Top View] として保存します。
1. ズーム インして、プランの北部にある大きな区画にナビゲートします。
1. 区画を選択します。
1. Shift キーを押しながらクリックして、その下にある小さな三角形の区画も選択します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-4BD6F4A3-1AF9-4B9A-845B-03DBDF841F8B-web.png" title=" " width="500" >}}
1. F キーを押してそのエリアをフレームに収めます。
1. **[Bookmarks]** で **[New Bookmark]** をクリックします。
1. 新しいブックマーク名を [Parcel Editing] として保存します。
ブックマークは、CityEngine シーンの異なるシナリオ間で同じままですが、このチュートリアルでは [Refined] シナリオに焦点を当てます。以下の手順で場所を見失った場合は、これらのブックマークを使用して **[Viewport]** ウィンドウ内の編集場所に戻ります。
1. **[File]** → **[Save All]** をクリックし、次のチュートリアル部分のために CityEngine を開いたままにします。

## ArcGIS Urban に変更を保存
CityEngine でポリゴン編集のワークフロー、プロシージャルで生成された分割、オフセット、または属性変更を使用して計画シナリオの区画を編集した後、このツールを使用してそれらの変更を ArcGIS Urban アプリに保存できます。

{{< callout >}}

ArcGIS Urban ですでに開発が計画されている区画を CityEngine で手動で編集しないでください。編集すると、編集された区画が ArcGIS Urban に接続されなくなり、更新できなくなる可能性があります。

{{< /callout >}}

### 既存の区画を分割
CityEngine のポリゴン ツールを使用すると、手動編集のワークフローが可能になります。これには、解体された区画のシェープを分割し、変更を ArcGIS Urban アプリに保存する機能が含まれます。
既存の区画を分割するには、次の手順を完了します。

1. [Refined] シナリオで、**[Inspector]** ウィンドウの **[Parcel Attributes]** セクションを展開し、**[Demolish]** を [true] に設定して建物を削除します。
1. [Parcel Editing] エリアで小さな区画をクリックして選択します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-A2F2F304-508D-4AAF-87C9-E80BE2745F88-web.png" title=" " width="500" >}}
1. **[Scene Editor]** ウィンドウで、[Spaces] と [Zoning] レイヤーのチェックを外します。
1. 区画のシェープを手動で分割するには、**[Polygonal Shape Creation]** ツール (S) をクリックし、選択した区画の側面エッジを一度クリックします。
{{< callout >}} 

デフォルトでは、**[Polygonal Shape Creation]** ツール オプションでスナッピングが有効になっています。

{{< /callout >}}

5. 区画の反対側のエッジをダブルクリックして区画を分割します。2 つの新しいシェープが作成されます。
1. 2 つの新しいシェープを選択した状態で、メイン メニューの **[Shapes]** → **[Separate Faces]** をクリックします。
1. 分割された区画の 1 つを選択して **[Inspector]** ウィンドウをアクティブにします。
1. **[Inspector]** ウィンドウの **[Parcel Attributes]** セクションで、[Development Type] ドロップダウン メニューをクリックし、[Set Building Type] をクリックします。[Building Type] オプションが表示されます。
{{< callout >}} 

[Development Type] が [None] に設定されている場合、建物のタイプは生成されません。

{{< /callout >}}

9. [Building Type] ドロップダウン メニューをクリックし、[Community Center] を選択します。
1. もう 1 つの新しいシェープについて、[Development Type] を [Set Building Type] に更新し、[Building Type] を [Low-Rise Office] に設定します。 分割された各区画を個別に選択して、 **[Inspector]** ウィンドウで更新された属性を表示できます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-EB585D84-B66F-4E5A-A7FE-11BA97BC1C8B-web.png" title=" " width="500" >}}
1. **[File]** → **[Save All]** をクリックし、CityEngine を開いたままにします。
{{< callout >}} 

開発が適用されるプレビューは、ArcGIS Urban に上書きされるまで表示されません。CityEngine で変更を適用する際に確認するには、**[Navigator]** ウィンドウの [ESRI.lib\rules\Urban\V1.3.5] フォルダーにある [.urban.rpk] ルール パッケージ ファイルを **[Scene Editor]** ウィンドウの [Parcels] レイヤーに割り当てる必要があります。

{{< /callout >}}


### 分割の構成
CityEngine は、シェープをプロシージャルおよび手動で操作し、大量の異なる区画設定を生成することができる非常に強力なアプリケーションです。このセクションでは、分割および結合ツールを使用して、混合用途の空間タイプの Transit Oriented Development (TOD) ブロックを設計し、区画のジオメトリを作成および編集します。区画の編集が完了したら、変更を ArcGIS Urban アプリに保存します。

1. [Refined] シナリオで、**[Bookmarks]** メニューのブックマークから [Parcel Editing] をクリックします。区画のさらに北にある大きな区画を分割して開発します。
1. 区画を選択します。


1. メインメニューで **[Shapes]** → **[Subdivide]** をクリックします。


1. **[Subdivide]** ダイアログ ボックスで、次のパラメーターを入力します。
-   **Lot subdivision method**: Offset Subdivision
-   **Min. lot area**: 2000
-   **Max. lot area**: 5000
-   **Min. lot width**: 20
-   **Irregularity**: 0.1
-   **Force street access**: 0
-   **Offset width**: 25
-   **Corner width**: 5
-   **Max. corner angle**: 30
-   **Alignment**: Even at minimum
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-F3283624-AC44-40E8-9108-5D8B541AA934-web.png" title=" " width="500" >}}
5. **[Apply]** をクリックし、**[Close]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-95FD2CF3-38AD-4379-AAA6-600A502C50C2-web.png" title=" " width="500" >}}

1. **[Select tool (Q)]** をクリックします。
1. [Shift] を押しながらクリックして、ロット構成の中央にある複数のシェープを選択します。
1. メイン メニューで **[Shapes]** → **[Union Shapes]** をクリックして、中央に 3 つのユニークなシェープを作成します。
1. 区画を選択して分割し、ロット構成の外周に沿って面を分離またはシェープを結合して、簡略化された建物のフットプリントを作成します。 次の画像をガイドとして使用してください。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-C712B823-B7C6-4697-8BD4-7A6ADD73E531-web.png" title=" " width="500" >}}
1. **[Development Type]** ドロップダウン メニューで [Set Building Type] をクリックします。
1. **[Building Type]** ドロップダウン メニューをクリックして、上記の画像に一致する開発オプションを選択します。
1. **[File → Save All]** をクリックします。
1. メイン メニューで **[ArcGIS Urban]** → **[Save Changes to Urban]** をクリックします。
1. **[Refined]** チェックボックスをクリックし、**[Overwrite]** をクリックします。
1. **[ArcGIS Urban]** → **[Open in web browser]** をクリックして、ArcGIS Urban アプリでプランを表示します。
1. ArcGIS Urban アプリで、**[Zoning]** タブに切り替え、スクロール ダウンして **[Reapply all building types]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-B24FBABA-40E5-4F90-8DED-CF6BF7CA0883-web+(1).png" title=" " width="500" >}}

## ArcGIS Urban から更新を取得
CityEngine を使用して ArcGIS Urban での進行中の変更と並行して作業する場合、**[Get Changes from Urban]** ツールを使用して CityEngine シーンを上書きできます。ただし、区画編集を超えてファサードの詳細化、街路ネットワーク、緑地などの都市設計ワークフローを実装し始める場合は、ArcGIS Urban からインポートしたシナリオのコピーを作成し、そのコピーで作業するのが最良の方法です。**[Get Changes from Urban]** ツールは、CityEngine の区画属性と建物スペースを ArcGIS Urban アプリのオンライン内容に一致するように上書きします。

インポートされた元のシナリオは、チュートリアルで説明した統合ツールを使用して構成された指標に影響を与える区画の更新のため、ArcGIS Urban に接続されたままになります。推奨されるシナリオ コピーは、ArcGIS Urban との更新のやり取りから切り離され、設計作業の上書きが避けられます。設計を共有する準備ができたら、**[Publish Selected Models to Scene Layer]** ツールと **[Open in web browser]** ツールを使用して、シナリオでそれを表示します。開始するのに役立つ詳細については、[[Scenarios]](https://doc.arcgis.com/en/cityengine/latest/help/help-scenarios.htm) を参照してください。
{{< callout >}} 

**[Publish Selected Models to Scene Layer]** は、3D 作業を ArcGIS Online にロードし、アクティブな ArcGIS Urban シナリオに**コンテキスト レイヤー**を追加します。ArcGIS Urban アプリのシナリオには複数のコンテキスト レイヤーを含めることができますが、それらは単一の Web シーン内に含まれている必要があります。イメージ レイヤーやフィーチャ レイヤーなど、1 つのシナリオに複数の公開アイテムを表示するには、まずそれらを ArcGIS Online の共有 Web シーンに追加する必要があります。

{{< /callout >}}


## シナリオの地形を編集して公開

CityEngine の [[interactive terrain editing]](https://doc.arcgis.com/en/cityengine/latest/help/help-terrain-editing.htm) ツールを使用して、テラス状の建物、池の機能、レイン ガーデンなどの地形に影響を与えるデザイン機能をサポートするために、デザイン シナリオの標高レイヤーを変更できます。これらのスペースのコンセプト プランを詳細に示すアート ワークをジオリファレンスして地形に重ねる方法も学びます。その後、変更を ArcGIS Urban のアプリに公開できます。編集された地形は、作業するシナリオ固有のものであるため、他のデザインや既存の条件と比較することができます。

### イメージ レイヤーの作成
テクスチャを追加して、地形に重ねる画像レイヤーを作成します。
1. 次の画像をArcGIS Onlineで開き、ダウンロードします。

　　　  a. **[[ReflectingPool_CourtyardDesign.png]](https://www.arcgis.com/home/item.html?id=c5ab4d6b5c0b4d20ad1d52c1bc534fb5&rsource=https%3A%2F%2Flinks.esri.com%2Fcityengine%2Ftutorials%2Fwork-with-arcgis-urban-integration-image1)** を**ダウンロード**します。 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-81447F09-5F0C-4D8E-A16C-1A2230AF2C54-web.png" title=" " width="500" >}}


　　　  b.**[[RainGardenDesign.png]](https://www.arcgis.com/home/item.html?id=4de7eb5ac33e433b9c2d8185f8ac682e&rsource=https%3A%2F%2Flinks.esri.com%2Fcityengine%2Ftutorials%2Fwork-with-arcgis-urban-integration-image2)** を**ダウンロード**します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-2D4BD276-ECCA-4915-BCB0-0B889C7BD686-web.png" title=" " width="500" >}}

2. ダウンロードした画像を、[ArcGIS_Urban_Example Boston, MA USA CityEngine] プロジェクトの [images] フォルダーに追加します。
{{< callout >}}

 ローカル ファイル エクスプローラー フォルダーから CityEngine の **[Navigator]** ウィンドウに直接画像をドラッグ アンド ドロップできます。

{{< /callout >}}

3. メインメニューで **[Layer]** → **[New Map Layer]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-0542E26B-F246-4409-941B-777E4124FA9F-web.png" title=" " width="500" >}}
1. **[Texture]** をクリックし、レイヤー名を [Reflecting Pool Design] にします。
1. **[Next]** をクリックします。
1. プロジェクトの [images] フォルダーに移動し、[ReflectingPool_CourtyardDesign.png] をクリックします。
1. 次の画像に一致するように **[Dimensions]** と **[Location]** の値を設定します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-CF2C599A-063F-42AF-AA62-DC04C0638395-web.png" title=" " width="500" >}}
1. **[Scene Editor]** ウィンドウで [Reflecting Pool Design] レイヤーを選択し、**[Inspector]** ウィンドウで **[Elevation Offset]** を 4.3 に更新します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-C23218B4-39F4-42F0-82AE-902AA20042FE-web.png" title=" " width="500" >}}

　　テクスチャが上部の中庭に配置されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-480A62FA-FE2C-490F-AB05-A746C6D8348C-web.png" title=" " width="500" >}}

9. メインメニューで **[Layer]** → **[New Map Layer]** をクリックします。
1. **[Texture]** をクリックし、レイヤー名を [Rain Garden Design] にします。
1. **[Next]** をクリックします。
1. [images] フォルダーに移動し、[RainGardenDesign.png] をクリックします。
1. 次の画像に一致するように **[Dimensions]** と **[Location]** の値を設定します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-BD1805FC-5DD4-4230-8FC1-2FC98EE80330-web.png" title=" " width="500" >}}
1. **[Scene Editor]** ウィンドウで [Rain Garden Design] レイヤーを選択し、Elevation Offset を 4.3 に更新して、テクスチャを下部の中庭に配置します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-D1B1203D-1617-43D4-8FF9-3EC708657401-web.png" title=" " width="500" >}}

### 地形を編集 – 区画シェープのオフセット
CityEngine の **[Align terrain to shapes]** ツールを使用すると、シェープの Z 値を変更し、その標高に合わせて地形を調整できます。このツールを使用して、前のチュートリアル セクションで示した上部中庭に反射池を作成するために地形を編集します。
1. **[Scene Editor]** ウィンドウで、[Reflecting Pool Design] イメージ レイヤーのチェックを外します。
1. **[Viewport]** で、上部中庭の区画を選択します。
1. F を押して、**[Viewport]** ウィンドウで区画をフレームに収めます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-2872A561-E889-4BF9-B390-45146E766375-web.png" title=" " width="500" >}}
1. メイン メニューで **[Shapes]** → **[Offset shapes]** をクリックして、**[Offset Shapes]** ツール オプションを表示します。 
1. **[Distance]** の値を 15 メートルに設定します。
1. **Enter** を押します。
1. 中央のシェープを選択します。
1. **[Transform Move]** ツール (W) をクリックして、**[Transform Move]** ツール オプションを表示します。
1. 緑の軸の移動値 (middle) を -2 に設定します。
1. Enter を押します。
1. **[Align terrain to shapes]** ツールをクリックします。
1. デフォルト値のまま **[Apply]** をクリックし、**[Close]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-45C82856-7637-4D7C-BEF8-2E6BF268C1F9-web.png" title=" " width="500" >}}

### 地形を編集 – Terrain Edit Brush を使用
最後に、CityEngine シーンで [Rain Garden Design] テクスチャ レイヤーを整合させるために地形を編集します。
1. **[Scene Editor]** ウィンドウで、[Rain Garden Design] イメージ レイヤーにチェックを入れます。
1. **[Viewport]** で、下部中庭エリアに移動します。
1. **[Terrain Edit Brush]** ツールをクリックします。
1. **[Terrain Edit Brush]** ツール オプションで、**[Brush Size]** の値を 2 に調整し、地形を彫るために描画にズーム インします。
1. **[Height]** の値を、以下の図に詳述された標高に一致するように調整します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-1F16B4F1-3BAF-4058-A9D3-737C64873C62-web.png" title=" " width="500" >}}
{{< callout >}} 

ブラシ サイズはメートル単位です。[Rain Garden Design] テクスチャ レイヤーに表示されている希望の高さに一致させるために、フィートをメートルに変換する必要があります。 

{{< /callout >}}
6. メインメニューで **[File]** → **[Save all]** をクリックします。

### 編集された地形を公開
編集された地形を公開するには、次の手順を完了します。
1. **[Scene Editor]** ウィンドウで [Terrain] レイヤーを選択します。

1. メインメニューで **[ArcGIS Urban]** → **[Publish Selected Terrain to Scenario]** クリックします。

1. [Refined (Refi) ] シナリオのチェックボックスをクリックします。

1. **[Publish]** をクリックします。

1. ArcGIS Urban アプリでブラウザーを更新し、[Refined] シナリオを見つけて変更を確認します。

## イメージ レイヤーをエクスポートして共有
最後のセクションでは、設計図をジオリファレンスし、新しい提案された中庭の地形標高マップを更新しました。設計図を地形に重ねて ArcGIS Urban で視覚化するには、ArcGIS Online に公開する必要があります。

次のセクションでは、これらの図面を 3D Web シーンに追加します。

### イメージ レイヤーをタイル パッケージとしてエクスポート
まず、中庭のテクスチャをイメージ レイヤーをタイルパッケージとしてエクスポートします。

1. CityEngine で、**[Scene Editor]** ウィンドウ内の [Rain Garden Design] と [Reflecting Pool Design] のテクスチャ レイヤーを Ctrl キーを押しながらクリックして選択します。
1. メインメニューで、**[File] → [Export] → [CityEngine] → [Export Selected Layers as TPK]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-DD65EA04-A739-471F-A658-91E01A3D9119-web.png" title=" " width="500" >}}
1. **[Next]** をクリックします。
1. **[Base Name]** を [Courtyards] に変更し、**[Maps]** 設定を [Basemap only] に設定します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-97EC5B07-3DFD-45CA-B2E3-5F5180D2AA4E-web.png" title=" " width="500" >}}
1. 他の設定はデフォルト値のままにします。
1. **[Finish]** をクリックします。

これで、[Courtyards_Rain_Garden_Design_Basemap.tpk] と [Courtyards_Reflecting_Pool_Design_Basemap.tpk] のタイル パッケージがプロジェクト データ フォルダーにエクスポートされます。

### タイル パッケージを ArcGIS Online に公開
次に、タイルパッケージを ArcGIS Online に公開します。
1. プロジェクト データ フォルダー内の [Courtyards_Rain_Garden_Design_Basemap.tpk] ファイルを右クリックし、**[Share As]** をクリックして **[Tile Package]** ダイアログ ボックスを開きます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-6198C63A-CC9C-458E-B27A-23A0BF70B2C4-web.png" title=" " width="500" >}}
1. デフォルトの **[Upload package to my ArcGIS Online or Portal account]** 設定が選択されていることを確認します。
1. **[Analyze]** をクリックしてエラーをチェックします。
1. **[Share]** をクリックします。
1. 上記の手順を [Courtyards_Reflecting_Pool_Design_Basemap.tpk] ファイルでも繰り返します。タイル パッケージが ArcGIS Online に正常に共有されると、各イメージ レイヤーに対して次のメッセージが表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-2980CF6C-CCB6-408C-A3C3-4BD16B091176-web.png" title=" " width="500" >}}

### シナリオ コンテキストの Web シーンを作成して共有

最後に、シナリオ コンテキストの Web シーンを作成します。
1. 新しいブラウザー タブを開き、CityEngine のタイル パッケージを公開したのと同じアカウントで ArcGIS Online にサイン インします。
1. **[Content]** をクリックします。 **[My content]** ページには、最新のアイテムが表示されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-4EE6E113-627A-4F0C-B36F-322C711E912C-web.png" title=" " width="500" >}}
1. ホストされた [Courtyards_Rain_Garden_Design_Basemap] タイル レイヤーをクリックして、**[Items]** ページを開きます。
1. **[Open in Scene Viewer]** をクリックして、[Scene Viewer] でレイヤーを開きます。 
1. **[Add] → [Browse layers]** をクリックして、[Courtyards_Reflecting_Pool_Design_Basemap] レイヤーを Web シーンに追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-8D663ED9-44FD-4C43-9BF8-1B78408CEE2B-web.png" title=" " width="500" >}}
1. **[Save]** をクリックします。 
1. **タイトル** には [Courtyard Textures] と入力します。 必要に応じて、**[Summary]** と **[Tags]** を入力できます。
1. **[Save]** をクリックします。
1. ArcGIS Urban に戻り、ブラウザーを更新します。 
1. リストされたシナリオの横にある **[Configure scenarios Layer settings]** ツールをクリックして、**[Scenarios]** メニューを開きます。
1.  **[Refined]** をクリックしてシナリオを展開します。
1.  **[Edit]** をクリックして、**[Scenario context]** のレイヤーを編集します。 
1. [Courtyard Textures] Web シーンを検索します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-68C25A8A-3413-449A-9F7D-0207970EE22F-web.png" title=" " width="500" >}}
1. **[Select]** をクリックしてシナリオ コンテキストを追加します。
1. **[OK]** をクリックします。 [Rain Garden Design] と [Reflecting Pool Design] のイメージ レイヤーが CityEngine からエクスポートされ、ArcGIS Online に公開され、ブラウザーを更新すると ArcGIS Urban アプリで表示できるようになります。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-DC4F31EC-9A57-4A6C-AA92-1C0AFDD9D352-web.png" title=" " width="500" >}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-69B59C53-E8AC-4523-9DA1-BD44FFE64024-web.png" title=" " width="500" >}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-A7967748-9AB6-4919-99BF-D643AFDF0FEA-web.png" title=" " width="500" >}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/Work+with+ArcGIS+Urban+integration/GUID-B24FBABA-40E5-4F90-8DED-CF6BF7CA0883-web+(1).png" title=" " width="500" >}}

## 次のステップ
提供されたチュートリアル プロジェクトをダウンロードして、最終的な [South Boston Dot Ave - ArcGIS Urban Integration.cej] シーンを参照してください。CityEngine のメイン メニューで、**[Help] → [Download Tutorials and Examples] → [Essentials_Work_with_ArcGIS_Urban_Integration]** をクリックして、ワークスペースに追加します。
{{< callout >}} 

統合ツールセットを使用してインポートしたシーンのみ、変更を ArcGIS Urban シナリオに共有できます。

{{< /callout >}}

このチュートリアルでは、次のことを学びました。
-   ArcGIS Urban 統合機能を使用して、CityEngine に **ArcGIS Urban プランをインポート**する方法
-   インポートしたプランを CityEngine で視覚化およびナビゲートするためのヒント
-   ArcGIS Urban で行った区画および属性の変更が、**[Get Changes from Urban]** ツールを使用して CityEngine シーンを上書きする方法
-   CityEngine でどのような区画編集ができるかを探索し、その後、**Urban に変更を保存**する方法
-   計画シナリオのために CityEngine で地形の標高を編集するための 2 つの異なるアプローチを使用し、**[Publish Selected Terrain to Scenario]** ツールを使用して ArcGIS Urban に共有する方法
-   CityEngine と ArcGIS Urban の両方で設計作業をサポートするためのイメージ レイヤーの作成、パッケージ化、および共有する方法
-   ArcGIS Urban シナリオにコンテキスト レイヤーを公開する方法
-   都市デザインのワークフローのためのシーン設定のベスト プラクティスを探る方法

他の エッセンシャル チュートリアルもぜひチェックしてください。[CityEngineツアー](https://doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/)、[Get Map Data を使った都市モデルの構築](https://doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/)、[GIS データを使った作業](https://doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/)、[ルール ベースのモデリング](https://doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/)

CityEngine の学習を続けるには、[CityEngine チュートリアル カタログ](https://doc.esrij.com/cityengine/tutorials/) をご覧ください。
