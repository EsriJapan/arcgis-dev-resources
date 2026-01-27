+++
title = "ソフトウェアの認証"
description = "CityEngine Administrator Wizard での認証について説明します。"
Weight = 2
alwaysopen = false
date = 2025-07-03T00:00:00+09:00
author = "森圭吾" 
draft = false 
+++

ArcGIS CityEngine には、[指定ユーザー](#指定ユーザー-named-user)、[単独使用](#単独使用-single-use)、[同時使用](#同時使用-concurrent-use)の 3 つのライセンス形態があります。<br>
CityEngine のインストールが完了すると CityEngine Administrator Wizard が表示され、ライセンス形態を選択してソフトウェアを認証することができます。

{{< callout >}}

後で CityEngine Administrator Wizard を起動するには、[スタート] → [すべてのプログラム] → [ArcGIS] から [CityEngine <バージョン> Administrator] を起動します。

{{< /callout >}}

## 指定ユーザー (Named User)
指定ユーザー ライセンスは、CityEngine は ArcGIS Online または ArcGIS Enterprise に保存されているライセンスを使用できます。

1. CityEngine Administrator Wizard で [CityEngine Named User] を選択します。
2. CityEngine を起動し、ライセンスが割り当てられた ArcGIS Online または ArcGIS Enterprise アカウントの認証情報を入力してサイン インします。

{{< callout >}}

ライセンスの割り当てについての詳細は「[ライセンスの割り当てと解除]({{% ref "online/get-started/administer/license/assign" %}} "ライセンスの割り当てと解除")」をご参照ください。

{{< /callout >}}

## 単独使用 (Single Use)
単独使用ライセンスは、使用する個々のマシンについて認証を行う必要があります。認証には、ESU または EVA から始まる 9 ケタの数字の認証番号が必要です。

1. My Esri で ArcGIS CityEngine 単独使用ライセンスの認証番号を取得します。詳細は「[ライセンス ファイルの作成方法](https://www.esrij.com/myesri/license/desktop/)」をご参照ください。
2. CityEngine Administrator Wizard で [CityEngine Single Use] を選択し、[Authorize Now (今すぐ認証)] をクリックして、Software Authorization Wizard (ソフトウェア認証ウィザード) を起動します。
3. ウィザードに従ってソフトウェアを認証します。詳細は[ヘルプ](https://desktop.arcgis.com/ja/arcmap/latest/get-started/installation-guide/authorization-wizard.htm)をご参照ください。

## 同時使用 (Concurrent Use)
ArcGIS CityEngine を同時使用ライセンスで使用するには、ネットワーク上のライセンス サーバーに ArcGIS License Manager がインストールされ、ArcGIS CityEngine の同時使用ライセンスで認証されている必要があります。

{{< callout >}}

ライセンス サーバーの ArcGIS License Manager のバージョンが、コンピューターにインストールした ArcGIS CityEngine のバージョンをサポートしていることをご確認ください。
<br>
詳細は、ArcGIS License Manager の「[サポートされているソフトウェア製品](https://desktop.arcgis.com/ja/license-manager/latest/supported-software-products.htm)」をご参照ください。

{{< /callout >}}

1. My Esri で ArcGIS CityEngine 単独使用ライセンスの認証番号を取得します。詳細は「[ライセンス ファイルの作成方法](https://www.esrij.com/myesri/license/desktop/)」をご参照ください。
2. ライセンス サーバーの ArcGIS License Manager でライセンスを認証します。
3. CityEngine Administrator Wizard で [CityEngine Concurrent Use] を選択します。
4. ライセンス サーバーを定義します。

{{< callout >}}

ライセンス マネージャーのインストールと認証については、「[License Manager ガイド](https://desktop.arcgis.com/ja/license-manager/latest/welcome.htm)」をご参照ください。

{{< /callout >}}

{{< callout >}}

2025 年 5 月 30 日をもって、単独使用 (SU)、同時使用 (CU) の新規・追加販売は終了しています。
今後、ArcGIS CityEngine を利用になる場合は、指定ユーザー (Named User) である、Professional または Professional Plus ユーザー タイプの購入をご検討ください。

{{< /callout >}}