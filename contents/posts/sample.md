---
title: Markdown レンダリング確認用
overview: 概要
tags:
  [
    'Java',
    'JavaScript',
    'CSS',
    'HTML',
    'GitHub',
    'Haskell',
    'Scala',
    'Terminal',
    'IntelliJ',
    'Rust',
    'TypeScript',
    'Elm',
    'Emacs',
    'Spacemacs',
    'Git',
    'Ubuntu',
    'Unknown',
  ]
publishedAt: '2000-01-01'
updatedAt: '2000-12-31'
draft: false
---

# 見出し

マークダウンの表示を確認するための記事です。

## h2

### h3

#### h4

##### h5

###### h6

## 強調

_イタリック_ (`_イタリック_`)、**ボールド** (`**ボールド**`)。

## リスト

### 番号なしリスト

- 1
- 2
  - 2.1
  - 2.3
- 3

### 番号付きリスト

1. 1
1. 2
   1. 2.1
   1. 2.2
1. 3

## 段落

最初の段落。

二番目の段落。

三番目の段落。

## 引用

> 文章を引用する場合は `>` を使う。
>
> > 引用はネストすることもできる。

## 区切り線

---

## リンク

[啓蒙の坂](https://depth401.github.io/)

### ソースコード

#### 単順な表示

C 言語で Hello, World!

```c
#include <stdio.h>

int main(int argc, char **argv) {
    printf("Hello, World!\n");
}
```

行番号を表示。

```c showLineNumbers
#include <stdio.h>

int main(int argc, char **argv) {
    printf("Hello, World!\n");
}
```

行をハイライト。

```c {4} showLineNumbers
#include <stdio.h>

int main(int argc, char **argv) {
    printf("Hello, World!\n");
}
```

## GitHub Flavored Markdown

### テーブル表示

| ライブラリ                                   | バージョン |
| -------------------------------------------- | ---------- |
| Next.js                                      |            |
| ながあああああああああああああああああああい |            |

### タスクリスト

タスクリストを表示。

- [ ] 未チェック
- [x] チェック済み

前後のマージンも確認。

### 取り消し線

~~取り消し~~

## gemoji

:+1: :sushi: :thinking:
