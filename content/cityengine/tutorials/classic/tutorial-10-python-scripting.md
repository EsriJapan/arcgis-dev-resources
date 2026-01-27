+++
title = "チュートリアル 10: Python スクリプティング"
description = "Python コンソールおよびエディターの基本的な使用方法を学習します。"
Weight = 10
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。  


## 概要
このチュートリアルでは、Python コンソールおよびエディターの基本的な使用方法を学習し、CityEngine タスクの自動化の例をいくつか紹介します。
Python スクリプティング インターフェイスを利用すると、CityEngine の可能性をより広げることができます。

|演習|
|:--|
|・[Part 1: Python コンソールおよびエディター](#part-1-python-コンソールおよびエディター)|
|・[Part 2: 道路幅の変更](#part-2-道路幅の変更)|
|・[Part 3: 建物の変化のアニメーション](#part-3-建物の変化のアニメーション)|
|・[Part 4: アセット ライブラリ ルール ファイルの作成](#part-4-アセット-ライブラリ-ルール-ファイルの作成)|
|・[Part 5: startup.py を用いた CityEngine タスクの自動化](#part-5-startuppy-を用いた-cityengine-タスクの自動化)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-669A98AA-8F6A-4C0D-9B62-CC7F7804A88B-web.png" title="モジュールの例" width="600" >}}  


## Part 1: Python コンソールおよびエディター
このセクションでは、Python コンソールおよびエディターを使用して簡単な選択を実行します。


### Python コンソール
新しい Python コンソール ウィンドウを起動します。
1. [[Navigator](https://doc.arcgis.com/en/cityengine/2023.1/help/help-navigator.htm)] ウィンドウの **Tutorial_10_Python_Scripting** フォルダーを展開します。

2. **scenes** フォルダーのシーン **01_PythonScripting.cej** を開きます。

3. **[Window] メニュー → [Console]** から **[Console]** ウィンドウを開きます。

4. 右端にある小さな三角形から **[Python Console]** ウィンドウを開きます。
    
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-2B127CEA-2079-4537-B5AF-27AE7B8CB0A7-web.png" title="コンソール ウィンドウのショートカット メニュー" width="500" >}}  

5. **「ce.setS」** と入力します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-C7E89028-15DD-4187-A1BD-A1249B0C7773-web.png" title="Python コンソール ウィンドウでのコマンドの完了" width="500" >}} 

    入力すると選択できるコマンドのリストが表示されます。最初の CityEngine Python コマンドでは、シーン オブジェクトを固有の名前ですばやく選択できます。    
    まだ開いていない場合、Ctrl+Space キーを押すとコマンド補完のポップアップが表示されます。

6. リストの **ce.setSelection** をダブルクリックし、コンソールのエントリを完了します。

7. **ce.setSelection** を以下のフル コマンドに拡張します。
    ```
    >>> ce.setSelection(ce.getObjectsFrom(ce.scene, ce.withName("*Broadway*")))
    ```

8.  Enter を押して、名前に Broadway を含むシーン内のすべてのオブジェクトを選択します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-69B5BBE7-97FD-47F8-94CC-3B50C891EA1D-web.png" title="Broadway 道路形状の選択" width="600" >}} 


### エディターで Python モジュールを作成
より長く、より高度な Python コマンド、あるいはコマンド群を使いたいときは、CityEngine の Python エディターを使ってスクリプトを書くと便利です。

新しい Python モジュールを作成します。

1.  **[File] メニュー → [New…] → [Python] → [Python Module]** を選択し、**[Next]** をクリックして **[Create a new Python module]** ダイアログボックスを開きます

2.  **[Create a new Python module]** ダイアログボックスの **[Source Folder]** で **scripts** フォルダーを参照し、**[OK]** をクリックします。 

3.  **[Name]** ボックスで **「myHelpers」** と入力します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-54D8448D-2104-4BD6-88BA-A8BB12AC9626-web.png" title="新規 Python モジュールの作成" width="500" >}}  

4.  **[Finish]** をクリックし、**[Template]** ウィンドウを開きます。

5.  **[Module: Main]** テンプレートを選択します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-9C55B776-C94B-473C-994C-1075C9CC5284-web.png" title="Module: Main テンプレート" width="500" >}}  

6.  **[OK]** をクリックします。

    新しい Python モジュール **myHelpers** が **myHelpers.py** ファイルとして **scripts** フォルダーに作成され、Python エディターで開かれます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-6FD52143-61B9-41E9-8748-F7D0A201BCA9-web.png" title="myHelpers.py スクリプト" width="500" >}}  

7.  **ce = CE()** の行の後に、新しい関数 **selectByAttribute(attr, value)** を追加します。main 関数の上に以下のコードを追加します。

    ```
    def selectByAttribute(attr, value):
        objects = ce.getObjectsFrom(ce.scene)
        selection = []
        for o in objects:
            attrvalue = ce.getAttribute(o, attr)
            if attrvalue  ==  value:
                selection.append(o)
        
        ce.setSelection(selection)
    ```

    この関数は、シーン内のすべてのオブジェクトをループし、最初のパラメーターとして渡された属性の値を読み取ります。そして、その値を 2 番目のパラメーターとして渡された値と比較し、一致すれば、そのオブジェクトを選択範囲に追加します。

8.  シーン内の道路形状を選択し、**[Inspector]** ウィンドウの **[Object Attributes]** をクリックして、使用可能な属性を確認します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-0921A51F-98F1-427C-A21F-BD4397C9C1A7-web.png" title="道路の属性" width="600" >}}  

9.  スクリプトでジャンクションに接続されているすべての道路を選択するために、スクリプトの main に特定のパラメーターを持つ関数呼び出しを追加します。

    ```
    if __name__ == '__main__':
        selectByAttribute("connectionStart","JUNCTION")
    ```

10. Ctrl+S キーを押して、モジュールを保存します。

11. [Python Editor] ウィンドウ内で F9 キーを押して、スクリプトを実行します。

    **Junction** との交差点を持つ道路が選択されます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-1C5BF334-D210-47D2-B70E-5A88F604DA6E-web.png" title="Junction 道路形状の選択" width="600" >}}  


### コンソールからのスクリプト実行
別の方法として、Python コンソールからスクリプト内の関数を直接呼び出すことができます。

1.  [Python Console] ウィンドウで、先ほど作成したモジュールを含むパスをシステムパスに追加します。

    ```
    >>> sys.path.append(ce.toFSPath("scripts"))
    ```

2. **myHelpers** モジュールをインポートします。 
    ```
    >>> import myHelpers
    ```

3. 最後に、任意のパラメーターを指定してヘルパー関数を呼び出します。
    ```
    >>> myHelpers.selectByAttribute("connectionEnd", "JUNCTION")
    ```
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-A3B8ABEC-3A47-4E0D-AF76-AA7B3013A01B-web.png" title="カスタムした選択関数の呼び出し" width="500" >}}  


### scripting.py を使用したモジュールの自動読み込み
CityEngine の起動時に **scripting.py** スクリプトを作成して読み込むには、以下の作業を行います。

1. 使用しているオペレーティング システムのファイル ブラウザーを使用して、CityEngineのワークスペースに **scripting.py** という名前のファイルを作成します。

    CityEngine のワークスペースのルート フォルダー内に **\{CityEngine Workspace}\scripting.py** のように **scripting.py** ファイルを保存します。

    {{< callout >}}

    パスは、**[File] メニュー → [Switch Workspace] → [Other]** で確認するか、**[Navigator]** ウィンドウでプロジェクトを右クリックし、**[Show in File Manager]** を選択します。

    {{< /callout >}}

2. 以下の行を追加し、起動時にヘルパー スクリプトが自動的にマップされるようにします。

    ```
    from scripting import *

    # get a CityEngine instance
    ce = CE()

    import sys
 
    sys.path.append(ce.toFSPath("/Tutorial_10_Python_Scripting__2021_1/scripts"))
    import myHelpers
    ```

3.  CityEngine を再起動して、シーン **01_PythonScripting.cej** を開き、**myHelpers** モジュールを自動的に読み込みます。

4.  Python コンソールからヘルパー関数を直接呼び出して、自動読み込みが機能していることを確認します。

    ```
    >>> myHelpers.selectByAttribute("sidewalkWidthLeft", 4)
    ```
    object attribute の **sidewalkWidthLeft** の値が **4** であるすべての道路が選択されます。

{{< callout >}}

任意のコードを **scripting.py** ファイルに追加することができます。scripting モジュールは、新しい Python コンソールが開かれた時や Python エディターからスクリプトが実行された時に自動的に実行されます。

**scripting.py** ファイルが有効で、正しく実行されることを確認してください。そうでない場合は CityEngine 内の Python コードは実行できません。**scripting.py** ファイルを作成または変更した後、CityEngine の Python コンソールを開くと、scripting ファイルの実行に伴う問題はそこに表示されます。

**scripting.py** ファイルは、CityEngine の起動時に一度だけ読み込まれます。変更する際は必ず CityEngine を再起動してください。

CityEngine の起動時にスクリプトが正常に更新されない場合、Python キャッシュ ディレクトリ **$USER_DIR/.cityengine/$CEVERSION_DIR/pythonCache/** を削除してください。

{{< /callout >}}


## Part 2: 道路幅の変更
多くのセグメントについて道路幅の属性値を増加したいという場合は少なからずあります。GUI で効率的に行うことができない場合は、Python スクリプトを使うと便利です。


### incrementStreetWidth() 関数
このセクションでは、ユーザーによって指定された値から、選択されたすべての道路セグメントの **streetWidths** 属性を増加させる関数を作成します。

1.  シーン **02_PythonScripting.cej** を開きます。

2.  **setStreetWidths** という新しい Python モジュールを作成します。

    新しいモジュールを作成するには、上記の[エディターで Python モジュールを作成](#エディターで-python-モジュールを作成)セクションのステップ 1 からステップ 6 を実行します。

3.  関数定義を追加します。

    ```
    def incrementStreetWidths(increment):
    ```

4.  関数内で選択されているすべてのセグメントを取得し、それらをループさせます。

    ```
    selectedSegments = ce.getObjectsFrom(ce.selection, ce.isGraphSegment)
    for segment in selectedSegments:
    ```

5.  **for** ループ内で新しい道路幅を計算するために、まず **ce.getAttribute()** コマンドを使用して現在の値を取得する必要があります。

    ```
    oldWidth = ce.getAttribute(segment, "/ce/street/streetWidth")
    ```

    属性名の文法上の名前には先頭に **“/ce/street/”** が付くことに注意してください。これによりオブジェクトのユーザー属性にアクセスすることができます。詳しくは、[Parameters and attributes](https://doc.arcgis.com/en/cityengine/2023.1/python/python-parameters-and-attributes.htm) を参照してください。

6.  最後に、ユーザーが与えた increment パラメーターだけを追加して新しい道路幅を計算し、新しい値をセグメントに割り当てます。

    ```
    newWidth = oldWidth+increment
    ce.setAttribute(segment, "/ce/street/streetWidth", newWidth)
    ```

    関数の全体は以下の通りです。

    ```
    def incrementStreetWidths(increment):
        selectedSegments = ce.getObjectsFrom(ce.selection, ce.isGraphSegment)
        for segment in selectedSegments:
            oldWidth = ce.getAttribute(segment, "/ce/street/streetWidth")
            newWidth = oldWidth+increment
            ce.setAttribute(segment, "/ce/street/streetWidth", newWidth)
    ```

7.  スクリプトの main ブロックに関数呼び出しを追加し、増加量を指定します。

    ```
    if __name__ == '__main__':
        incrementStreetWidths(10)
    ```

8.  ファイルを保存します。

9.  複数の道路セグメントを選択します。

10. F9 キーを押して、Python スクリプトを実行します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/road_witdh.png" title="道路幅" width="600" >}}  


### 処理のスピードアップ: @noUIupdate
選択されているセグメントが多い場合、上のスクリプトを実行するとやや時間がかかってしまいます。これは CityEngine においてスクリプトは別々のスレッドで実行され、GUI と [[3D View](https://doc.arcgis.com/en/cityengine/2023.1/help/help-viewport.htm)] ウィンドウの各コマンドが実行される度に更新されるためです。この場合は、各 **setAttribute()** が呼び出されるたびに道路ネットワークが更新され 3D View ウィンドウ内が再描画されます。

実行時間を早くするには、関数定義の上に **@noUIupdate** デコレーターを追加します。

```
@noUIupdate
def incrementStreetWidths(increment):
```

このようにマークされた関数は、実行中の GUI の更新をブロックしますが、処理内容によっては数倍早く実行されます。

{{< callout >}}

スクリプト コマンドによっては **@noUIupdate** デコレーターと組み合わせることでユーザー インターフェイスがフリーズしてしまうこともありますので注意してください。

**@noUIupdate** を使用した時にユーザー インターフェイスがフリーズ、または予期せぬ挙動が発生した場合は、スクリプトを修正して **@noUIupdate** がスクリプト全体ではなく、特定の関数のみに適用されるようにします。

{{< /callout >}}


### multiplySegmentWidths() 関数
**multiplySegmentWidths()** 関数は、複数の属性を同時に設定します。具体的には、**streetWidth**、**sidewalkWidthLeft**、および **sidewalkWidthRight** 属性です。

1.  **setStreetWidths** スクリプトに以下の関数を追加します。

    ```
    def multiplySegmentWidths(factor):
        selectedSegments = ce.getObjectsFrom(ce.selection, ce.isGraphSegment)
        for segment in selectedSegments:
            multiplyAttribute(segment, "/ce/street/streetWidth", factor)
            multiplyAttribute(segment, "/ce/street/sidewalkWidthLeft", factor)
            multiplyAttribute(segment, "/ce/street/sidewalkWidthRight", factor)

    def multiplyAttribute(object, attrname, factor):
        oldval = ce.getAttribute(object, attrname)
        newval = oldval*factor
        ce.setAttribute(object, attrname, newval)
    ```

2.  **main** ブロックの関数呼び出しを以下のように置き換えます。
    ```
    multiplySegmentWidths(1.5)
    ```

3.  モジュールを保存します。

4.  複数の道路セグメントを選択します。

5.  F9 キーを押して、スクリプトを実行します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/segment_width.png" title="セグメント幅" width="600" >}}  

変更のたびに UI がリフレッシュされるわけではないため、道路の幅がより速く変更されることに注目してください。


## Part 3: 建物の変化のアニメーション
Python スクリプトを使用することで、生成やエクスポート処理を自動化できます。このワークフローでは、建物属性を設定して建物アニメーションを生成し、結果のモデルセットをエクスポートする方法を説明します。


### 建物の生成
建物を生成します。

1.  シーン **03_PythonScripting.cej** を開きます。

    "Would you like to regenerate these models?" と出たら、**[Yes]** をクリックします。

2.  建物を選択します。

    建物が生成されない場合、区画を選択し、ツールバーの **[Generate]** (Ctrl+G キー) をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-0643E84D-87F8-40E0-8C99-3084BFD1325A-web.png" title="未修正の属性で生成された建物" width="500" >}}  

    ルール ファイルには、建物の寸法を変更する属性が含まれています。**[Inspector]** ウィンドウでこれらの値を手動で設定するのではなく、値を変更するスクリプトを作成し、異なるバージョンのモデルを一括生成します。


### アニメーション スクリプト
アニメーション スクリプトを記述します。

1.  **growBuilding** という新しい Python モジュールを作成します。

2.  2 つのレンジをループする非常にシンプルなタイムラインを作成し、**setAttribute** 関数を呼び出すために、**growBuilding** 関数を追加します。

    ```
    def growBuilding():
        for i in range(1,14):
            height = 20+i
            doStep(i,height,1)

        for i in range(15,35):
            height = 34
            width = i-14
            doStep(i,height,width)
    ```

3.  **doStep** 関数を使用して、区画のオブジェクトの height と width の属性を変更します。

    ```
    def doStep(i,height,width):    
        object = ce.getObjectsFrom(ce.scene, ce.withName("'Lot1'"))
        ce.setAttributeSource(object, "height", "OBJECT")
        ce.setAttributeSource(object, "width", "OBJECT")
        ce.setAttribute(object, "height", height)
        ce.setAttribute(object, "width", width)
    
        Generate(object)
    ```

4.  建物を生成する **Generate** 関数を追加します。

    ```
    def Generate(object):
        ce.generateModels(object)
    ```

5.  スクリプトの **main** 節で、**growBuilding** 関数を呼び出します。

    ```
    if __name__ == '__main__':
        growBuilding()
    ```

6.  モジュールを保存します。

7.  F9 キーを押して、スクリプトを実行し、建物を一括生成します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-669A98AA-8F6A-4C0D-9B62-CC7F7804A88B-web.png" title="モジュールの例" width="600" >}}  

8.  モデルを一括エクスポートするには、**Export** 関数を追加します。main 節の前に関数があることを確認します。

    ```
    def Export(i, object):
        dir = ce.toFSPath("models")
        file = "building_merge_" + str(i)
        # prepare export settings 
        settings = OBJExportModelSettings()
        settings.setBaseName(file)
        settings.setOutputPath(dir)
        # do export 
        ce.export(object, settings)
    ```

9.  **doStep()** 関数内の **Generate** コールを置き換えます。

    ```
    #Generate(object)
    Export(i, object)
    ```

10. モジュールを保存します。

11. F9 キーを押して、スクリプトを実行します。

    モデルはプロジェクト内の **models** フォルダーに一括エクスポートされます。


## Part 4: アセット ライブラリ ルール ファイルの作成
大量のアセットがある場合には、それらすべてを一度に表示できると便利です。このセクションでは、プロジェクトに含まれるアセットを表示する CGA ルール ファイルを自動的に生成する Python スクリプトの書き方を紹介します。

1.  まだ開いていない場合、シーン **03_PythonScripting.cej** を開きます。

    Python スクリプトは、以下の構成でルール ファイルを記述します。

    ```
    Lot -->  Geometries Textures

    Geometries --> 
	     Geometry(assetpath)
	     Geometry(assetpath)
	     ...

    Geometry(asset) --> i(asset)
    ```

    これらはジオメトリ アセットおよびそれと同様のテクスチャ画像のための構造です。

2.  新しい Python メイン モジュール **asset_lib** を作成します。

3.  新しい関数 **writeCGALib** を作成します。

    ```
    def writeCGAlib():
    ```

4.  ヘッダー情報およびスタート ルール **Lot** を記述します。

    ```
    cga = "/*Asset Library Loader : Generated by asset_lib.py*/\n version \"2023.0\"\n\n"

    cga += "Lot -->  Geometries Textures"
    ```

5.  **Geometries** ルールを記述し、**asset** フォルダー内のすべての **.obj** ファイルを取得します。各アセットの **Geometry(assetpath)** 呼び出しルールを用意します。

    ```
    cga += "\n\nGeometries --> "
    for obj in ce.getObjectsFrom("/", ce.isFile, ce.withName("/Tutorial_10*/assets/*.obj")):   
        cga += "\n\t t(2,0,0)  Geometry(\""+obj+"\")"
    ```

6.  テクスチャ アセットについても同様のルールを記述します。

    ```
    cga+="\n\nTextures --> \n\ts(1,0,0) set(scope.ty,3) set(scope.tz,0) i(\"facades/xy-plane.obj\")"   
    for jpg in ce.getObjectsFrom("/", ce.isFile, ce.withName("/Tutorial_10*/assets/*.jpg")):
        cga += "\n\tt(2,0,0)  Texture(\""+jpg+"\")"
    ```

7.  アセット ローダーのルールを記述します。  

    ```
    cga += "\n\n Geometry(asset) --> s(1,0,0) i(asset) set(scope.ty,0) set(scope.tz,0)"

    cga += "\n\n Texture(asset) --> set(material.colormap, asset)"
    ```

8.  **.cga** ファイルのファイル ハンドルを開き、CGA コンテンツを記述します。

    ```
    cgafile = ce.toFSPath("rules/asset_lib.cga")
    CGA = open(cgafile, "w")
    CGA.write(cga)
    CGA.close()
    print "written file "+cgafile
    ```

9.  新しい **assignAndGenerateLib()** 関数を追加します。
    ```
    def assignAndGenerateLib():
        object = ce.getObjectsFrom(ce.scene, ce.withName("'Lot2'"))
        ce.refreshWorkspace()
        ce.setRuleFile(object, "asset_lib.cga")
        ce.setStartRule(object, "Lot")
        ce.generateModels(object)
    ```

    この関数は、生成された **.cga** ファイルをシーンの区画に適用し、モデルを生成します。

10. 最後に、main 節の中から 2 つの関数を呼び出します。 

    ```
    if __name__ == '__main__':
        writeCGAlib() 
        assignAndGenerateLib()
    ```

11. モジュールを保存します。

12. F9 キーを押して、ライブラリ モデルを生成します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-5C19106D-F072-469C-B981-E654BEAB8CF2-web.png" title="アセット ライブラリ" width="600" >}}  


## Part 5: startup.py を用いた CityEngine タスクの自動化
Python を使用して、大きなタスクや反復的なタスクを自動化することができます。例えば郡全体の区画情報からモデル生成を自動化することができます。

タスクを自動化します。

1.  **automationJob** という新しい Python モジュールを作成します。

2.  自動化されたジョブのタスクを含む関数を挿入します。

    ```
    def fgdbToKml(pathFGDB,layerName,ruleName,startRule = "Generate"):
        # open scene in the automation project
        ce.newFile('/scenes/emptyScene.cej')
     
        # load a database
        importSettings = FGDBImportSettings()
        importSettings.setDatasetFilter(['/'+layerName])
        ce.importFile(ce.toFSPath(pathFGDB), importSettings)
     
        # assign rule file based on the layer name
        layer = ce.getObjectsFrom(ce.scene, ce.isShapeLayer, ce.withName(layerName))[0]
        shapes = ce.getObjectsFrom(layer, ce.isShape)
        ce.setRuleFile(shapes, ruleName)
        ce.setStartRule(shapes, startRule)
     
        # export models to KML
        exportSettings = KMLExportModelSettings()
        exportSettings.setOutputPath(ce.toFSPath("models"))
        exportSettings.setBaseName(layerName)
        exportSettings.setCompression(True)
        ce.export(shapes, exportSettings)
     
        # close Scene
        ce.waitForUIIdle()
        ce.closeFile()
    ```

    テストするには、**'\_\_main\_\_'** セクションにこの関数への呼び出しを追加します。提供されている **fgdbToKml** のサンプルは、モデルを生成するために fileGDB からシェープをインポートし、KML に書き出します。

    ```
    if __name__ == '__main__':
        fgdbToKml("data/CityData.gdb", "Footprints", 
                  "/ESRI.lib/rules/Buildings/Building_From_Footprint.cga", "Generate")
        pass
    ```

3.  保存し、F9 キーを押して、すべてが正しく動作するかテストします。テスト後、**models** フォルダーには **Footprints.kmz** ファイルが含まれています。

    **Footprints.kmz** ファイルは、後のステップで再度作成するため削除します。

4.  このプロセスを自動化するためには、上記の関数のテストに使用したすべての関数パラメーターを構成ファイルに記述する必要があります。

    チュートリアル プロジェクトには、**data** フォルダーにある **jobConfig.cfg** ファイルの例が含まれています。

    ```
    [config]
    pathFGDB=data/CityData.gdb
    layerName=Footprints
    ruleName=/ESRI.lib/rules/Buildings/Building_From_Footprint.cga
    startRule=Generate
    ```

5.  **automationJob.py** スクリプトで、**fgdbToKml** 関数の下に **run(cfg)** と **getCfgValue(cfg,name)** 関数を追加して、構成ファイルに保存されたパラメーターで自動化ジョブを実行します。

    ```
    def getCfgValue(cfg,name):
        for c in cfg:
            if  c[0] == name: return c[1]
        return None
 
    def run(cfg):
        pathFGDB = getCfgValue(cfg,'pathfgdb')
        layerName = getCfgValue(cfg,'layername')
        ruleName = getCfgValue(cfg,'rulename')
        startRule = getCfgValue(cfg,'startrule')
     
        fgdbToKml(pathFGDB, layerName, ruleName, startRule)
    ```

    参考までに、**scripts** フォルダーにある **automationJob_dist.py** ファイルを開きます。
    
6.  **[File] メニュー → [Switch Workspace] → [Other]** をクリックして、自動化用の別のワークスペースを作成します。
    
    新しいワークスペースに **「C:\Automation Workspace\」** という名前を付けます。

7.  チュートリアル プロジェクトから新しい C:\Automation Workspace\ ルート ディレクトリに **startup.py** スクリプトをコピーします。

    ```
    from scripting import *
    from java import lang
    import ConfigParser, sys
 
    if __name__ == '__startup__':
        # get a CityEngine instance
        ce = CE()
     
        # get startup arguments
        projectFolder = lang.System.getProperty("projectFolder")
        configFilePath = lang.System.getProperty("configFilePath")
     
        # link the automation project into automation workspace
        if "automationProject" in ce.listProjects(): ce.removeProject("automationProject")
        ce.importProject(projectFolder, False, "automationProject")
     
        # read configuration file
        cp = ConfigParser.ConfigParser()
        cp.read(configFilePath)
        cfg = cp.items('config') # list of (name,value) pairs
     
        # run automation job
        sys.path.append(ce.toFSPath("/automationProject/scripts"))
        import automationJob
        automationJob.run(cfg)
     
        # safely shut down CityEngine
        ce.exit()
    ```

    この Python スクリプトの **'\_\_startup\_\_'** セクションのコマンドは、CityEngine の起動時に自動的に実行されます。最初の起動引数は、自動化ジョブを含む CityEngine プロジェクトを定義します。これは Automation Workspace にリンクされます。2 番目の引数には **config** ファイルが含まれています。これは解析され、(name,value) ペアのリストとして自動化ジョブに引き渡されます。ジョブが完了したら、CityEngine は安全にシャットダウンされます。

8.  コマンド ラインを開いて Automation Workspace で CityEngine を起動し、ジョブ定義とパラメーターを渡します。

    ```
    <Path_to_CityEngine.exe> -data <Workspace_Folder> -vmargs 
    -DprojectFolder=<Project_Folder> -DconfigFilePath=<Configuration_FilePath>
 
    @ Example:
    > "C:\Program Files\Esri\CityEngine2023.0\CityEngine.exe" -data 
    "C:\Automation Workspace" -vmargs 
    -DprojectFolder="C:\CE_Workspace\Tutorial_10_Python_Scripting__2021_1" 
    -DconfigFilePath="C:\CE_Workspace\Tutorial_10_Python_Scripting__2021_1\data\jobConfig.cfg"
    ```

    ジョブが完了したら、**models** フォルダー に ArcGIS Earth で表示できる **Footprints.kmz** 出力ファイルが含まれています。
    
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-10-python-scripting/GUID-F2A24687-D8DB-40CE-B305-D1EC2C7F6754-web.png" title="ArcGIS Earth の結果" width="600" >}}

{{< callout >}}

automationJob.py ファイルには最小限のジョブしか含まれていません。[CityEngine Python ヘルプ](https://doc.arcgis.com/en/cityengine/latest/tutorials/tutorial-10-python-scripting.htm)を参照して、必要に応じて調整をしてください。

{{< /callout >}}

このチュートリアルでは、以下の方法を学習しました。
*   Python コンソールとエディターの基本的な使い方を学習しました。
*   CityEngine タスクの自動化の例をいくつか学習しました。

