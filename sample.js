function flattenMultiArray(arr) {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(flattenMultiArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
}

const multiArray = [1, [2, [3, 4]], [5, 6, [7, 8, [9, 10]]]];
const flattenedArray = flattenMultiArray(multiArray);
console.log(flattenedArray);
