+++
title = "チュートリアル 22: ダイナミック インポート"
description = "ダイナミック インポートの使用方法を学習します。"
Weight = 25
alwaysopen = false
publishDate = 2023-06-15T00:00:00+09:00
author = "中田" 
draft = false 
+++

## チュートリアル データ

チュートリアル データは、**\[Help\] メニュー** → **\[Download Tutorials and Examples...\]** を選択し、\[CityEngine Tutorial\] からダウンロードできます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-2CC15C0F-0111-4FAB-BD50-F3531FFE7EF8-web.png" title=" " width="500" >}}

## 概要

チュートリアル 22 では、**ESRI.lib Plant_Loader**
を使用した例を通じて、ダイナミック インポートの使用方法を説明します。CGA
でのコーディングが必要な時間のかかる方法と、ダイナミック
インポートを使用した効率的な方法の 2
つのアプローチで、道路の両側にヤシの木を挿入する方法について学びます。

|演習|
|:--|
|・[Part 1: ユーザーが陥りがちなミス](#ユーザーが陥りがちなミス)|
|・[Part 2: 値を再計算してツリーのサイズを修正する](#値を再計算してツリーのサイズを修正する)|
|・[Part 3: ダイナミックインポートを使用してツリーサイズを修正する](#ダイナミック-インポートを使用してツリー-サイズを修正する)|


## ユーザーが陥りがちなミス

**Plant_Loader**
を使用する際、ユーザーは植物の名前を設定することが多いのですが、その際、高さや半径も設定しないと、誤った結果となるでしょう。つまり、依存する属性も設定する必要があることを知らずに、任意の属性を設定すると、しばしばミスにつながります。

次に、このことを詳しく見ていきましょう。

1.  **\[[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)\]**
    ウィンドウで **Tutorial_22_Dynamic_Imports** チュートリアル
    フォルダーを展開します。

2.  **scenes** フォルダー内の **dynamic_imports_01.cej**
    を開くと、[ビューポート](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)に植物のない街並みのシーンが表示されます：

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-C47E19C6-E948-4088-A6D4-273DCEFB61BD-web.png" title=" " width="500" >}}

3.  **rules** フォルダーにある **dynamic_imports_01.cga**
    ルールファイルを **\[[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)\]** ウィンドウで開くと表示されます。

4.  ESRI.lib から Plant_Loader を[インポート](https://doc.arcgis.com/en/cityengine/latest/cga/cga-import-keyword.htm)するには、**\[Navigator\]**
    ウィンドウから **/ESRI.lib/rules/Plants/Plant_Loader.cga**
    ファイルをドラッグし、ルールファイルの **import
    Street_Modern_Simple:\"/ESRI.lib/rules/Streets/Street_Modern_Simple.cga\"**
    文の下にドロップします：
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-BB3F6738-41DD-4798-80B8-F9A2AA98A6CF-web.png" title=" " width="500" >}}
    これにより、2つ目の **import** 文が追加されます：
    ```
    import Plant_Loader:"/ESRI.lib/rules/Plants/Plant_Loader.cga"
    ```
5.  **Plant_Loader** を使用して **Tree**
    ルールを修正し、通りの両脇に木を追加します：
    ```
    Tree -->
        Plant_Loader.Generate
    ```


6.  **dynamic_imports_01.cga** ファイルを保存します。

7.  歩道の図形を選択し、**\[Generate\]** (Ctrl+G) をクリックします：
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-E7BBA1B9-8202-4ED5-A350-8A09BBFF1FC4-web.png" title=" " width="500" >}}
 植物名を指定しなかったので、通りにはデフォルトの「Orange Tree」が並んでいます。このチュートリアルでは、木は「Coconut Palm」にします。
 この時点でシーンとルールがどのようになっているかを確認するには、**dynamic_imports_02.cej** シーンおよび **dynamic_imports_02.cga** ルール ファイルを開いてください。

8.  **Tree** ルールで植物属性名を「Coconut Palm」に設定します：
    ```
    Tree -->
        set(Plant_Loader.Name, "Coconut Palm")
        Plant_Loader.Generate
    ```

9.  ルールを保存して生成します：
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-1F9C8D4C-D93B-4288-ABD3-7F52355FFC59-web.png" title=" " width="500" >}}
通りにはヤシの木が並んでいますが、高さと半径が正しくないのは、これらの値がデフォルトの「Orange Tree」という名前に依存しているためです。
これは **Plant_Loader** のインポート時に **Name** 属性が「Orange Tree」に設定され、**Height** 属性と **Radius** 属性が「Orange Tree」の標準サイズに基づいて計算されるからです。**Plant_Loader** では、属性は互いに依存し合っています。**Height** の値は **Name** 属性に基づいて計算され **Radius** の値は **Name** 属性と **Height** 属性に基づいて計算されます。
<br> したがって、**set()** 操作で **Plant_Loader.Name** を「Coconut Palm」に設定しても、**Name** 属性が設定されるだけです。高さと半径の値を変更したり再計算したりすることはなく、これらの属性は「Orange Tree」のときの元の値をそのまま持っています。

## 値を再計算してツリーのサイズを修正する

植物の **Name** 属性のみを設定することで、オレンジの木 (Orange Tree)
の高さを持つヤシの木 (Coconut Palm)
が作成されています。このヤシの木の高さを修正するには、植物の **Name**
を設定した後に **Height** と **Radius**
の値を再計算して設定すればよいのです。

次にこの解決策を探りますが、**Plant_Loader**
の属性の依存関係を理解し、必要な属性を再計算する必要があるため、面倒な方法であることを念頭に置いておいてください。この方法は、複雑で間違えやすいです。

1.  **dynamic_imports_03.cej** シーンと **dynamic_imports_03.cga**
    ルールファイルを開いてください。

2.  **dynamic_imports_03.cga** で、植物の **Name**
    を設定した後に、**Height** と **Radius** を設定するように **Tree**
    ルールを修正する：
    ```
    Tree -->
        set(Plant_Loader.Name, "Coconut Palm")
        set(Plant_Loader.Height, Plant_Loader.getStandardHeight)
        set(Plant_Loader.Radius, Plant_Loader.getRadius)
        Plant_Loader.Generate
    ```
3.  保存して生成します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-2CC15C0F-0111-4FAB-BD50-F3531FFE7EF8-web.png" title=" " width="500" >}}
 これでヤシの木は正しい高さと半径を持つようになりましたが、この方法はサイズを更新する効率的な方法とは言えません。この方法が複雑なのは、まずどの属性をどの順番で再計算する必要があるのかを知っておく必要があり、次に、どのように再計算するのかを知っておく必要があるためです。

## ダイナミック インポートを使用してツリー サイズを修正する

この間違いを修正する推奨される方法は、[ダイナミック インポート](https://doc.arcgis.com/en/cityengine/latest/cga/cga-import-keyword.htm#ESRI_SECTION2_4A6DA0793CEF40669C2950D3A884CE65)を使用することです。**set()**
操作で属性を設定する代わりに、動的インポートを使用して目的の属性を設定すると、依存する属性や定数が自動的に再計算されます。

これがどのように機能するかは、以下の **Plant_Loader**
の例を参照ください：

1.  **dynamic_imports_04.cej** シーンと **dynamic_imports_04.cga**
    ルールファイルを開いてください。

2.  **Name** 属性を「Coconut Palm」に設定するダイナミック
    インポートを使用するように **Tree** ルールを修正します：
     ```
     Tree -->
        Plant_Loader(Name="Coconut Palm").Generate
     ```
     **Height** と **Radius** の属性は、考えるまでもなく自動的に更新されます。

3.  保存して生成します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-2CC15C0F-0111-4FAB-BD50-F3531FFE7EF8-web.png" title=" " width="500" >}}
 シーンは以前と同じ状態です。ヤシの木が道の両脇に並び、高さも半径も正しく設定されています。違いはコードの中にあります。ダイナミック インポートでは、必要な属性だけを設定すれば、属性の依存関係は自動的に再計算されます。

4.  **Plant_Loader** のダイナミック
    インポートを使用して、歩道に沿ってシャクナゲ (Rhododendron Azaleas)
    を挿入するように **Bush** ルールを修正します：
    ```
    Bush -->
        Plant_Loader(Name="Rhododendron Azaleas").Generate
    ```
5.  保存して生成します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-22-Dynamic-imports/GUID-2CC15C0F-0111-4FAB-BD50-F3531FFE7EF8-web.png" title=" " width="500" >}}
 インポートした同じ **Plant_Loader** を使い、シェープツリーの異なるポイントにダイナミック インポートで **Name** 属性を異なる値に設定することで、ヤシの木やシャクナゲの茂みを挿入しています。
 **dynamic_imports_05.cej** シーンと **dynamic_imports_05.cga** ファイルを開くと、最終的なシーンとルール ファイルを確認できます。このチュートリアルでは、以下の方法を学びました：
 <br> 
 <br> 属性の依存関係を理解する必要があり、エラーが発生しやすい非効率的な方法で、シーンに植物を挿入します。
 <br> 
 <br> ダイナミック インポートの推奨方法で、シーンに植物を挿入します。この方法では、必要な属性だけを設定し、依存する属性は自動的に再計算されます。
