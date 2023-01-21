function merge02(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const mergedArr: Array<number> = [];
  let tempSize: number;

  if (arr1.length < arr2.length) {
    tempSize = arr1.length;
  } else {
    tempSize = arr2.length;
  }

  for (let i = 0; i < tempSize; i += 1) {
    mergedArr.push(arr1[i]);
    mergedArr.push(arr2[i]);
  }

  if (arr1.length < arr2.length) {
    for (let i = arr1.length; i < arr2.length; i += 1) {
      mergedArr.push(arr2[i]);
    }
  } else {
    for (let i = arr2.length; i < arr1.length; i += 1) {
      mergedArr.push(arr1[i]);
    }
  }

  return mergedArr;
}

export { merge02 };