+++
title = "ウィジェット開発のデバック"
description = "ウィジェット開発におけるデバック方法について紹介します。"
weight = 8
aliases = ["/debugging-widget-development/"]
+++

## ウィジェット開発環境の設定
カスタム ウィジェットの開発には、使い慣れた IDE やテキストエディタを使うことができます。[Visual Studio Code](https://code.visualstudio.com/) は、デフォルトで TypeScript を認識する機能が組み込まれているため、よいオプションのひとつです。

作成したカスタム ウィジェットは、Experience Builder ファイル構造の `client` フォルダのディレクトリ内に配置されます。Visual Studio Code 内で、プロジェクトとして `client` フォルダを開きます。

1. `ファイル` メニューをクリックします。
2. `フォルダを開く` をクリックします。
3. Experience Builder　を初めて起動したときに解凍した Experience Builder ファイル内の `client` フォルダを参照します。

これにより、`client` フォルダ内のすべてのファイル (カスタム ウィジェットのファイルを含む) が、左側の VS Code Explorer タブで利用できるようになります。また、Visual Studio Code は、Experience Builder ライブラリの TypeScript の定義について `client` フォルダの内容全体をスキャンし、カスタム ウィジェットを書いている間に TypeScript の検証と autocomplete (オートコンプリート:自動補完) を可能にします。

## Visual Studio コード
テキストエディタとして Visual Studio Code を使用している場合、テキストエディタに機能を追加するために使用できる[拡張機能のマーケットプレイス](https://code.visualstudio.com/docs/editor/extension-gallery)があります。インストールしておきたい React 拡張機能に加えて、Experience Builder のカスタム ウィジェット開発にはこれらの拡張機能が推奨されています (必須ではありません)。

- [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) - ワークスペースで見つけた定義に基づいてHTML クラス属性 の CSS クラス名を補完します (ワークスペースの中の CSS を読み込んで HTML 上でクラス指定するときに入力候補を表示します)。

- [vcode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) -  styled-components のシンタックスハイライトを付けます。

## デバッグツール
Web ブラウザ内には、カスタム ウィジェットを効率的に構築するために使用できるさまざまなデバッグツールがあります。

### ブラウザ開発ツール
Experience Builder のオーサリング インターフェイスまたはプレビュー モードでは、ブラウザの開発者ツールを開いてデバッグ ツールにアクセスすることができます。開発者ツールを開くには

- Chrome で、メイン メニューをクリックし、「その他のツール」→「開発者ツール」を選択します。([詳細](https://developers.google.com/web/tools/chrome-devtools/open))
- Firefoxで、[メインメニュー] > [Web開発者] > [ツールの切り替え] (([詳細](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools))をクリックします。

### DOM 要素
ブラウザの開発者ツールで、__Sources__ (Chrome) または __Debugger__ (Firefox) タブをクリックします。ここでは、カスタムウィジェットの DOM を調べて現在の状態を確認できます。

### JavaScript のソースとブレークポイント
ブラウザの開発者ツールで、__Elements__ (Chrome) または __Inspector__ (Firefox) タブをクリックします。ここでは、ページの JavaScript コードを閲覧することができます。ウィジェットが開かれていることを確認して(該当する場合)、左側のファイルブラウザで __webpack__ を選択してウィジェットの __widget.tsx__ ファイルを見つけてダブルクリックしてください。別の方法としては、`ctrl + p` と入力してファイル コマンドパレットを開き、__widget.tsx__ と入力してください。目的の __widget.tsx__ ファイルはファイル名の最後に `?zzzz` (`zzzz` は数字と文字の組み合わせ) が付いているものになります。

ウィジェット ファイルを開くと、その TypeScript コードを見ることができます。行番号をクリックしてブレークポイントを設定することができます (詳細: [Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints/)、[Firefox](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint))


### Global Experience Builder の変数
コードがブレークポイントで停止している場合、右側のパネルで __Scope__ ペインを開き、現在スコープ内にある変数を見ることができます。__Global__ まで下にスクロールしてください。ここには、Experience Builder がいくつかの便利な変数を配置しています。これらの変数を調べて、Experience Builder 内のさまざまな現在のステータスを確認できます。

これらの変数には、以下のものがあります。

- `_appState` - Experience Builder の現在の状態に関するさまざまなプロパティ。
- `_dataSourceManager` - ウィジェット内の現在のデータソース。
- `_widgetManager` - ウィジェットがロードされているかどうかなど、ウィジェットに関する様々なプロパティ。
- `_sessionManager` - ログイン情報の確認と管理に使用できます。
他にも、あまり使われていないグローバル変数もあります。すべてのリストを見るには、ファイル __clientjimu-core\jimu-coreliblib\typeswindow.d.ts__ を参照してください。

###  ビルダーページでのデバッグ
ビルダーページでデバッグすると、Experience は iframe で読み込まれます。このため、Javascript の実行コンテキストには `top` と `_appWindow` の 2 つに分かれています。`top` コンテキストがビルダーコンテキストで、`_appWindow` コンテキストが Experience コンテキストです。コンソールでグローバル変数を検査する場合は、ブラウザの開発者ツールのドロップダウン リストで正しいコンテキストが選択されていることを確認してください。ブレークポイントを使用してデバッグしているときは、`window.jimuConfig.isBuilder` を見て実行コンテキストを判断してください。true はコードが ビルダーコンテキスト内にあることを意味します。

### ネットワーク
ブラウザの開発者ツールで、__Network__ タブをクリックします。ここでは、Experience によって送受信されるネットワークのリクエストを確認できます。

### キャッシュのクリア
コードをデバッグしている間は、コードを変更したり、ページを頻繁にリロードしたりすることがあります。ブラウザが予期せずにキャッシュし、開発中に混乱を招くこともあります。このため、ブラウザを更新するたびにキャッシュをクリアするか、開発中にネットワーク開発者ツールの __Disable cache__ にするチェックボックスを有効にすることが重要です。

### React 開発ツール
Experience Builder の Experiences は、[React JavaScript ライブラリ](https://reactjs.org/)を使用しています。上記の DOM Elements ブラウザに加えて、React がどのように動作するかを知り、React コンポーネントについてさらに詳しい情報を表示してくれるブラウザ拡張機能をインストールすることができます。ブラウザの拡張機能ストア ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)) から拡張機能をインストールし、ツールを有効にします。これで、ブラウザの開発者ツールに 2 つのタブが追加されました。__Components__ と __Profiler__ です。

__Components__ タブをクリックします。Search または "Select Element" ボタンを使用して、コンポーネントツリーでカスタム ウィジェットを選択します。選択されると、右側の情報パネルにコンポーネントの props と state が表示されます。
