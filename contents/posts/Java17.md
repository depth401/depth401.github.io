---
title: Java 17
overview: Java 11 から Java 17 で追加された言語機能についてまとめ
tags: ['Java']
publishedAt: '2021-10-29'
updatedAt: '2021-10-29'
draft: false
---

Java 17 で正式にリリースされた機能の中で普段のプログラミングに影響が出そうな変更だけを紹介する。
JVM や API の内部実装の改善は勿論のこと、[Vector API](https://openjdk.java.net/jeps/414) のような必要となった場合は使うが、そういう場面に出会わない限り使わないようなものは省いている。
Java 11 から Java 17 の間で追加された API は [New API since JDK 11](https://docs.oracle.com/en/java/javase/17/docs/api/new-list.html) で確認できる。
基本的には [きしだ なおき](https://qiita.com/nowokay) さんが Qiita に投稿している記事から JEP を辿り、その内容を元に作成した。

記事内で紹介するコードは [JEP](https://openjdk.java.net/jeps/0) もしくは [javadoc](https://docs.oracle.com/en/java/javase/17/docs/api/index.html) から転載した。

## 変更一覧

### 言語仕様

- [Switch Expressions](#switch-expressions-java-12-13-14)
- [Text Blocks](#text-blocks-java-13-14-15)
- [Records](#records-java-14-15-16)
- [Pattern Matching for instanceof](#pattern-matching-for-instanceof-java-14-15-16)
- [Sealed Classes](#sealed-classes-java-15-16-17)
- [Pattern Matching for switch](#pattern-matching-for-switch-java-17)

### API

- String#transform
- String#formatted
- Collectors#teeing
- Stream#toList

## 各変更の詳細

### 言語仕様

#### Switch Expressions (Java 12, 13, 14)

- [JEP 325: Switch Expressions (Preview)](https://openjdk.java.net/jeps/325)
- [JEP 354: Switch Expressions (Second Preview)](https://openjdk.java.net/jeps/354)
- [JEP 361: Switch Expressions](https://openjdk.java.net/jeps/361)

switch 式の追加。プログラミング言語の文法には文 (statement) と式 (switch) がある。
式は評価した結果が値となるが、文は評価した結果値を返さない。
Java の switch は今まで文であったが式としても使えるようになったわけだ。
これまで条件分岐で値を返すためには三項演算子 `cond ? a : b` を使うか、switch 式をメソッドとして抽出する以外の方法がなかった。

この変更で追加された要素は、

- カンマ区切りによる複数の値に対するマッチ
- `case L ->`
- `yield` キーワード

になる。

##### カンマ区切りによる複数の値に対するマッチと `case L ->`

switch でマッチする値をカンマ区切りで並べることができるようになったことで、下記のようなコードはより短く書くことができる。

```java showLineNumbers
switch (day) {
    case MONDAY:
    case FRIDAY:
    case SUNDAY:
        System.out.println(6);
    case TUESDAY:
        System.out.println(7);
        break;
    case THURSDAY:
    case SATURDAY:
        System.out.println(8);
        break;
    case WEDNESDAY:
        System.out.println(9);
        break;
}
```

今まではフォールスルーを使う必要があったが、マッチさせたい値をカンマ区切りで並べ、`:` の代わりに `->` を用いる。
また `->` を使った場合 `break` は不要となり、フォールスルーは行われない。

```java showLineNumbers
swtich (day) {
    case MONDAY, FRIDAY, SUNDAY -> System.out.println(6);
    case THUESDAY               -> System.out.println(7);
    case THURSDAY, STAURDAY     -> System.out.println(8);
    case WEDNESDAY              -> System.out.println(9);
}
```

文ではなく式であるので変数に結果を入れることができる。

```java showLineNumbers
int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> 6;
    case TUESDAY                -> 7;
    case THURSDAY, SATURDAY     -> 8;
    case WEDNESDAY              -> 9;
};
```

式なので当然メソッドの引数の位置に書くこともできる。

```java showLineNumbers
static void howMany(int k) {
    System.out.println(
        switch (k) {
            case 1  -> "one";
            case 2  -> "two";
            default -> "many";
        }
    )
}
```

`->` の後が一つの式であればその結果がそのまま switch 式の計算結果の値として扱われるが、そうでない場合は `->` の後に波括弧 `{ ... }` を書いて `yield` キーワードを使って switch 式が返す値を記述する。

```java showLineNumbers
int j = switch (day) {
    case MONDAY  -> 0;
    case TUESDAY -> 1;
    default      -> {
        int k = day.toString().length();
        int result = f(k);
        yield result;
    }
};
```

`->` を使わずに `:` を使う場合は `yield` が必須になる。

```java showLineNumbers
int result = switch (s) {
    case "Foo":
        yield 1;
    case "Bar":
        yield 2;
    default:
        System.out.println("Neither Foo nor Bar, hmmm...");
        yield 0;
};
```

`:` を使った場合は switch 文と同じようにフォールスルーが起こるので気をつける必要がある。

switch 式は歓迎できる変更ではあるが `yield` キーワードは必要だったのかについては疑問に思う。

#### Text Blocks (Java 13, 14, 15)

- [JEP 355: Text Blocks (Preview)](https://openjdk.java.net/jeps/355)
- [JEP 368: Text Blocks (Second Preview)](https://openjdk.java.net/jeps/368)
- [JEP 378: Text Blocks](https://openjdk.java.net/jeps/378)

Java で複数行も文字列を記述するためには、下記のコードのように `\n` と `+` による文字列連結を使って記述する必要があった。

```java showLineNumbers
String html = "<html>\n" +
              "    <body>\n" +
              "        <p>Hello, World</p>\n" +
              "    </body>\n" +
              "</html>\n";
```

テキストブロックが導入されたことにより上記のコードは下記のように書けるようになる。

```java showLineNumbers
String html = """
              <html>
                  <body>
                      <p>Hello, World</p>
                  </body>
              </html>
              """;
```

`"""` で囲んだ文字列内では `"` のエスケープや `\n` による改行が不要となり、また空白によるインデントも最初の行に合わせて行われる。

これにより、HTML や SQL、コードなどの記述がこれまでよりも単純で読み易くなる。

```java showLineNumbers
String query = """
             SELECT "EMP_ID", "LAST_NAME" FROM "EMPLOYEE_TB"
             WHERE "CITY" = 'INDIANAPOLIS'
             ORDER BY "EMP_ID", "LAST_NAME";
             """;
```

```java showLineNumbers
String obj = engine.eval("""
                         function hello() {
                            print('"Hello, world"');
                         }

                         hello();
                         """);
```

#### Records (Java 14, 15, 16)

- [JEP 359: Records (Preview)](https://openjdk.java.net/jeps/359)
- [JEP 384: Records (Second Preview)](https://openjdk.java.net/jeps/384)
- [JEP 395: Records](https://openjdk.java.net/jeps/395)

レコードは、lombok を使って `@Getter @AllArgsConstructor @EqualsAndHashCode @ToString` を付与したクラスに近いコードを短い記述で実現することができる。
例えば下記のようなコードは、

```java showLineNumbers
class Point {
    private final int x;
    private final int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    int x() { return x; }
    int y() { return y; }

    public boolean equals(Object o) {
        if (!(o instanceof Point)) return false;
        Point other = (Point) o;
        return other.x == x && other.y == y;
    }

    public int hashCode() {
        return Objects.hash(x, y);
    }

    public String toString() {
        return String.format("Point[x=%d, y=%d]", x, y);
    }
}
```

以下のように記述するだけでよくなる。

```java showLineNumbers
record Point(int x, int y) { }
```

lombok を利用し、

```java
@Getter @AllArgsConstructor @EqualsAndHashCode @ToString
class Point {
    private final int x;
    private final int y;
}
```

と書いた場合の違いとしては、フィールドにアクセスするためのメソッドが `getX()`、`getY()` ではなく、`x()`、`y()` となることだろうか。
メソッド名が `getXxx()` のようになっていないのはフレームワークやライブラリのことを考えると地味に影響がありそうなので、そのあたりのライブラリ側の対応が進まないと業務で積極的に使っていけないかもしれない。
ライブラリの力を絶対に借りないようなところでは使っても問題なさそうだが使用しているフレームワークやライブラリ側の対応が完了しない限りは積極的に使いましょう、と業務では言えないかもしれない。

クラスと同様にコンストラクタを定義することもできる。

```java showLineNumbers
record Point(int x, int y) {
    // Implicitly declared fields
    private final int x;
    private final int y;

    // Other implicit declarations elided ...

    // Implicitly declared canonical constructor
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

また、コンストラクタの引数を省略して下記のように書くこともできるようだ。

```java showLineNumbers
record Rational(int num, int denom) {
    Rational {
        int gcd = gcd(num, denom);
        num /= gcd;
        denom /= gcd;
    }
}
```

実際にはこの記法しか使われないのではないだろうか :thinking:

フィールドのアクセッサは自分で書くことができ、普通のメソッドと同じようだ。
Kotlin のフィールドへの getter/setter が自動で作られるのと同じようなものだろう。

```java showLineNumbers
record SmallPoint(int x, int y) {
  public int x() { return this.x < 100 ? this.x : 100; }
  public int y() { return this.y < 100 ? this.y : 100; }
}
```

lombok の `@Builder` で生成されるメソッドに相当するものがないのと、言語機能としてもその辺がサポートされていないのが不満ではある。
Java は mutable を許容してフィールド書き換えていくのがスタイルだ！というのであれば納得するが、immutable なコレクションや今回の Record の追加を考えると immutable なデータを基本としてプログライングスタイルも推奨しているはずだけど、Stream や Optional の API に続き中途半端な対応になっているのではないだろうか、というのが正直な所だ。

#### Pattern Matching for instanceof (Java 14, 15, 16)

- [JEP 305: Pattern Matching for instanceof (Preview)](https://openjdk.java.net/jeps/305)
- [JEP 375: Pattern Matching for instanceof (Second Preview)](https://openjdk.java.net/jeps/375)
- [JEP 394: Pattern Matching for instanceof](https://openjdk.java.net/jeps/394)

この変更では、`obj instanceof T t` で `obj` を `T` 型で変数 `t` に束縛して使えるようになる。
今までは下記のように `if (obj instanceOf T)` の中でキャストして変数に束縛する必要があったが、

```java showLineNumbers
if (obj instanceof String) {
    String s = (String) obj;    // grr...
    ...
}
```

以下のように `if (obj instanceof T t)` と書くだけで `if` の中で変数 `t` が `T` 型として使える。

```java showLineNumbers
if (obj instanceof String s) {
    // Let pattern matching do the work!
    ...
}
```

また、論理積 `&&` と組み合わせると束縛した後に追加でチェックしたい条件を `instanceof` でチェックした型で行うことができる。

```java showLineNumbers
if (obj instanceof String s && s.length() > 5) {
    flag = s.contains("jdk");
}
```

#### Sealed Classes (Java 15, 16, 17)

- [JEP 360: Sealed Classes (Preview)](https://openjdk.java.net/jeps/360)
- [JEP 397: Sealed Classes (Second Preview)](https://openjdk.java.net/jeps/397)
- [JEP 409: Sealed Classes](https://openjdk.java.net/jeps/409)

この変更では、継承先のクラスが限定されたクラス、インターフェースを定義することができる。
これにより何が嬉しいかは他の関数型プログラミング言語を触ったことがある人であれば理解できると思うが、これにより Java でもコンパイル時に静的に検査可能なパターンマッチができるようになり、レコードと組み合わせることで世間一般で言われているところの代数的データ型のメリットを Java でも享受できるようになった。
`sealed` というキーワードは恐らく Kotlin や Scala の影響を受けているだろう。

```java showLineNumbers
enum Planet { MERCURY, VENUS, EARTH }

Planet p = ...
switch (p) {
  case MERCURY: ...
  case VENUS: ...
  case EARTH: ...
}
```

```java showLineNumbers
interface Celestial { ... }
final class Planet implements Celestial { ... }
final class Star   implements Celestial { ... }
final class Comet  implements Celestial { ... }
```

```java showLineNumbers
sealed interface Celestial
    permits Planet, Star, Comet { ... }

final class Planet implements Celestial { ... }
final class Star   implements Celestial { ... }
final class Comet  implements Celestial { ... }
```

```java showLineNumbers
package com.example.geometry;

public abstract sealed class Shape
    permits Circle, Rectangle, Square { ... }
```

```java showLineNumbers
public sealed interface Expr
    permits ConstantExpr, PlusExpr, TimesExpr, NegExpr { ... }

public record ConstantExpr(int i)       implements Expr { ... }
public record PlusExpr(Expr a, Expr b)  implements Expr { ... }
public record TimesExpr(Expr a, Expr b) implements Expr { ... }
public record NegExpr(Expr e)           implements Expr { ... }
```

#### Pattern Matching for switch (Java 17)

- [JEP 406: Pattern Matching for switch (Preview)](https://openjdk.java.net/jeps/406)

`switch` でのパターンマッチで `instanceof` でのパターンマッチの使い勝手を良くするための変更だろう。
Java 14, 15, 16 を経て `if` と一緒に `instanceof` を使うことでマッチした変数をマッチした型として別名で扱えるようになったが、複数の型にマッチさせて動作を変えようとすると下記のようにする必要がある。

```java showLineNumbers
static String formatter(Object o) {
    String formatted = "unknown";
    if (o instanceof Integer i) {
        formatted = String.format("int %d", i);
    } else if (o instanceof Long l) {
        formatted = String.format("long %d", l);
    } else if (o instanceof Double d) {
        formatted = String.format("double %f", d);
    } else if (o instanceof String s) {
        formatted = String.format("String %s", s);
    }
    return formatted;
}
```

これでは、聊か不便なのでもう一つの制御構文である `switch` でも同様のことができるようにし、`switch` が式となっていることで不要な変数宣言や `instanceof` の重複がなくなりすっきりと書けるようになった。

```java showLineNumbers
static String formatterPatternSwitch(Object o) {
    return switch (o) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case Double d  -> String.format("double %f", d);
        case String s  -> String.format("String %s", s);
        default        -> o.toString();
    };
}
```

`case` では `null` に対するマッチも行えるようになっている。
`switch` を使うときに `null` チェックを忘れて `NullPointerException` を出してしまうミスも減らせるかもしれない :thinking:

```java showLineNumbers
static void testFooBar(String s) {
    switch (s) {
        case null         -> System.out.println("Oops");
        case "Foo", "Bar" -> System.out.println("Great");
        default           -> System.out.println("Ok");
    }
}
```

また、`swtich` ではパターンマッチだけでなく条件式を書くこともできるようになっている。
そのため、下記のようにある型にマッチしてなお且つある条件を満たす場合は…といった条件分岐を伴うコードは、

```java showLineNumbers
class Shape {}
class Rectangle extends Shape {}
class Triangle  extends Shape { int calculateArea() { ... } }

static void testTriangle(Shape s) {
    switch (s) {
        case null:
            break;
        case Triangle t:
            if (t.calculateArea() > 100) {
                System.out.println("Large triangle");
                break;
            }
        default:
            System.out.println("A shape, possibly a small triangle");
    }
}
```

以下のように書くことができる。

```java showLineNumbers
static void testTriangle(Shape s) {
    switch (s) {
        case Triangle t && (t.calculateArea() > 100) ->
            System.out.println("Large triangle");
        case Triangle t ->
            System.out.println("Small triangle");
        default ->
            System.out.println("Non-triangle");
    }
}
```

Sealed Classes に対する網羅性チェックもされるため、下記のようなコードはコンパイルエラーとなる。

```java showLineNumbers
sealed interface S permits A, B, C {}
final class A implements S {}
final class B implements S {}
record C(int i) implements S {}  // Implicitly final

static void switchStatementComplete(S s) {
    switch (s) {    // Error - incomplete; missing clause for permitted class B!
        case A a :
            System.out.println("A");
            break;
        case C c :
            System.out.println("B");
            break;
    };
}
```

### API

#### String#transform (Java 12)

- [String (Java SE 12 & JDK 12 )](<https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/lang/String.html#transform(java.util.function.Function)>)

文字列を任意の型に変換させるメッド。
`Optional` や `Stream` のように関数を適用する順番に書きたい場面で使うという感じだろうか。

#### String#formatted (Java 15)

- [String (Java SE 17 & JDK 17)](<https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/String.html#formatted(java.lang.Object...)>)

今までは `String.format(str, ...)` と書く必要があった処理を `str.formatted(...)` のように書くことができるようになった。
できることは変わってないが見た目がすっきりする。
Text Blocks と一緒に使うことで複数行からなる文字列に対して変数の値を連結したいようなコードの記述がかなり簡潔に書けるようになる。

#### Collections#teeing (Java 12)

- [Collectors (Java SE 12 & JDK 12 )](<https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/util/stream/Collectors.html#teeing(java.util.stream.Collector,java.util.stream.Collector,java.util.function.BiFunction)>)

二つの Collector の結果を纏めることができる。
使い所はありそうな気がするけど、使える場面に出会ったときに気がつけるか怪しい。

#### Stream#toList (Java 16)

- [Add Stream.toList() method](https://bugs.openjdk.java.net/browse/JDK-8180352)
- [Stream (Java SE 17 & Java 17)](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/Stream.html)

`toList` が追加されたのは嬉しいけど `toMap`、`toSet` も一緒に追加して欲しい。

#### Stream#mapMulti (Java 17)

- [Stream#mapMulti](https://cr.openjdk.java.net/~iris/se/16/latestSpec/api/java.base/java/util/stream/Stream.html#mapMulti%28java.util.function.BiConsumer%29)
- [RFR[8238286]: 'Add new flatMap stream operation that is more amenable to pushing’](https://qiita.com/nowokay/items/215769cdcb14d6c5412f)

## まとめ

Java 11 ~ Java 17 の間で採用された変更の中で個人的に気になったものについて簡単に触れた。
正直なところどれも他の言語であれば既にある機能か、より簡単に実現できるものばかりなので目新しさはない。

## 参考

- [Java 12 新機能まとめ - Qiita](https://qiita.com/nowokay/items/0e860819b6ffb1aca90a)
- [Java 13 新機能まとめ - Qiita](https://qiita.com/nowokay/items/3e1625a77cb435394547)
- [Java 14 新機能まとめ - Qiita](https://qiita.com/nowokay/items/ec85d97a7cecaaac8123)
- [Java 15 新機能まとめ - Qiita](https://qiita.com/nowokay/items/2858699bc1cd89222cd8)
- [Java 16 新機能まとめ - Qiita](https://qiita.com/nowokay/items/215769cdcb14d6c5412f)
- [Java 17 新機能まとめ - Qiita](https://qiita.com/nowokay/items/ec58bf8f30d236a12acb)
