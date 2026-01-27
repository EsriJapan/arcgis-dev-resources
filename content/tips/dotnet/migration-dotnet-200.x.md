+++
title = "バージョン 100.x から 200.x への移行"
description = "今まで ArcGIS Runtime SDK for .NET バージョン 100.x を使用してアプリケーションを開発されていた開発者向けのガイドです。"
weight = 3
aliases = ["/dotnet/migration-dotnet-200.x/"]
+++

出典：ArcGIS Maps SDK for .NET - Guide - [Migrate from 100.x to 200.x](https://developers.arcgis.com/net/reference/migrate-from-100-x-to-200-x/)

ArcGIS Runtime SDK バージョン 100.15 は、バグ修正とマイナー アップデートのみに特化した長期サポート リリースです。ArcGIS Maps SDKs for Native Apps バージョン 200.x は、100.15 の実績あるアーキテクチャをベースに、最新の開発者向けフレームワークの技術を活用するよう設計されています。このトピックでは、変更された API の領域の概要と、200.x アプリ用に 100.x コードをリファクタリングするためのガイダンスを提供します。

## 基本的な移行手順
[ArcGIS Runtime SDK for .NET バージョン 100.0 から 100.15](https://developers.arcgis.com/net/v100/) で構築した既存のアプリを ArcGIS Maps SDK for .NET バージョン 200.0 に移行するには、以下の一般的な手順に従います。

1. 以下の [システム要件の変更](#システム要件の変更) のセクションを確認し、推奨される変更または更新を行います。
2. アプリケーションのソース コードを開きます。
3. すべての `Esri.ArcGISRuntime.*` NuGet リファレンスをバージョン 200.0 に更新します。
4. API の破壊的変更に対処します。v100.x で非推奨とマークされた API は 200.0 で削除され、これらの API を使用するとコンパイル エラーが発生します。
5. アップグレードされたアプリをビルドして実行し、正しく機能することを確認します。

## Xamarin アプリケーションの移行
バージョン 100.15 は、Xamarin.Forms、Xamarin.Android、Xamarin.iOS をサポートする ArcGIS Runtime SDK for .NET の最後のリリースとなりました。バージョン 200.0 は、.NET MAUI、.NET for Android、.NET for iOS をサポートしています。既存の Xamarin Forms アプリケーションは .NET MAUI（Multi-platform App UI）へ、Xamarin.Android と Xamarin.iOS はそれぞれ .NET for Android と .NET for iOS へ移行する必要があります。

### .NET MAUI 用の ArcGIS Maps SDK パッケージの初期化
ArcGIS Maps SDK for .NET を .NET MAUI アプリで使用するには、アプリの初期化時に `MauiAppBuilder` クラスで `UseArcGISRuntime()` を呼び出します。下記の例は、その方法を示しています。

```csharp {filename = "MauiProgram.cs"}
public static class MauiProgram
{
    // このクラスは、標準的な MAUI テンプレートの一部です
    // MAUI アプリは、CreateMauiApp を使用してアプリを準備します
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder.UseMauiApp<App>();

        // この行は、ArcGIS Runtime を使用する場合に必要です
        builder.UseArcGISRuntime();

        return builder.Build();
    }
}
```
Xamarin Forms アプリの .NET MAUI への移行については、以下のドキュメントを参照してください。
* [Xamarin.Forms からアプリを移行する (Microsoft ドキュメント)](https://learn.microsoft.com/ja-jp/dotnet/maui/get-started/migrate)
* [Migrating from Xamarin.Forms (Preview) - Wiki](https://github.com/dotnet/maui/wiki/Migrating-from-Xamarin.Forms-(Preview))

## API の変更
バージョン 100.x で非推奨だった API は、バージョン 200.0 ですべて削除されました。非推奨の API を使用すると、コンパイルエラーが発生するため、バージョン 200.0.0 を使用してアプリケーションを正常にビルドするには、このエラーに対処する必要があります。

## システム要件の変更
ArcGIS Runtime SDK for .NET を使用するアプリを開発およびデプロイするためのシステム要件がバージョン 200.x で以下のように変更されました。詳細については、[System requirements](https://developers.arcgis.com/net/system-requirements/) のトピックを参照してください。

## よくある質問 (FAQ)
移行に関するよくある質問と回答は、以下のとおりです。

* 質問: ArcGIS Runtime SDK for .NET バージョン 100.x から ArcGIS Maps SDK for .NET バージョン 200.x にアプリをすぐに移行する必要がありますか？

    回答: いいえ。ArcGIS Runtime SDK for .NET バージョン 100.15 は、長期サポート リリースです。バージョン 200.0（または将来のバージョンの 200.x リリース）で提供される新機能を必要としないアプリの場合、アプリは正常に動作します。詳細については、[製品ライフサイクルのドキュメント](https://support.esri.com/en-us/products/arcgis-runtime-sdks/life-cycle) を参照してください。

    ただし、ArcGIS Maps SDK for .NET が提供する最新の機能を使用するためには、アプリを移行する必要があります。

* 質問: ArcGIS Runtime SDK for .NET バージョン 100.x で利用可能な機能で、ArcGIS Maps SDK for .NET バージョン 200.x で利用できない機能はありますか？

    回答: いいえ。ArcGIS Runtime SDK for .NET 100.15 に含まれるすべての機能は、ArcGIS Maps SDK for .NET 200.0 で利用可能です。さらに、バージョン 200.0 では、100.15 では利用できなかった新しい機能が提供されています。詳細については、[リリース ノート](https://developers.arcgis.com/net/release-notes/) を参照してください。

* 質問: ArcGIS Runtime SDK for .NET バージョン 100.x で作成したアプリを ArcGIS Maps SDK for .NET バージョン 200.x で使用するには、アプリを書き換える必要がありますか？

    回答: いいえ。ArcGIS Runtime SDK for .NET バージョン 100.15 を使用するアプリを ArcGIS Maps SDK for .NET バージョン 200.0 に更新することは、通常のバージョンアップ通りで簡単です。Xamarin.Forms アプリを .NET MAUI に移行するには、ArcGIS Maps SDK for .NET の機能とは関係なく Xamarin から MAUI アプリへ移行するための一般的な追加作業が必要です。

* 質問: ArcGIS Maps SDK for .NET はまったく新しい製品ですか？

    回答: いいえ。<b>ArcGIS Runtime SDK</b> として知られていた製品群は、現在 <b>ArcGIS Maps SDK for Native Apps</b> として提供されています。これらの SDK のバージョン 200.x は、ArcGIS Runtime 100.15 の実績あるアーキテクチャを基盤としており、最新の開発者用フレームワークの技術を活用するように設計されています。

## 既知の制限事項
現バージョンでの既知の制限事項が、[ArcGIS Maps SDK for .NET: リリース ノート](https://developers.arcgis.com/net/release-notes/)に記載されていますので、ご参照ください。

