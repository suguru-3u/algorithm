// 線形探索法
// 先頭から対象のプログラムがないか確認する
// 単純でわかりやすいが、探索効率は良くない
// データ数が多いい場合の実装には向かない

const serachData = [1, 2, 3, 4, 5];
const targetData = 8;
const serachDataLength = serachData.length;

for (let i = 0; i < serachDataLength; i++) {
  if (targetData === serachData[i]) {
    console.log(`${i + 1}番目にありました！`);
    break;
  }
  if (i === serachDataLength - 1) {
    console.log("見つかりませんでした");
  }
}
