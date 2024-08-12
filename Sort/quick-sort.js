const INPUT_ARRAY = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];

function MyQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      //swap
      let temp = arr[1];
      arr[1] = arr[i];
      arr[i] = temp;

      count++;
    }
  }

  if (count === 0) {
    count++;
  } else {
    let element = arr.splice(0, 1)[0];
    arr.splice(count, 0, element);
  }

  const leftPart = arr.slice(0, count);
  const rightPart = arr.slice(count);

  return MyQuickSort(leftPart).concat(MyQuickSort(rightPart));
}

console.time("my");
console.log("my result: ", MyQuickSort(INPUT_ARRAY));
console.timeEnd("my");

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.time("opt");
console.log("opt result: ", quickSort(INPUT_ARRAY));
console.timeEnd("opt");
