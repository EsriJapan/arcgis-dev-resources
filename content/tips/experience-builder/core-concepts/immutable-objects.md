+++
title = "イミュータブル オブジェクト (Immutable objects)"
weight = 16
aliases = ["/immutable-objects/"]
+++

出典：ArcGIS Experience Builder - Guide - [Immutable-objects](https://developers.arcgis.com/experience-builder/guide/immutable/)

## イミュータブル オブジェクトとは
**イミュータビリティ** (不変性) とは、一度作成されたデータは変更できないという性質を指します。
一方、ミュータブル (可変) なデータは作成後に変更可能です。
JavaScript のオブジェクトや配列はデフォルトでミュータブルですが、[React](https://react.dev/) や [Redux](https://redux.js.org/) では状態をイミュータブルに更新することが求められます。
ArcGIS Experience Builder では、[seamless immutable](https://www.npmjs.com/package/seamless-immutable-mod) ライブラリーを使用して、データの不変性を確保しています。

## なぜイミュータブル オブジェクトを使うのか
ArcGIS Experience Builder が基盤としている React と Redux は、次の理由から状態をイミュータブルに更新する必要があります。
- **予測可能な状態変化**: イミュータブルな更新により、状態がいつ、どのように変化したかを追跡しやすくなります。
- **パフォーマンスの最適化**: React は、再レンダリングが必要な箇所を効率的に判断できます。
- **デバッグ**: イミュータブルなデータを使用すると、状態の変化を追跡したり、問題を特定したりするのが容易になります。

## イミュータブル型  
Experience Builder 内のイミュータブル型は、次のように慣例として `IM` で始まります。

```jsx
// Examples of immutable types
interface IMConfig {
  title: string;
  description: string;
}

interface IMDataSource {
  id: string;
  url: string;
  fields: string[];
}
```
## コード例
### イミュータブル オブジェクトのプロパティ更新
次の例は、不変オブジェクトのプロパティを更新する方法を示しています。

```jsx
import { Immutable } from 'jimu-core';

// Create an immutable object
const config = Immutable({
  title: 'My Widget',
  settings: {
    theme: 'light',
    size: 'medium'
  }
});

// Update single property
const updatedConfig = config.set('title', 'Updated Widget');

// Update nested property
const nestedUpdate = config.setIn(['settings', 'theme'], 'dark');

// Merge multiple properties
const mergedConfig = config.merge({
  title: 'Merged Widget',
  settings: {
    size: 'large'
  }
});
```
イミュータブル オブジェクトの更新に利用できるメソッドは次のとおりです。

| メソッド | 説明 | 例 |
|----|----|----|
| `set()` | 単一のプロパティを設定 | `obj.set('title', 'New Title')` |
| `setIn()` | ネストされたプロパティを設定 | `obj.setIn(['user', 'name'], 'John')` |
| `merge()` | 複数のプロパティを統合 | `obj.merge({title: 'New', active: true})` |

### 配列へのアイテムの追加
次の例は、イミュータブルな配列にアイテムを追加する方法を示しています。

```jsx
// Recommended approach
const newArray = Immutable(
  array.concat(Immutable([newItem]))
);

// Alternative approach (when you need multiple operations)
let mutableArray = array.asMutable();
mutableArray.push(newItem);
const immutableArray = Immutable(mutableArray);
```

### 配列からのアイテムの削除
次の例は、イミュータブルな配列からアイテムを削除する方法を示しています。

```jsx
// Remove item by ID
const filteredArray = array.flatMap(item =>
  item.id === itemToRemove ? [] : [item]
);

// Remove item by index
const indexToRemove = 2;
const arrayWithoutItem = array.flatMap((item, index) =>
  index === indexToRemove ? [] : [item]
);
```
### 配列のアイテムの更新
イミュータブルな配列のアイテムを更新する方法を下記に例示します。

```jsx
// Update item by index
const updatedArray = array.map((item, index) => {
  if (index === targetIndex) {
    return item.set('property', newValue);
  }
  return item;
});

// Update item by condition
const updatedByCondition = array.map(item => {
  if (item.id === targetId) {
    return item.merge({
      title: 'Updated Title',
      modified: true
    });
  }
  return item;
});
```

## パフォーマンスに関する考慮事項
複数の操作が必要な場合に、`asMutable()` をどのように、いつ使用するかを下記に例示します。

```jsx
// Good: Multiple operations
let mutableArray = array.asMutable();
mutableArray.push(item1);
mutableArray.push(item2);
mutableArray.sort((a, b) => a.name.localeCompare(b.name));
const finalArray = Immutable(mutableArray);

// Avoid: Single operations
let mutableArray = array.asMutable();
mutableArray.push(item);
const finalArray = Immutable(mutableArray);

// If in large loop, use .merge():
const imObject = obj
const modifierObject = {}
// Example large loop:
for (let i = 0; i < 100000; i ++) {
  modifierObject[i] = 'some value'
}
const imNewObject = imObject.merge(modifierObject)
```

### パフォーマンスのベスト プラクティス
イミュータブルなオブジェクトに関するパフォーマンスのベスト プラクティスを次の表に示します。

| シナリオ | 推奨される方法 | 理由 |
|----|----|----|
| 単一のプロパティの更新 | `set()` または `setIn()` | 効率的 |
| 複数のプロパティの更新 | `merge()` | オブジェクトの生成数を削減 |
| 配列のフィルタリング | `flatMap()` | 機能的なアプローチ |
| 配列に対する複数の操作をまとめて行う | `asMutable()` に続けて `Immutable()` | 中間オブジェクトの削減 |
| 深い階層のオブジェクト更新 | `setIn()` | ディープ クローニングの回避 |

## リソース
- [Seamless immutable documentation](https://www.npmjs.com/package/seamless-immutable-mod)
- [React state management](https://reactjs.org/docs/state-and-lifecycle.html)
- [Redux immutable update patterns](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns)
- [Jimu core API reference](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/)