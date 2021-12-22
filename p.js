function checkSafe(arr, row, col) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[row][i] == 1) {
        console.log("1")
      return false;
    }
    if (arr[i][col] == 1) {
        console.log("2")
      return false;
    }
  }
  let j = col;
  for (let i = row; i >= 0; i--) {
    if (arr[i][j] == 1) {
        console.log("3")
      return false;
    }
    j--;
  }
  j = col;
  for (let i = row; i >=0&&j<n; i--) {
    if (arr[i][j] == 1) {
        console.log("4")
      return false;
    }
    j++
  }
  return true;
}

let b = [
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
];
console.log(checkSafe(b, 3, 1))
