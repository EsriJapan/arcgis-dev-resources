+++
title = "ArcGIS Hub Premium の有効化"
description = "ArcGIS Hub Premium のライセンスを有効化して、コミュニティー組織サイトを設定する方法を説明します。"
Weight = 2
alwaysopen = false
date = 2024-08-15T00:00:00+09:00
author = "中家" 
draft = false
+++

ArcGIS Hub Premium では、既存の ArcGIS Online 組織サイトとは別に、ステークホルダーと地域課題を解決していくためのコミュニティ組織サイトを利用できます。ArcGIS Hub Premium のライセンスを有効化して、コミュニティー組織サイトを設定する方法を説明します。 

  {{< callout type="info" >}}
    
   この手順は ArcGIS Hub Premium をご契約された組織のみが対象です。   
   
  {{< /callout >}}

ArcGIS Hub Premium のサブスクリプションの有効化とコミュニティー組織サイトの設定は、組織向けの ArcGIS Online 開始手順と同様で、管理者がセットアップする必要があります。

以下の手順に沿ってセットアップを行います。
    
- [コミュニティー組織の有効化](#コミュニティー組織の有効化)
- [管理者メンバーの追加 (オプション)](#管理者メンバーの追加-オプション)
- [コミュニティー組織サイトの設定](#コミュニティー組織サイトの設定)
- [コミュニティー アカウント作成の無効化 (オプション)](#コミュニティー-アカウント作成の無効化-オプション)


## コミュニティー組織の有効化
届いたメールからコミュニティー組織の有効化を行い、コミュニティー組織のタイトルや管理者の作成を行います。
  {{< callout type="warning" >}}
   コミュニティー組織の有効化完了までの手順は変更される場合があります。
   
  {{< /callout >}}

1. ESRIジャパンから送信される、以下の件名の案内メールを開きます。
    - 【ESRIジャパン】出荷のお知らせ (EJ ○○○○○○○○)
    
        件名の後に EJ から始まるESRIジャパン受注番号が付きます。

    {{< callout type="info" >}}
    
    件名は変更される場合があります。メールが見当たらない場合は、弊社の営業担当者か、online@esrij.com にお問い合わせください。    
    
    {{< /callout >}}

2. メール文章内の、＜お客様のサブスクリプションID 有効化ページ＞ の URL (下図参照) をクリックします。
   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/setup/admin/activate-subscription-url.png" caption="案内メール" width="450" alt="お客様のサブスクリプション ID 有効化ページ">}}
    {{< callout type="important" >}}

    メールに記載の「ライセンス顧客 ID」「サブスクリプション ID」は各種お問い合わせの際に必要な情報となりますので、この案内メールは大切に保管してください。

    {{< /callout >}}


1. 親組織のアカウントでサイン インします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/quick-action/activate-premium-signin.png" caotion="サイン イン画面" width="400" >}}


1. 画面の案内に従って以下を設定します。
   - ステップ 1
       - コミュニティー組織のタイトル
       - ショートネーム (https://○○.maps.arcgis.com の ○○ 部分)
   - ステップ 2
       - コミュニティー組織の管理者の作成
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/quick-action/activate-premium-settings.png" caption="Hub コミュニティー組織の設定" width="550" >}}

   {{< callout type="important">}} 

     - 組織サイトのショート ネームは組織の URL を作成する際に使用されるため、使用する名前をよく検討することをおすすめします。ショート ネームは最大 16 文字で、半角英数字とハイフンのみ使用できます。ハイフンは、ショート ネームの URL の最初または最後には使用できません。
     また、ArcGIS Hub で作成したすべてのアイテムに保存されるため、ショート ネームを変更した場合、既存のコンテンツへのリンクが壊れる可能性があります。
     ショート ネームの変更に関しては「[組織のショート ネームを変更する際の注意事項と、変更後に実施すべきことはそれぞれ何ですか？](https://doc.arcgis.com/ja/arcgis-online/reference/faq.htm#anchor93)」をご参照ください。

     - ユーザー名とパスワードは、各種アプリで利用するために大切なアカウント情報です。忘れないようにしてください。

   {{< /callout >}}

1. ステップ 2 の [Esri ArcGIS Online の利用規約とプライバシーポリシーに同意します。] チェックボックスをオンにし、[次へ] をクリックすると、Hub Premium の有効化が実行されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/quick-action/activate-premium-finish.png" caption="Hub コミュニティー組織の有効化" width="500" >}}

コミュニティー組織の有効化に関する設定が完了すると、ArcGIS Hub の概要ページが表示され、サイトを作成することができます。

{{< callout type="warning" >}}

コミュニティー組織の有効化に関する設定完了と同時に「Hub コミュニティーの管理」という件名のメールが届きます。コミュニティー組織の管理者アカウント情報です。削除しないように管理してください。 
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/quick-action/activate-premium-mail.png" caption="「Hub コミュニティーの管理」メール" width="550" >}}
    
{{< /callout >}}


## 管理者メンバーの追加 (オプション)

コミュニティー組織を複数人で管理する場合は、追加のコミュニティー管理者アカウントを作成します。詳細な手順は 「[メンバーの追加](https://doc.esrij.com/online/get-started/setup/admin/add-members/)」をご参照ください。

## コミュニティー組織サイトの設定
コミュニティー組織サイトの ArcGIS Online ホームページを設定します。詳細な手順は「[組織の設定](https://doc.esrij.com/online/get-started/setup/admin/settings)」をご参照ください。

## コミュニティー アカウント作成の無効化 (オプション)
デフォルトでは、サイトのサイン イン画面でユーザー自身によって[コミュニティー アカウントを作成](https://doc.arcgis.com/ja/hub/community/create-a-community-account.htm)できる設定になっています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/quick-action/activate-premium-createaccount.png" title="コミュニティー アカウントの作成オプション" width="300" >}}

この設定を変更して、ユーザーによるコミュニティー アカウントの作成を無効化することができます。無効化すると、管理者から招待されたユーザーのみコミュニティ アカウントを作成することができます。
詳細な手順は「[コミュニティー アカウント作成の有効化または無効化](https://doc.arcgis.com/ja/hub/community/configure-community-sign-in-prompt.htm#ESRI_SECTION1_C30D73392D964D51A8B606128A8A6E8F)」をご参照ください。

{{< callout type="info" >}}
    
Facebook や Google、Apple ID、GitHub のソーシャル アカウントでのコミュニティー アカウントの作成も無効化する場合は、[ソーシャル アカウント (Apple、Facebook、GitHub、Google)] のチェックボックスもオフにします。  
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/quick-action/activate-premium-social.png" caption="ソーシャル アカウントのチェックボックス" width="350" >}}

{{< /callout >}}