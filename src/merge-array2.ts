function merge02(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const mergedArr: Array<number> = [];
  let tempSize: number;
  let count = 0;

  if (arr1.length < arr2.length) {
    tempSize = arr2.length;
  } else {
    tempSize = arr1.length;
  }

  while (count !== tempSize) {
    if (count < arr1.length) {
      mergedArr.push(arr1[count]);
    }
    if (count < arr2.length) {
      mergedArr.push(arr2[count]);
    }
    count += 1;
  }

  return mergedArr;
}

export { merge02 };
