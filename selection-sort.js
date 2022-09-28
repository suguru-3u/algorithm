/**
 * 選択ソートは、バブルソートの改良型と言えます。配列の最小値(最大値)を持つ要素を探し、それと先頭の要素と交換することで整列を行うアルゴリズムです。
 * 昇順でのソート処理の流れは以下のようになります。
 *
 * ■実装方法
 * リストの先頭要素を仮の最大値とする。
 * 2番目以降の要素を一つずつ見て、仮の最大値よりも大きければ、その番号を覚えておく。
 * 一通り処理が終わったあと、2番目以降に仮最小値以下のものがあれば、その要素と先頭の要素を交換する。
 * 以下、2番目以降にも同様の処理を繰り返す。
 *
 * ■特徴
 * 選択ソートは、バブルソートによく似ていますが、交換の手順が1回で済む分だけ、若干バブルソートよりも処理が速いという特徴があります。
 */

const array = [13, 1, 5, 2, 43, 30, 21, 55];

for (let i = 0; i < array.length; i++) {
  let arrayMin = array[i];
  let arryIndex = i;
  for (let j = i + 1; j < array.length; j++) {
    if (arrayMin > array[j]) {
      arrayMin = array[j];
      arryIndex = j;
    }
  }
  const arrayTmp = array[i];
  array[i] = arrayMin;
  array[arryIndex] = arrayTmp;
  console.log(array);
}

console.log(array);
