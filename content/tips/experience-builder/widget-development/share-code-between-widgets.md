+++
title = "ウィジェット間のコードの共有"
description = "ウィジェット間で同じコードを共有して利用する方法を紹介します。"
weight = 19
aliases = ["/share-code-between-widgets/"]
+++

出典：ArcGIS Experience Builder - Guide - [Share code between widgets](https://developers.arcgis.com/experience-builder/guide/share-code-between-widgets/)

1 つのビジネス ドメインに対して複数のウィジェットを開発する場合、それらの間でコードを共有したいケースがあります。このページでは、このような場合に Experience Builder がどのように役立つかを紹介します。

Experience Builder には、ウィジェット間でコードを共有するための 2 つの方法が用意されています。

- <b>ダイナミック ローディング</b>：この方法は実装が簡単です。しかし、共有するコードを動的に読み込む必要があるため、よく使われる ES6 の `import {} from ''` は使用できません。 また、共有するコードは 'chunks' フォルダーにコンパイルされますが、このフォルダーには多数のファイルが含まれているため、メンテナンスが困難になる可能性があります。
- <b>共有エントリー</b>：この方法では、標準の ES6 の import を使用して共有コードを読み込むことができ、よりクリーンな構造を提供します。ただし、追加のセットアップ手順が必要になります。

## ダイナミック ローディング
この方法でウィジェット間でコードを共有する必要がある場合、ベスト プラクティスはフォルダーを作成することです。コードを共有する必要があるウィジェットをフォルダーに配置し、共有コードを格納する共通フォルターを作成します。フォルダー構造は次のようになります。

```
widgets/
  your-folder/
    common/
    widget1/
    widget2/
```

common フォルダーでは、`export const sharedFunction = () => {}` のように一般的な ES6 の export を使って共有するコードをエクスポートできます。widget1 と widget2 フォルダーでは、`import('../../../common/my-module').then()` のようにダイナミック ローディングを使用して共有するコードを読み込めます。

コンパイル後、共有コードは `widgets/chunks` フォルダーに配置されます。

完成例については、[ダイナミック ローディング](https://developers.arcgis.com/experience-builder/sample-code/widgets/share-code-chunk/)を参照してください。

## 共有エントリー
この方法でウィジェット間でコードを共有する必要がある場合は、以下の手順を行います。

- `widgets` フォルダーの下に `shared-code` フォルダーを作成します。フォルダー名は `shared-code` でなければならないことに注意してください。
- 共有するコードを `shared-code` フォルダーに配置します。フォルダー内のすべての `.ts` および `.tsx` ファイルは共有エントリーとしてコンパイルされます。ベスト プラクティスのフォルダー構造は以下の通りです。

```
shared-code/
  entry1.ts
  entry2.tsx
  lib/
    entry1/
      module1.ts
      module2.ts
    entry2/
      module1.ts
      module2.ts
```

上記のフォルダー構造では、`entry1` と `entry2` はコンパイル時に自動的に作成されます。

国際化をサポートするには、`shared-code` フォルダー内、または各 entry フォルダー内に、例えば `shared-code/translations` や `shared-code/lib/entry1/translations` のように、`translations` フォルダーを作成してください。`translations` フォルダーの構造は、ウィジェットの `translations` フォルダーと同じです。

- 最後に、一般的な ES6 の import を使用して、次のように共有コードを読み込みます。

```js
import { sampleFunction } from 'widgets/shared-code/entry1'
```

コンパイル後、共有エントリーは `widgets/shared-code` フォルダーに配置されます。

完成例については、[共有エントリー](https://developers.arcgis.com/experience-builder/sample-code/widgets/share-code-entry/)を参照してください。