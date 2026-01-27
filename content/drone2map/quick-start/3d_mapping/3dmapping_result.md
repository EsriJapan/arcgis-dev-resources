+++
title = "処理結果の確認"
description = "3D プロダクト テンプレートによる処理結果を確認します。"
Weight = 3
alwaysopen = false
date = 2023-12-27T00:00:00+09:00
author = "hashimoto" 
draft = false 
publishDate = 2023-12-28T00:00:00+09:00
+++

## 結果の確認

処理が完了すると \[コンテンツ\] ウィンドウに 3D メッシュとポイント クラウドが追加されます。マップが 3D 表示でない場合は、\[3D マップ\] タブをクリックして、表示を 3D マップに変更します。
 
  ![結果_3D メッシュ](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/3dmapping_3b.png)

  \[コンテンツ\] ウィンドウの \[3D プロダクト\] グループで「ポイント クラウド」レイヤーのチェック ボックスをオンにするとポイント クラウドが表示されます。

 ![結果_点群](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/drone2map/QS/3dmapping_3a.png)

レイヤーの表示・非表示、画面移動やズームを行い、結果を確認します。

\[3D マップ\] のマウス操作は、マウスの左ドラッグで画面移動、中央のホイールの回転で拡大
/ 縮小、シフトキー + 右ドラッグで回転や傾斜の動作ができます。

{{< callout >}}

良い結果を得るには、[地上基準点(GCP)](https://esrij-esri-support.custhelp.com/app/answers/detail/a_id/6797/kw/drone2map) を使用してプロダクトを生成します。GCP を使用しない場合、誤った標高値によって正しく結果が表示されない場合があります。

{{< /callout >}}