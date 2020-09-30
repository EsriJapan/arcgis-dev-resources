+++
title = "インストール ガイド"
description = "ArcGIS Experience Builder (Developer Edition) をインストールする手順を紹介します。"
weight = 1
aliases = ["/experience/install-guide/"]
+++

## インストール

ArcGIS Experience Builder (Developer Edition) は、ArcGIS Online および ArcGIS Enterprise 10.6 以降をサポートしています。
<br/>Experience Builder (Developer Edition) は `server` と `client` の 2 つのサービスがあります。Experience Builder での更新を自動的に反映するには、両方のサービスを実行しておく必要があります。
<br/>ここでは、Experience Builder (Developer Edition) の [server](#server-インストール) と [client](#client-インストール) のインストール手順について説明します。また、インターネットに接続していない環境で Experience Builder をインストールする必要がある場合は、[オフライン](#offline-install)でのインストール手順を参照してください。

## server インストール

### ArcGIS for Developers：Client ID の作成

[ArcGIS for Developers](https://developers.arcgis.com) を使用している場合は以下の手順を行います。

1. Experience Builder は、Node.js 12+ .x 以上のバージョンで動作します。<br/> Experience Builder のインストール環境に [Node.js (v12+.x)](https://nodejs.org/en/download/) をダウンロードしてインストールを行います。 

{{% notice tip %}}
Esri が公開している[インストール動画 (英語)](https://www.youtube.com/watch?v=BcJxNaKuTxg)でも確認することができます。 
{{% /notice %}}

1. Experience Builder (Developer Edition) の ZIP ファイルをローカルに[ダウンロード](/downloads/apis-and-sdks?product=arcgis-experience-builder)して、解凍します。
<br/>サインイン ページが表示される場合は、ArcGIS for Developers 開発者アカウント（あるいは ArcGIS Online 組織向けプランのアカウント）のユーザー名およびパスワードを入力しサインインします。
2. [ArcGIS for Developers](/sign-in/)のサイトでサインインします。
3. `New Application` をクリックします。
4. `New Applications Details` で以下の内容を入力します。
    -   `Title` - 例えば、`Experience Builder credentials` などのようにあなたにとって意味があるものを入力してください。
    -   `Tags` - `Experience Builder` のような内容を入力してください。
    -   `Register New Application` をクリックします。
5.  登録したアプリケーションの `Authentication` タブをクリックします。`Current Redirect URIs` のセクションで、リダイレクト URI に `https://localhost:3001/` と入力して、`+ Add` をクリックします。
<img src="https://developers.arcgis.com/experience-builder/static/a76d166fe99df98d9049163eb0aa1676/79e48/installExB.png" />
6.  Client ID をコピーします。
7.  コマンド プロンプト、またはターミナルウィンドウを開き、Experience Builder の /server ディレクトリに cd コマンドで移動して `npm ci` と入力し、Enter キーを押して、必要なモジュールをインストールします。
8.  `npm start` と入力して server を起動します。
9.  `https://localhost:3001/` の URL で Experience Builder をブラウザで開きます。
{{% notice tip %}}
Experience Builder uses a self-signed certificate in Node.js to support
HTTPS. You can run Experience Builder using this certificate by trusting
it, or you can use your own certificate. To change the default
certificate with your own, replace these two files in the server/cert
directory: server.key and server.cert.
{{% /notice %}}
10.  Specify the URL to your ArcGIS Online and add your Client ID \> Sign in.
11.  Install the [client](#client-install).

### <a href="#create-client-id-using-arcgis-online-or-arcgis-enterprise" class="anchor before"></a>Create Client ID using ArcGIS Online or ArcGIS Enterprise

Use these steps if you're using ArcGIS Online or ArcGIS Enterprise.

1.  Experience Builder runs on top of Node.js 12+.x, download and
    install [Node.js (v12+.x)](https://nodejs.org/en/download/) for your
    operating system.

<div class="note-module--note--2xEPZ note-module--tip--YBFYJ"
style="display:#7e5baf">

Tip

<div class="note-module--note-content--1sTEH">

You can also view the [installation
video](https://www.youtube.com/watch?v=BcJxNaKuTxg) for a walkthrough.

</div>

</div>

1.  [Download](/downloads/apis-and-sdks?product=arcgis-experience-builder)
    the Experience Builder Developer edition and unzip it on your local
    drive.
2.  Log in to your ArcGIS Online or ArcGIS Enterprise portal and go to
    `My Content` tab of the content page, click `Add Item`, and select
    `An application`.
3.  In the `Add an application` dialog box, enter the following
    parameters:
    -   `Type` - Select `Application` as the type.
    -   `Title` - Enter something that makes sense to you, such as
        `Experience Builder credentials`.
    -   `Tags` - Enter something such as `Experience Builder`.
    -   Click `Add Item`.

<span class="gatsby-resp-image-wrapper"
style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:671px">
<span class="gatsby-resp-image-background-image"
style="padding-bottom:70.37037037037037%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABl0lEQVQ4y5VTS04DMQyd87DnTJyGFffgGEh8KsSCDUIgKlr6QdOZzOSf9GG7k1KNaCUsvdpJ3Bc/O1Ntt1tYa+G9RwhBvHNOPJ+dsnLuYoayATklVDFGzGYzLJdLrFYriefzucR8Qc4ZnJPIJ/oDg9eMQqh9wnfvkGiv4kqMMXtoraVi9l3XQfc92rZFT77n9bDfNI2Qj61yRPi1WEoiE4rsEIUgkA8xyZnzAYYqKRcXMq7yEBXJh+q0VMHg6oyPEguJC1AUa+vQGopVKxWy5L9sL3nU7oPb8+8AhpgtDz1lXyAVssS6rqUi9tybEpehlGEcQ8nhqquUIgz1qDyXPUj6uIJTKLkiWVFPRN4gVkA/SZLT/wh5AI/TDZ4XPR7e17gnsL99W2O6sUJf+nMIIRmQy5oftiV567pF0xso46C023nj5QvAiKhgPETeE8IdcxSIzj3y0YHwfq09Zo3FQlm4EHdDYcLxYznEX5by7uTi+gVnl3c4v5rg5qMlYo/G0pS3RySdAtvrt8HkU+Fp3qElIm5PSBk/kupFrsYmPa4AAAAASUVORK5CYII=');background-size:cover;display:block"></span>
<img src="/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/d0e73/AddApplication.png" title="Application" class="gatsby-resp-image-image" sizes="(max-width: 671px) 100vw, 671px" srcset="/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/7d4ec/AddApplication.png 216w,/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/55fc0/AddApplication.png 433w,/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/d0e73/AddApplication.png 671w" alt="Application" />
</span>

1.  Click the `Settings` tab. Scroll down to the `App Registration`
    section and click `Update`.
2.  On the `Register Info` dialog box, as shown below, enter in
    `https://localhost:3001/` for the `Redirect URI`, and click `Add` \>
    `Update`. Copy the `App ID`.

<span class="gatsby-resp-image-wrapper"
style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:666px">
<span class="gatsby-resp-image-background-image"
style="padding-bottom:90.74074074074076%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAABlUlEQVQ4y51UW27DIBDkLD1S1Uv1HO1hcoBWVT8rNY7t+I0fGDBTlgTHpHXkFGnCBu8OyzA2m6YJTdOg7/sZbduC1mkYY7A2/DMuNPJOQmoDRoVRFGG/3yOOY2RZhjRNIaXcTJjyEd+VwKimEyF1pJRaLbg1rnMcIXVFKIrCYRiGOXlLhz6P4AjLskSR504/Wtyi39pgejJIG+F06EZ9Ivon2XzkqqpQ1TX0orN7EHaoNZIkQW0JqbdLklnV7S9CPzPvQ7rprusvhTeKb23ChNQ4HHMkWYHYzmleupn3AoN91o/KgWI+SCRW6+SsN/lO6asjS2015B3qM6qmRVlz9EKCNhukcqC4EwplL1FZ0AbSEU5hh/QjhHAacs7RWnArwWjXZm08Al1NoHngQw+6IB+HpvWcy2JPGerItvptsnnk2SnY4Pfbwv7jNc92sZe5n/Az7bD7qvGRtO5CCEKRC/T8n07Abn5JFvHjyxsennd4en1H0tjPVTngUAtnIXptIxuThdjW4x5b6YpoFtYuHuMiJn1/ADbmh47iw4XlAAAAAElFTkSuQmCC');background-size:cover;display:block"></span>
<img src="/experience-builder/static/7150fd8f693e6b20d4c5e41b886efaeb/ace37/Registeredinfo.png" title="Registered Info" class="gatsby-resp-image-image" sizes="(max-width: 666px) 100vw, 666px" srcset="/experience-builder/static/7150fd8f693e6b20d4c5e41b886efaeb/7d4ec/Registeredinfo.png 216w,/experience-builder/static/7150fd8f693e6b20d4c5e41b886efaeb/55fc0/Registeredinfo.png 433w,/experience-builder/static/7150fd8f693e6b20d4c5e41b886efaeb/ace37/Registeredinfo.png 666w" alt="Registered Info" />
</span>

1.  Open a command prompt or terminal window, cd to the /server
    directory of the Experience Builder installation, type `npm ci`, and
    hit enter to install the necessary modules.
2.  Type `npm start` to start the service.
3.  Open Experience Builder at the following URL
    `https://localhost:3001/` in your browser.

<div class="note-module--note--2xEPZ note-module--tip--YBFYJ"
style="display:#7e5baf">

Tip

<div class="note-module--note-content--1sTEH">

Experience Builder uses a self-signed certificate in Node.js to support
HTTPS. You can run Experience Builder using this certificate by trusting
it, or you can use your own certificate. To change the default
certificate with your own, replace these two files in the server/cert
directory: server.key and server.cert.

</div>

</div>

1.  Specify the URL to your ArcGIS Online or ArcGIS Enterprise
    organization, and add your `App ID` for the Client ID \> Sign in.
2.  Install the [client](#client-install).

<a href="#client-install" class="anchor before"></a>Client install
------------------------------------------------------------------

To develop with Experience Builder, a service must be installed to
launch webpack to help with bundling and loading your custom widgets and
themes used in your local Experience Builder.

1.  Open a command prompt or terminal window, cd to the /client
    directory of the Experience Builder installation, type `npm ci`, and
    hit enter to install the necessary modules.
2.  Type `npm start` to start the service.

<div class="note-module--note--2xEPZ note-module--tip--YBFYJ"
style="display:#7e5baf">

Tip

<div class="note-module--note-content--1sTEH">

New files/folders created in the client/your-extensions directory will
require a restart of the client server.

</div>

</div>

You can have multiple versions of the Developer edition on the same
machine. Please check that your machine meets the [System
requirements](/experience-builder/guide/requirements).

<a href="#offline-install" class="anchor before"></a>Offline install
--------------------------------------------------------------------

1.  In a disconnected environment you will not have access to the ArcGIS
    API JavaScript(JSAPI) CDN. In this scenario, you will be required to
    [download the JSAPI](/javascript/latest/guide/get-api/#download-api)
    and install it locally.
2.  Experience Builder runs on top of Node.js 12+.x, download and
    install [Node.js (v12+.x)](https://nodejs.org/en/download/) for your
    operating system.

<div class="note-module--note--2xEPZ note-module--tip--YBFYJ"
style="display:#7e5baf">

Tip

<div class="note-module--note-content--1sTEH">

You can also view the [offline install
video](https://youtube.com/watch?v=1rO1cZNEr0E) for a walkthrough.

</div>

</div>

1.  [Download](/downloads/apis-and-sdks?product=arcgis-experience-builder)
    the Experience Builder Developer edition and unzip it on your local
    drive.
2.  Download the [npm-cache
    zip](/downloads/apis-and-sdks?product=arcgis-experience-builder) for
    the Experience Builder Developer edition and unzip it on your local
    drive.
3.  Open your user folder `(e.g., Windows OS c:\Users\exbuser)` in a
    command prompt or terminal `(e.g., macOS /Users/installExB)` and
    type `npm config get cache`.
4.  Copy the folder path of the npm-cache and open that directory in
    Windows Explorer or Finder.
5.  Copy and paste the npm-cache directory (from step 3) into this
    directory.
6.  Open a command prompt or terminal window, cd to the /client
    directory of the Experience Builder installation, type
    `npm install --offline`, and hit enter.
7.  Open another command prompt or terminal window, cd to the /server
    directory of the Experience Builder installation, type
    `npm install -- offline`, and hit enter.
8.  Open the client directory for your Experience Builder at the
    following path `<install folder>/client/dist`.
9.  There are four places you will need to update the variable
    `ARCGIS_JS_API_URL` with your local JSAPI host URL. For example,
    replace `var ARCGIS_JS_API_URL = 'https://js.arcgis.com/4.16/'` with
    `var ARCGIS_JS_API_URL = 'https://exb.esri.com/4.16/'` in each of
    the files below:
    -   `<install folder>/client/dist/index.html`
    -   `<install folder>/client/dist/experience/index.html`
    -   `<install folder>/client/dist/template/index.html`
    -   `<install folder>/client/dist/builder/index.html`
10. Open a command prompt or terminal window, cd to the /client
    directory of the Experience Builder installation, and type
    `npm start` to start the client service.
11. Open a command prompt or terminal window, cd to the /server
    directory of the Experience Builder installation, and type
    `npm start` to start the server service.

<div class="note-module--note--2xEPZ note-module--tip--YBFYJ"
style="display:#7e5baf">

Tip

<div class="note-module--note-content--1sTEH">

Experience Builder requires a connection to ArcGIS Online or ArcGIS
Enterprise portal to create a Client ID.

</div>

</div>

1.  Log in to your ArcGIS Online or ArcGIS Enterprise portal and go to
    the `My Content` tab of the content page. Click `Add Item` and
    select `An application`.
2.  In the `Add an application` dialog box, enter the following
    parameters:
    -   `Type` - Select `Application` as the type.
    -   `Title` - Enter something that makes sense to you, such as
        `Experience Builder credentials`.
    -   `Tags` - Enter something such as `Experience Builder`.
    -   Click `Add Item`.

<span class="gatsby-resp-image-wrapper"
style="position:relative;display:block;margin-left:auto;margin-right:auto;max-width:671px">
<span class="gatsby-resp-image-background-image"
style="padding-bottom:70.37037037037037%;position:relative;bottom:0;left:0;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABl0lEQVQ4y5VTS04DMQyd87DnTJyGFffgGEh8KsSCDUIgKlr6QdOZzOSf9GG7k1KNaCUsvdpJ3Bc/O1Ntt1tYa+G9RwhBvHNOPJ+dsnLuYoayATklVDFGzGYzLJdLrFYriefzucR8Qc4ZnJPIJ/oDg9eMQqh9wnfvkGiv4kqMMXtoraVi9l3XQfc92rZFT77n9bDfNI2Qj61yRPi1WEoiE4rsEIUgkA8xyZnzAYYqKRcXMq7yEBXJh+q0VMHg6oyPEguJC1AUa+vQGopVKxWy5L9sL3nU7oPb8+8AhpgtDz1lXyAVssS6rqUi9tybEpehlGEcQ8nhqquUIgz1qDyXPUj6uIJTKLkiWVFPRN4gVkA/SZLT/wh5AI/TDZ4XPR7e17gnsL99W2O6sUJf+nMIIRmQy5oftiV567pF0xso46C023nj5QvAiKhgPETeE8IdcxSIzj3y0YHwfq09Zo3FQlm4EHdDYcLxYznEX5by7uTi+gVnl3c4v5rg5qMlYo/G0pS3RySdAtvrt8HkU+Fp3qElIm5PSBk/kupFrsYmPa4AAAAASUVORK5CYII=');background-size:cover;display:block"></span>
<img src="/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/d0e73/AddApplication.png" title="Application" class="gatsby-resp-image-image" sizes="(max-width: 671px) 100vw, 671px" srcset="/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/7d4ec/AddApplication.png 216w,/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/55fc0/AddApplication.png 433w,/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/d0e73/AddApplication.png 671w" alt="Application" />
</span>

1.  Click the `Settings` tab. Scroll down to the `App Registration`
    section and click `Update`.
2.  On the `Register Info` dialog box as shown below, enter in
    `https://localhost:3001/` for the `Redirect URI`, and click `Add` \>
    `Update`. Copy the `App ID`.
3.  Open Experience Builder at the following URL
    `https://localhost:3001/` in your browser.
4.  Specify the URL to your ArcGIS Online or ArcGIS Enterprise
    organization and add your `App ID` for the Client ID \> Sign in.

</div>

<div class="layout-topic-module--toc-wrapper--3rTlY">

Current page

-   [<span class="table-of-contents-module--marker--19_8P"
    style="left:-0rem" role="presentation"></span>Install](#install)
-   [<span class="table-of-contents-module--marker--19_8P"
    style="left:-0rem" role="presentation"></span>Server
    install](#server-install)
    -   [<span class="table-of-contents-module--marker--19_8P"
        style="left:-0.75rem" role="presentation"></span>Create Client
        ID on ArcGIS Developers
        site](#create-client-id-on-arcgis-developers-site)
    -   [<span class="table-of-contents-module--marker--19_8P"
        style="left:-0.75rem" role="presentation"></span>Create Client
        ID using ArcGIS Online or ArcGIS
        Enterprise](#create-client-id-using-arcgis-online-or-arcgis-enterprise)
-   [<span class="table-of-contents-module--marker--19_8P"
    style="left:-0rem" role="presentation"></span>Client
    install](#client-install)
-   [<span class="table-of-contents-module--marker--19_8P"
    style="left:-0rem" role="presentation"></span>Offline
    install](#offline-install)

------------------------------------------------------------------------

<div id="doc-feed-container">

<div id="doc-feedback-section"
class="feedback-widget-module--feedback-container--2v8ZP">

<div class="feedback-widget-module--feedback-content--295L4">

<div id="doc-helpful-prompt">

Was this page helpful?

Yes

No

</div>

Thank you for helping us make ArcGIS for Developers even better!

<span id="improve-label">How can we improve?</span><span
id="feedback-label">Any suggestions or comments?</span>

<div id="feedback-alert">

</div>

Email (Optional)Submit Feedback

</div>

</div>

</div>

</div>

</div>

</div>

</div>

###### ArcGIS for Developers

-   [Home](/)
-   [Features](/features/)
-   [Documentation](/documentation/)
-   [Resources](/resources/)
-   [Pricing](/pricing/)
-   [Startups](https://www.esri.com/en-us/about/esri-partner-network/our-partners/esri-startup-program)
-   [Blog](https://blogs.esri.com/esri/arcgis/category/developer/)

###### ArcGIS platform

-   [ArcGIS Online](https://www.arcgis.com/features/index.html)
-   [ArcGIS Desktop](https://desktop.arcgis.com)
-   [ArcGIS Enterprise](https://enterprise.arcgis.com)
-   [ArcGIS for Developers](https://developers.arcgis.com)
-   [ArcGIS Solutions](https://solutions.arcgis.com)
-   [ArcGIS Marketplace](https://marketplace.arcgis.com)

###### About Esri

-   [About Us](https://www.esri.com/about-esri/)
-   [Careers](https://www.esri.com/en-us/about/careers/main)
-   [Insiders Blog](https://blogs.esri.com/esri/esri-insider/)
-   [User Conference](https://www.esri.com/about/events/uc)
-   [Developer Summit](https://www.esri.com/events/devsummit)

<a href="https://www.esri.com" class="footer-module--esri-logo--28rvT">Esri Home</a>

<div class="section footer-module--social-nav--1ib6o">

<a href="https://twitter.com/Esri/" class="footer-module--icon-social-twitter--38TGi">Esri on Twitter</a>
<a href="https://www.facebook.com/esrigis/" class="footer-module--icon-social-facebook--3c55E">Esri on Facebook</a>
<a href="https://esri.github.io/" class="footer-module--icon-social-github--2_myW">Esri on GitHub</a>
<a href="https://www.esri.com/about-esri/contact/" class="footer-module--icon-social-contact--3MwU-">Contact Esri</a>

</div>

<div class="footer-module--terms--f9Mx0">

<span class="small">[Copyright © 2020
Esri](https://www.esri.com/legal/copyright-trademarks). All rights
reserved. \| [Privacy](https://www.esri.com/legal/privacy) \| [Terms of
use](https://www.esri.com/legal/software-license) \|
[FAQ](/terms/faq/)</span>

</div>

</div>

</div>

<div id="gatsby-announcer"
style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0"
aria-live="assertive" aria-atomic="true">

</div>

</div>
