// const unsortedArr = [1, 4, 2, 3, 8, 6, 7, 9];

// //datas 並べ替えをする配列
// function merge_sort(datas) {
//   console.log("検索対象のデータ", datas);

//   // 要素数
//   const COUNT = datas.length;
//   // 要素数が 1 以下の場合
//   if (COUNT <= 1) {
//     return;
//   }
//   // 中央の添字
//   const CENTER = Math.floor(COUNT / 2);
//   // 中央で分割した配列
//   let leftData = datas.slice(0, CENTER);
//   let rightData = datas.slice(CENTER);
//   // 各配列のマージソート
//   merge_sort(leftData);
//   merge_sort(rightData);
//   // 結合後の配列
//   const mergedData = [];
//   // 分割した配列の要素数
//   let count1 = leftData.length;
//   let count2 = rightData.length;

//   let i = 0;
//   let j = 0;

//   // 両方の配列に要素がある間
//   while (i < count1 && j < count2) {
//     //比較する値
//     let value1 = leftData[i];
//     let value2 = rightData[j];

//     if (value1 <= value2) {
//       // value1とvalue2が等しい OR value1 が小さい場合
//       mergedData.push(leftData[i]);
//       i++;
//     } else {
//       // value2 が小さい場合
//       mergedData.push(rightData[j]);
//       j++;
//     }
//   }
//   // leftDataに要素がある間
//   while (i < count1) {
//     mergedData.push(leftData[i]);
//     i++;
//   }
//   // rightDataに要素がある間
//   while (j < count2) {
//     mergedData.push(rightData[j]);
//     j++;
//   }
//   // 元の配列にソートした配列を当てはめる。
//   for (let i = 0; i < COUNT; i++) {
//     datas[i] = mergedData[i];
//   }
//   console.log("比較データの値", datas);
// // }

// merge_sort(unsortedArr);

// console.log(unsortedArr); //[1, 2, 3, 4, 5, 6, 7, 8]

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  console.log([...results, ...left, ...right]);
  return [...results, ...left, ...right];
}

mergeSort(unsortedArr);
