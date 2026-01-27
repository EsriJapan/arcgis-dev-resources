+++
title = "クレジットの取得と管理"
description = "ArcGIS Online の組織の管理者がクレジットを管理する方法について説明します。"
Weight = 1
alwaysopen = false
publishDate = 2024-06-06T00:00:00+09:00
draft = false
author = "吉根"
+++

ここではクレジットの取得と、組織の管理者が管理する方法について説明します。
組織の管理者がクレジットの利用状況や残数を確認する方法については「[スタートアップ ガイド](https://doc.esrij.com/online/get-started/administer/subscription/)」をご参照ください。

- [クレジットの取得](#クレジットの取得)
- [クレジットの管理](#クレジットの管理)

## クレジットの取得
### 組織に付属するクレジット
[ユーザー タイプ](https://www.esrij.com/products/user-types/)には、一定数のクレジットが付属しています。サブスクリプションの購入および更新時に、組織のユーザーの合計付属クレジットが組織に付与されます。

<center><span style="font-size: 120%">ArcGIS Online ユーザー タイプ別 付属クレジット数</span></center>
<table>
    <tr>
    </tr>
    <tr>
      <th width="13%"></th>
      <th width="15%">Viewer</th>
      <th width="15%">Contributor</th>
      <th width="15%">Mobile Worker</th>
      <th width="15%">Creator</th>
      <th width="15%">Professional / Professional Plus</th>
    </tr>
    <tr>
      <td>クレジット数 (年) </td>
      <td>0</td>
      <td>250</td>
      <td>250</td>
      <td>500</td>
      <td>500</td>
    </tr>
</table>


例えば、Viewer 1 人、Contributor 1 人、Creator 3 人の合計 5 ユーザーの組織の場合、1,750 クレジット (0 + 250 + (500 × 3)) が組織に付与されます。



### 追加のクレジットを取得
クレジットを消費しきってしまった場合や追加で購入したい場合、[ESRIジャパン ショップ](https://shop.esrij.com/shopbrand/ct43/)から追加クレジットを購入できます。

追加のクレジット単位

- 1,000 クレジット (1 ブロック)
- 5,000 クレジット (5 ブロック)


{{< callout >}}

  - <span style="font-size: 110%">クレジットの有効期間</span>
    <br>チャージされた種類によって異なります。
    - <span style="font-size: 90%">組織にチャージされるクレジット : 年間サブスクリプション開始から 1 年間
    - <span style="font-size: 90%">追加購入したクレジット : 購入から 2 年間</span>
    
    <b>※未使用のクレジットは次年度に持ち越すことはできません。クレジットの失効にご注意ください。</b>
  - <span style="font-size: 110%">クレジットがなくなりそうな場合</span>
    <br>管理者は、組織がクレジットの 75% および 100% を消費したときや、メンバーがクレジット割り当て制限の 100% を消費したときに電子メール通知を受け取ります。通知を受け取った場合は、追加のクレジットを取得またはクレジット消費量の上限を設定していただくことを推奨します。
  - <span style="font-size: 110%">サービス クレジットを超過して利用した場合</span>
    <br>超過分が次回の契約更新の際、または追加クレジット購入の際に差し引かれます。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/reference/faq.htm#anchor28)をご参照ください。
    <br><b>※組織サイトのクレジットがすべて消費された場合は、サブスクリプションが制限されたり、残りのクレジットがマイナスになったりする場合があります。</b>

{{< /callout >}}


## クレジットの管理
### 組織のクレジット使用状況の確認

管理者は、[組織] → [概要] タブの [クレジット] パネルから組織の消費クレジット状況を確認できます。詳細は「[クレジットの管理と監視](/online/get-started/administer/subscription/credit/#クレジットの管理と監視)」をご参照ください。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/credits/manage-credits-creditpanel.png" title="クレジット パネル" width="50%" >}} 

<br>また、クレジット使用状況をレポートとして CSV 形式でダウンロードできます。
詳細は「[レポート](https://doc.esrij.com/online/get-started/administer/subscription/report/)」をご参照ください。


### クレジット消費量の上限設定
管理者は、大量のクレジット消費を防止するために、組織のメンバーに対して、使用可能なクレジット数の上限を設定することができます。<br>詳細は「[クレジット消費量の上限設定](/online/get-started/administer/subscription/credit/#クレジット消費量の上限設定)」をご参照ください。
<br>また、[各メンバーの利用可能なクレジットを設定ページに表示] のトグルを有効化することで、組織のメンバーが、自身の [設定] ページで利用可能なクレジット数を確認できます。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/credits/manage-credits-limit.png" title="クレジット数の上限" width="50%" >}} 

### カスタム ロールの作成
管理者は、カスタム ロールを組織のメンバーに割り当てることで、クレジット消費を防ぐことが出来ます。
例えば、ユーザー タイプが Creator のメンバーに、ジオコーディングや空間解析などの[クレジットを消費する機能](http://localhost:1313/online/users-guide/credits/use/use-credits/#解析機能)を制限したい場合、デフォルトの公開者ロールをベースとして、これらの機能を無効にしたカスタム ロールを作成し、割り当てることができます。
カスタム ロールの詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/administer/member-roles.htm#ESRI_SECTION1_30C4E874B2A94ACFBDCC0F13400E5B4E)をご参照ください。


   {{< callout >}}

   カスタム ロールの作成手順は、以下のブログで紹介しています。
   <br>[もう怖くない！ ArcGIS Online におけるクレジット～組織全体での効率的な活用法～ (ArcGIS ブログ)](https://blog.esrij.com/2023/03/24/post-48548/#i-3)
   
   また、ロールの変更方法については「[ロールの変更](https://doc.esrij.com/online/get-started/administer/members/role/)」をご参照ください。

   {{< /callout >}}

