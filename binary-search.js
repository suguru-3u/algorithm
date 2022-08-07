// 二分探索法
// あらかじめ、昇順か降順に整列されているデータが対象
// 探索範囲を半分に絞りながら探索を進める

// １真ん中の要素を選ぶ処理
// ２真ん中のデータと比較データがあっている処理
// ３探索の範囲を半分に狭める処理
// 目的のデータがない場合の処理も書く

/**
 * @param Array arr ソート済みの探索対象配列
 * @param Int target 探索する値
 * @return Array 探索結果の添字 見つからなかった場合は-1を返す
 */
function binarySearchMethod(serachData, targetData) {
  let head = 0;
  let tail = serachData.length;
  let serachFlg = false;

  while (head <= tail) {
    let center = Math.round((head + tail) / 2);
    console.log(`比較数字,${serachData[center]}`);
    if (targetData === serachData[center]) {
      serachFlg = true;
      break;
    }
    if (targetData > serachData[center]) {
      head = center + 1;
    } else {
      tail = center - 1;
    }
  }
  searchDecision(serachFlg);
}

/**
 * @param Array arr ソート済みの探索対象配列
 * @param Int target 探索する値
 * @return Array 探索結果の添字 見つからなかった場合は-1を返す
 */
function searchDecision(flg) {
  if (flg) {
    console.log(`データが見つかりました`);
  } else {
    console.log(`データは見つかりませんでした`);
  }
}

const serachData = [
  11, 13, 15, 16, 17, 20, 21, 111, 123, 189, 201, 222, 989, 1000, 1001,
];
const targetData = 1000;

binarySearchMethod(serachData, targetData);
