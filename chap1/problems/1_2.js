// linear space and linear time

// can get n log n time sorting both....
// stop imediatly discouning sort!!
// n log n can be pretty dang good!

const isPermutation = function(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  const letterCounts = {};

  for (let i = 0; i < stringA.length; i++) {
    let currentLetter = stringA[i];
    if (letterCounts[currentLetter]) {
      letterCounts[currentLetter]++;
    } else {
      letterCounts[currentLetter] = 1;
    }
  }

  for (let k = 0; k < stringA.length; k++) {
    let currentLetter = stringB[k];
    if (!letterCounts[currentLetter]) {
      return false;
    } else {
      letterCounts[currentLetter]++;
    }
  }

  let values = Object.values(letterCounts);

  for (let x = 0; x < values.length; x++) {
    if (values[x] % 2 !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isPermutation('knic', 'nick'));
