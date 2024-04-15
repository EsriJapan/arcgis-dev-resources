+++
title = "webpack config のオーバーライド"
description = "webpack config をオーバーライドする方法について紹介します。"
weight = 16
aliases = ["/override-webpack-config/"]
+++

出典：ArcGIS Experience Builder - Guide - [Override webpack config](https://developers.arcgis.com/experience-builder/guide/override-webpack-config/)

Experience Builder Developer Edition バージョン 1.9 から、カスタム ウィジェットの webpack config のオーバーライドがサポートされるようになりました。

これを行うには、`client/webpack/widget-webpack-override.js` にオーバーライド処理を配置するだけです。このファイルによってエクスポートされた関数では、デフォルトの webpack config オブジェクトが入力パラメーターとして渡され、このオブジェクトを変更して返却することができます。