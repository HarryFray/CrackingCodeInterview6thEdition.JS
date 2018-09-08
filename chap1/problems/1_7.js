let rotateMatrix = function(matrix) {
  let rotatedMatrixCW = [];

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (rotatedMatrixCW[x]) {
        rotatedMatrixCW[x].push(matrix[y][x]);
      } else {
        rotatedMatrixCW[x] = [matrix[y][x]];
      }
    }
  }

  return rotatedMatrixCW;
};

/* TEST */
var testMatrix = [[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [1, 0, 0, 1]];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
