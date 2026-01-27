+++
title = "コンテンツの作成"
description = "サイトで共有・公開するコンテンツの作成について説明します。"
Weight = 1
alwaysopen = false
date = 2025-08-29T00:00:00+09:00
author = "中家" 
draft = false
+++

ArcGIS Hub のサイトで共有・公開するコンテンツを作成するには、まずアイテムを ArcGIS Online へ公開します。

{{< callout type="info">}}

ArcGIS Hub でサポートされるアイテム タイプの詳細は[ヘルプ](https://doc.arcgis.com/ja/hub/content/supported-content.htm)をご参照ください。

{{< /callout >}}

ここでは、緯度経度情報付きのテーブル データを、GIS データとして ArcGIS Online 上でフィーチャ レイヤーとして公開します。

1. サイトを作成している ArcGIS Online 組織サイトにサイン インします。
1. ArcGIS Online にフィーチャ レイヤーを公開します。詳細は「[ArcGIS Online 逆引きガイド](/online/users-guide/create-data/feature/)」をご参照ください。
1. アイテムをオープンデータとして公開し、サイトの閲覧者がダウンロードできるようにするには、アイテムのエクスポートを許可する必要があります。<br>
アイテム詳細ページの [設定] タブ → [Feature Layer (ホスト)] 項目で、[他のユーザーが別の形式にエクスポートすることを許可します] チェックボックスをオンにして、[保存] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/content/create-content-allow-export.png" caption="アイテムのエクスポートを許可" width="750" >}}