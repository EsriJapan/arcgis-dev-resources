+++
title = "dist フォルダーへのファイルのコピー"
description = "dist フォルダーへファイルをコピーする必要がある場合の方法について紹介します。"
weight = 17
aliases = ["/copy-files-to-dist-folder/"]
+++

出典：ArcGIS Experience Builder - Guide - [Copy files to dist folder](https://developers.arcgis.com/experience-builder/guide/copy-files-to-dist-folder/)

デフォルトでは、コンパイル時に `src/runtime/assets` フォルダーと `src/setting/assets` フォルダー内のすべてのファイルが `dist/runtime/assets` フォルダーと `dist/setting/assets` フォルダーのそれぞれにコピーされます。Experience Builder Developer Edition バージョン 1.13 から、カスタム ウィジェットのコンパイル時に dist フォルダーに他のファイルをコピーすることをサポートしています。これを行う理由は、ウィジェットがサード パーティのライブラリを使用しており、ライブラリから dist フォルダーにファイルをコピーする必要があるためです。

これを行うには、`copy-files.json` という名前のファイルをウィジェットのルート フォルダーに配置し、コピーする必要のあるファイルをこのフォルダーに置くだけです。以下は、`copy-files.json` ファイルの記述例です。

```json
[
  {
    "from": "node_modules/folderOrFile",
    "to": "folderOrFile"
  }
]
```

`from` と `to` はいずれもウィジェット フォルダーからの相対パスです。