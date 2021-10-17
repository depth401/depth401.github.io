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
publishedAt: '2021-01-01'
updatedAt: '2022-12-31'
---

# 見出し

マークダウンの表示を確認するための記事です。

## h2

### h3

#### h4

##### h5

###### h6

## 強調表示

_イタリック_ (`_イタリック_`)、**ボールド** (`**ボールド**`)。

## 段落

最初の段落。

二番目の段落。

三番目の段落。

## 引用

> 文章を引用する場合は `>` を使う。
>
> > 引用はネストすることもできる。

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
