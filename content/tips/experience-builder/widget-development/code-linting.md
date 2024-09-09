+++
title = "コードリンティング"
description = "コードリンティングについて紹介します。"
weight = 16
aliases = ["/code-linting/"]
+++

出典：ArcGIS Experience Builder - Guide - [Code linting](https://developers.arcgis.com/experience-builder/guide/linting/)


バージョン 1.7 から、Experience Builder Developer Edition は、コードエディタがコードのフォーマットと lint (エラーチェック) に使用できる [ESLint](https://eslint.org/) ルール (`.eslintrc.js` ファイル形式) を含むようになりました。

これらは、[standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) に基づいて、Experience Builder チームが使用しているルールです。ご自身のコードにどの ESLint ルールを使うかについては、好みがあるかもしれません。もしこれらのルールを使いたくない場合は、以下のルールを無効にする方法を参照してください。ルールを変更したい場合は、`.eslintrc.js` ファイルを修正することができます。

- これらの ESLint のルールでコードをチェックしたい場合は、`client` フォルダで、コマンドラインから、`npm run lint.` を実行します。また、ESLint 拡張機能をコードエディタにインストールすることもできます。
- この ESLint のルールを無視したい場合は、以下のどちらかをお試しください。
    - コードエディタの ESLint 拡張を無効にする
    - `client/.eslintrc.js` ファイルを削除する