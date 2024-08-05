const INPUT_ARRAY = [1, 5, 3, 69, 8, 9, 10, 15, 0, 3];

function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  console.log("INPUT ARR: ", arr);
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

  console.log("COUNT", count);
  if (count === 0) {
    count++;
  } else {
    console.log("PreSorted ARR: ", arr);
    let element = arr.splice(0, 1)[0];
    arr.splice(count, 0, element);
    console.log("moved first element: ", arr);
  }

  const leftPart = arr.slice(0, count);
  const rightPart = arr.slice(count);

  console.log("leftpart", leftPart);
  console.log("rightpart", rightPart);

  return QuickSort(leftPart).concat(QuickSort(rightPart));
}

console.log("result: ", QuickSort(INPUT_ARRAY));
