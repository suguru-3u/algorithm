// ハッシュ索法
// あらかじめ、関数を使いデータを格納する
// 格納するのに使った関数を使い、一発でデータを検索する

// １データを格納先の添字を計算するのにハッシュ関数を使用する。
// ２格納先の添字がバッティングすることを衝突という
// ３衝突が発生した際は、隣の空き要素にデータを格納する
// 4データの探索には、格納に使ったのと同じハッシュ関数を使用する
// 5探索データが存在しない場合の処理も忘れずに記載する

// ハッシュ関数でデータを格納する処理
function hashStoringFunction(arraryData, storingDta) {
  for (let i = 0; i < arraryData.length; i++) {
    const resultNumber = storingDta.length % arraryData[i];
    const resultSerach = checkArrayDataEmpty(storingDta, resultNumber, 0);
    storingDta[resultSerach] = arraryData[i];
  }
}

function checkArrayDataEmpty(storingDta, IndexNumber, targetNumber) {
  while (storingDta.length >= IndexNumber) {
    if (storingDta[IndexNumber] === targetNumber) return IndexNumber;
    IndexNumber++;
    if (storingDta.length < IndexNumber) IndexNumber = 0;
  }
}

// ハッシュを使用して格納したデータを検索する
function hashSerachFunciton(targetNumber, storingDta) {
  const resultNumber = storingDta.length % targetNumber;
  const resultSerach = checkArrayDataEmpty(
    storingDta,
    resultNumber,
    targetNumber
  );
  console.log(
    `探していたデータは${targetNumber}、データが${resultSerach}番目に見つかりました、見つかったデータ${storingDta[resultSerach]}`
  );
}

const arraryData = [11, 136, 155, 156, 17, 20, 2001, 111, 123];
const storingDta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
hashStoringFunction(arraryData, storingDta);

const targetNumber = 136;
hashSerachFunciton(targetNumber, storingDta);
