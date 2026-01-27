+++
title = "カスタム テンプレート作成の基本操作"
description = "独自のインフォグラフィックス テンプレートを作る際のパネルの作成やデザインの変更の方法などの基本的な操作について習得します。"
weight = 10
alwaysopen = false
draft = false
publishDate = 2022-09-02T00:00:00+09:00
+++

{{< callout type = "warning" >}}

本演習にかかる時間の目安は 30 分程度です。

{{< /callout >}}

このチュートリアルでは、インフォグラフィックス パネルの作成・配置方法、デザインの編集方法について学びます。本演習を通じて、以下のようなインフォグラフィックス テンプレートを作成します。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/CompletionDrawing2.png" >}}


## プロジェクトの作成

BA Web App は作成した商圏等のデータをプロジェクト単位で管理します。プロジェクトを組織内で共有することで組織または特定のユーザーと共同作業を行うこともできます。

{{< callout type = "important" >}}

プロジェクトの作成方法については、<a href="/business-analyst/web/tutorial/guided-tour/" target="_blank">ガイド ツアー</a>のレベル 1「プロジェクトの作成」、管理方法についてはレベル 5「プロジェクトの管理」をご確認ください。

{{< /callout >}}

プロジェクトが作成されると画面にマップが表示されます。画面左側に [プロジェクト] ウィンドウが開くので、[閉じる] をクリックして閉じます。

{{< callout type = "info" >}}

マップに作業データが残っている場合は、画面右側の [マップ ツール バー] で [マップの消去] ボタンをクリックしマップ上からデータを消去します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/clear-map.png" title="" >}}

{{< /callout >}}

## テンプレートの選択

本手順では一からインフォグラフィックス テンプレートを作成するため、「空のテンプレート」を選択します。

1. [レポート] タブ → [レポートの作成] → [インフォグラフィックスの作成] をクリックします。
2. [空のテンプレート] をクリックします。
3. [空] のテンプレートにカーソルを合わせ、[開く] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-blank.png" >}}

## パネルの作成・追加

テンプレート内にチャートやテキスト、テーブルなどを表示するためのインフォグラフィックス パネルを作成・追加します。BA Web App の標準テンプレート内のパネルを使用する方法と標準データから作成する方法があります。

本演習では、人口総数や年代別人口構成の分析に適したパネルを追加します。

### ①既存テンプレート内のパネルを使用

既存テンプレート内のパネルを再利用する方法をご紹介します。ここでは、標準テンプレートの「人口・世帯プロファイル」内の「年代別人口の構成割合」パネルを使用します。

1. [ + エレメントの追加] → [別のテンプレートからパネルを追加] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-panel-from-other-template.png" >}}
2. [標準テンプレート] タブ →「人口・世帯プロファイル」にカーソルを合わせ、[開く] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/population-households-profile.png" >}}
3. 「年代別人口の構成割合」のチャートにカーソルを合わせ、[+ 追加] をクリックし、[パネルの追加] を選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/population-ratio-by-age-chart.png" >}}
4. 追加したパネルにカーソルを合わせ、[パネル オプション] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/open-panel-option.png"  >}}
5. [寸法] および [整列と配置] を展開し、以下のように設定します。
     - 寸法
       - 高さ (px): 280
       - 幅 (px): 660
     - 整列と配置
       - 左 (px): 30
       - 上 (px): 510<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/adjust-panel-size1.png"  >}}
6. 同じパネル上で [編集] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-panel.png" >}}
7. 画面右下の [チャート オプション] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/chart-option.png" >}}
8. [横軸] タブをクリックして展開し、タイトルに「年代 (代)」と入力します。
9. 同様に [縦軸] タブを展開し、タイトルに「年代別人口の構成割合 (%)」と入力します。
10. [凡例] タブを展開し、[位置:] の「右」をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/legend-setting.png"  >}}
11. 画面右下の [適用] をクリックし、編集画面を閉じます。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process1.png"  >}}
12. 手順 1～3 と同様の手順で「人口・世帯プロファイル」から「年代別人口の構成割合」のテーブルを追加します<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/population-ratio-by-age-table.png" >}}
13. 追加したテーブルの [パネル オプション] を開き、以下のように設定します。
     - 寸法
       - 高さ (px): 280
       - 幅 (px): 290<br/>
     - 整列と配置
       - 左 (px): 730
       - 上 (px): 510<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/adjust-panel-size2.png"  >}}

ここまでの操作で、標準テンプレートからパネルを追加し、レイアウトの調整を行うことができました。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process2.png"  >}}

### ②独自のインフォグラフィックス パネルを構築

続いて、独自のパネル構築を行います。本手順では、国勢調査の人口総数と人口密度を使用します。

1. [ + エレメントの追加] → [インフォグラフィックス] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-infographic-panel.png" >}}
2. [+ インフォグラフィックス　パネルの作成] ボタンをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/create-infographic-panel.png" >}}
3. [インフォグラフィックス パネルの作成] ウィンドウが開いたら、[人口] カテゴリをクリックし、[一般的な変数] から、以下の変数をそれぞれクリックして追加します。
     - 2020 人口総数 (国勢調査)
     - 2020 人口密度 (平方㎞あたり)(国勢調査)<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-variables_24r2.png" >}}

{{< callout type = "info" >}}

追加した変数は [選択した変数] ボタンで確認・編集できます。

{{< /callout >}}

4. [次へ] をクリックし、「2020 人口総数」のアイコンをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-variable-icon1.png" >}}
5. [形状とアイコン] をクリックします。
6. [すべてのアイコン] のプルダウン リストから「人」を選択し、以下のアイコンのうち任意のものを 1 つ選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-variable-icon1.png" >}}
7. 「2020 人口総数」の変数にカーソルを合わせ、[スタイルと形式の編集] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-variable-text1.png" >}}
8. [スタイルおよび形式] が開くので [テキストの色] をクリックし、黒色を選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-variable-text-color.png" >}}
9. 文字サイズを 32px に設定し、[スタイルおよび形式] を閉じます。
10. 「2020 人口総数」の説明にカーソルを合わせ、 [テキストの編集] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-variable-name-text1.png" >}}
11. 「国勢調査：人口総数」と入力します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-variable-name-text.png" >}}
12. [テキスト スタイル] で文字サイズを 16px に変更します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/pop-infographic-panel-fix.png" >}}
12. 「2020 人口密度 (平方 ㎞ あたり)」のアイコンをクリックし、先ほどと同様の手順で以下のアイコンから任意のものを 1 つ選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-variable-icon2.png" >}}
13. 「2020 人口密度 (平方 ㎞ あたり)」の変数にカーソルを合わせ、[スタイルと形式の編集] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-variable-text2.png" >}}
14. 先ほどと同様の手順で [テキストの色] を黒色に変更し、文字サイズを 32 px に変更します。
15. 「2020 人口密度 (平方 ㎞ あたり)」の説明にカーソルを合わせ、[テキストの編集] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-variable-name-text2.png" >}}
16. 「国勢調査：人口密度 (平方 ㎞ あたり)」と入力し、文字サイズを 16px に変更します。

{{< callout type = "info" >}}

Shift キーを押しながら Enter キーを押すと、改行できます。

{{< /callout >}}

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/popdensity-infographic-panel-fix.png" >}}

17. [保存] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/infographics-panel-fix.png" >}}
18. タイトルに「国勢調査：人口総数と人口密度」と入力し、保存します。

作成したインフォグラフィックス パネルは [マイ パネル] に保存されます。

{{< callout type = "info" >}}

保存したパネルは、他のテンプレート作成時にも繰り返し使用できます。さらに、作成したパネルを組織内に共有すると、組織内の他の BA Web App ユーザーも [共有パネル] から利用できるようになります。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/my-panel.png" >}}
{{< /callout >}}

19. 作成したパネルにカーソルを合わせ [追加] をクリックします。
20. 追加したパネルをドラッグして、以下のように配置します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process3.png" >}}


ここまでの操作で、独自パネルの作成・追加ができました。

### ③マップの追加

本手順ではマップの追加およびレイアウトの調整を行います。

1. [+ エレメントの追加] → [マップ] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-map-panel.png" >}}
2. [ベースマップ] タブの「地形図」をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-basemap.png" >}}
3. マップ パネルをドラッグし、以下のように配置します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/map-panel-placement.png" >}}

ここまでの操作で、マップの追加およびレイアウトの調整を行いました。

## ヘッダーの追加

本手順ではタイトル・サイト名等を記載したヘッダー パネルを作成します。

### ①タイトルの追加

1. [+ エレメントの追加] → [テキスト] → [テキスト ボックス] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-text-panel.png" >}}
2. テキスト パネル 内の [テキストを入力] をクリックし、「人口・年代別人口プロファイル」と入力します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/enter-text.png" >}}
3. [テキスト スタイル] で文字サイズを 48px に変更します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-text-style-setting.png" >}}
4. 赤枠内のボタンをクリックし、テキストを太字にします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/enabled-bold.png" >}}
5. [テキスト スタイル] を閉じます。
6. 「人口・年代別人口プロファイル」のテキスト パネルをドラッグし、リサイズしながら、以下のように配置します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process4.png" >}}

ここまでの操作で、タイトルの追加・編集を行いました。

### ②サイト名の追加

サイト名とは、商圏を作成したときの地点名を指します。本手順ではサイト名を表すパネルを作成し、解析地点を一目で分かるようにします。

1. [+ エレメントの追加] → [テキスト] → [テキスト ボックス] をクリックします。
2. [テキスト スタイル] の [設定を増やす] → [＋動的なフィールドまたはノートの追加] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-dynamic-field.png" >}}
3. [サイト名] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-site-name.png" >}}
4. [テキスト スタイル] で文字サイズを 32px に変更します。
5. [テキスト スタイル] を閉じます。
6. [サイト名] のテキスト パネルをドラッグし、リサイズしながら、以下のように配置します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process5.png" >}}

これまでの操作で、サイト名がインフォグラフィックス テンプレート内に表示されるようになりました。

### ③アイコンの追加

本演習では人に関するアイコンを追加しますが、企業のロゴ画像などの任意画像を設定することも可能です。

1. [エレメントの追加] → [画像] → [形状とアイコン] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-image-panel.png" >}}
2. [すべてのアイコン] のプルダウン リストから、「人」を選択します。
3. 「個人」をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-icon.png" >}}
4. 「個人」アイコン パネルをドラッグし、リサイズしながら、以下のように配置します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process6.png" >}}

以上で、インフォグラフィックス テンプレートの土台が完成しました。

## デザインの編集

本演習では、インフォグラフィックス テンプレートはカラー テーマの変更および各パネルのデザイン編集を行います。

### ①カラー テーマの変更

カラー テーマを変更することで、背景やアイコン、チャートなどの色をテンプレート全体で変更します。

1. [テーマ] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-theme.png" width="50%" >}}
2. グレー スケールのカラー テーマをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-color-theme.png" >}}

{{< callout type = "info" >}}

[テンプレートのプレビュー] 上で、変更後のイメージを確認できます。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/preview-template1.png" >}}

{{< /callout >}}

3. [アイコン] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-icon.png" >}}
4. 下記の画像内の赤枠で囲った色 (青緑色) をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-icon-color.png" >}}<br/>

5. [適用] をクリックします。
 
以上の手順によりテンプレート全体のカラー テーマの変更が完了しました。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/preview-template2.png" >}}

### ②チャートの調整

「年代別人口の構成割合」チャートの区画との比較の色が目立たないため、色を変更します。

1. 「年代別人口の構成割合」のチャート パネルにカーソルを合わせ [編集] をクリックします。
2. 画面右下の [チャート オプション] をクリックします。
3. [区画との比較] タブをクリックし、展開します。
4. 下記の画像を参照し、[色] クリックし、白色を選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-comparison-chart-color.png" >}}<br/>
5.	[適用] をクリックします。

ここまでの操作で、「年代別人口の構成割合」チャート内にある、比較対象の区画を表す系列の色を変更しました。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/current-process7.png" >}}

### ③テーブルのデザイン編集

「年代別人口の構成割合」テーブル内にある Index 値の色を変更し、枠線の追加を行います。

1. 「年代別人口の構成割合」のテーブル パネルにカーソルを合わせ [編集] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/edit-table-panel.png" >}} 
2. 下記の画像の赤枠で囲ったセルをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-table-cell1.png" >}}
3. Shift キーを押しながら下記の画像の赤枠で囲ったセルをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-table-cells1.png" >}}
4. 「スパナ アイコン」をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-wrench-icon1.png" >}}
5. [テキスト スタイリング] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/text-styling.png" >}}

{{< callout type = "info" >}}

テキスト スタイリングでは、条件に応じたスタイルの変更を行えます。ここでは、Index 値に応じてテキストの色を変更しています。

{{< /callout >}}

6. 「セル値 95 未満」の [スタイルの変更] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-style1.png" >}}
7. [テキストの色] をクリックし、下記の画像内の赤枠で囲った色 (黄緑色) を選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-text-color1.png" >}}<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-text-color1.png" >}}
8. 「セル値 105 より大きい」の [スタイルの変更] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/change-style2.png" >}}
9. 同様の手順で、下記の画像内の赤枠で囲った色 (水色) を選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-text-color2.png" >}}
10. [適用] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/apply-text-styling.png" >}}
11.  赤枠内のセルをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-table-cell2.png" >}}
12. Shift キーを押しながら下記の画像の赤枠で囲ったセルをクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/select-table-cells2.png" title="" >}}
13. 「スパナ アイコン」をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-wrench-icon2.png" title="" >}}
14. [枠線] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/border.png" title="" >}}
15. 赤枠内の [色] をクリック、白色を選択します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-border-color.png" title="" >}}<br/>
16. [描画] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/click-drawing.png" title="" >}}
17. こちらのウィンドウを閉じます。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/cell-edit-pane.png" title="" >}}
18.  [適用] をクリックします。
 
ここまでの操作で「年代別人口の構成割合」テーブル内のIndex 値の色を変更し、白い枠線を表示することができました。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/infographics-fix.png" title="" >}}

以上で、インフォグラフィックス テンプレートが完成しました。

## テンプレートの保存

作成したテンプレートを繰り返し使えるようにするため、保存を行います。

1. 画面右下の [保存] をクリックします。
2. タイトルに「人口・年代別人口プロファイル」と入力し [保存] をクリックします。
3. インフォグラフィックスの保存後、表示されるダイアログを確認の上、[OK] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/saved-infographic.png" title="" >}}

ここまでの操作で「人口・年代別人口プロファイル」テンプレートの保存が完了しました。保存されたテンプレートは [マイ テンプレート] タブに追加されます。

## インフォグラフィックスの実行

1. [マップ] タブをクリックします。
2. 右上のメニューが [ピンの追加] になっていることを確認して、「円町駅」と入力し、Enter キーを押します。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add-pin_24r2.png" title="" >}}

3. マップが移動し、京都府の円町駅上にピンがプロットされるので、[サイトの作成] をクリックします。
4. [リング] タブで、半径 1 キロメートルと設定し、[適用] をクリックします。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/1km-ring.png" title="" >}}
5. 表示されたポップアップから [インフォグラフィックス] を選択します。
6. [実行するインフォグラフィックスの選択] プルダウン リストの [マイ インフォグラフィックス] の中から「人口・年代別人口プロファイル」を選択し、[インフォグラフィックスの実行] をクリックします。

{{< callout type = "info" >}}

[実行するインフォグラフィックス] が表示されない場合、<a href="https://doc.arcgis.com/ja/business-analyst/web/set-preferences.htm" target="_blank" >初期設定</a>を開き、以下の通り [開く前にサイト メニューで～] のオプションを有効にして保存します。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/report-preference.png" title="初期設定" >}}

{{< /callout >}}

インフォグラフィックスが実行され、円町駅から 1km 圏内の人口分布を確認できました。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/CompletionDrawing2.png" title="" >}}

{{< callout type = "info" >}}

インフォグラフィックス内の [バーは比較対象を示しています] プルダウンをクリックすると、比較対象を「市区町村」、「都道府県」、「全国」に変更することが可能です。<br/>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/comparison-gepgraphy.png" title="" >}}

{{< /callout >}}

7. Esc キーを押して、インフォグラフィックスを閉じます。BA Web App を閉じます。

# まとめ

本演習では、インフォグラフィックスのカスタマイズの要であるインフォグラフィックス テンプレートへのパネルの作成・配置方法、デザインの編集方法について学びました。