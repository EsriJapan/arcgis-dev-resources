+++
title = "処理設定の確認"
description = "高速テンプレートの設定内容を確認します。"
Weight = 2
alwaysopen = false
date = 2022-08-17T00:00:00+09:00
lastmod = 2023-12-27T00:00:00+09:00
author = "hashimoto" 
draft = false 
publishDate = 2023-12-28T00:00:00+09:00
+++

## 処理設定の確認

1.  \[ホーム\] タブで \[オプション\] をクリックして処理設定を確認します。

 ![オプションボタン](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/processing_options.png)

高速テンプレートのデフォルトの設定では、\[画像の調整\] タブの \[タイポイント オプション\] / \[初期の画像の縮尺\] で「1/4 (画像サイズの 4 分の 1)」が選択されています。
これにより処理時間が短縮されます。その他の設定は、2D テンプレートと似ていますが、2D テンプレートでは \[調整の改善\] チェックボックスがオンになっており、より高品質なプロダクトを生成するために画像スケールが自動的に調整されるようになっています。時間短縮のため、このオプションはオフになっています。  
\[2D プロダクト\] タブをクリックすると、作成するプロダクトは、\[トゥルーオルソの作成\] のチェック ボックスだけがオンになっていることが確認できます。作成するプロダクトを最小限にすることで処理時間を削減することができます。

 ![処理オプション1](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/2drapid_processingoption1.png)

  ![処理オプション1](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/2drapid_processingoption2.png)

2.  今回はデフォルトの設定で処理を実行するので、そのまま \[OK\] をクリックします。

3.  \[ホーム\] タブの \[開始\] をクリックし、処理を実行します。

 ![開始ボタン](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/pricessing_start.png)

{{< callout >}}

処理を開始すると、\[管理\] ウィンドウ下部で現在行われている処理の色が変化します。  
また、処理内容と進行状況のバーが最下部に表示され、リアルタイムで確認することができます。
<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/2drapid_processingstatus.png" width="50%">

{{< /callout >}}