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

function shellSort(numbers, array_size) {
  var increment, temp;
  //4離れた要素と比較
  increment = 4;

  while (increment > 0) {
    for (var i = 0; i < array_size; i++) {
      var j = i;
      temp = numbers[i];

      console.log("前 間隔", increment);
      console.log("前 Jの値", j);
      console.log("前　配列", numbers);
      while (j >= increment && numbers[j - increment] > temp) {
        numbers[j] = numbers[j - increment];
        j -= increment;
      }
      console.log("後 間隔", increment);
      console.log("後 Jの値", j);
      console.log("後　配列", numbers);
      numbers[j] = temp;
    }
    //incrementを更新
    if (increment / 2 != 0) increment = parseInt(increment / 2);
    else if (increment == 1) increment = 0;
    else increment = 1;
  }
}
//ここから開始
var h = [6, 3, 8, 4, 5, 1, 2, 9, 7, 0];
// for (var i = 0; i < h.length; i++) {
//   console.log(h[i]);
// }

//シェルソート
shellSort(h, h.length);
// for (var i = 0; i < h.length; i++) {
//   console.log(h[i]);
// }
