/**
 * 前述の通り、選択ソートには並び方によって処理時間が大きく左右されるという欠点がありました。
 * これを改良したのが、シェルソートです。
 * シェルの名はアルゴリズムの考案者の名前に由来します。つまり、「シェルさんが作ったソートアルゴリズム」というわけです。
 * 考え方としては、リスト全体をいくつかに分け、それぞれで挿入ソートを行い、それを徐々に詰めていく、という考え方です。
 *
 * ■実装方法
 * 要素全体を、いくつかの要素に分けます。
 * 分割したそれぞれの要素内で挿入ソートの処理を行います。
 * 挿入ソート処理が終わった、隣接する配列同士を結合し、さらに挿入ソートを行います。
 * 最終的に、全体が統合されるまで、同様の処理を繰り返します。
 */

const array = [13, 1, 5, 2, 43, 30, 21, 55];
