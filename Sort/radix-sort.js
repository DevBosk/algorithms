function getDigit(number, idx) {
  return Math.floor(Math.abs(number) / Math.pow(10, idx)) % 10;
}

function countDigit(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const count = countDigit(arr[i]);
    if (max < count) max = count;
  }

  return max;
}

function radiSort(arr) {
  const max = maxDigit(arr);

  for (let k = 0; k < max; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

let arr = [1, 232, 7, 99, 12345, 5, 13, 55];
console.log(radiSort(arr));
