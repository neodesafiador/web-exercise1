function merge01(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const mergedArr: Array<number> = [];

  for (let i = 0; i < arr1.length; i += 1) {
    mergedArr.push(arr1[i]);
    mergedArr.push(arr2[i]);
  }

  return mergedArr;
}

export { merge01 };
