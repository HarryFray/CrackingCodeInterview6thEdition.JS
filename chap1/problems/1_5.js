const oneAway = (stringA, stringB) => {
  let letterCount = {};
  let oddCount = 0;

  stringA.split('').forEach(letter => {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  });

  stringB.split('').forEach(letter => {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  });

  Object.values(letterCount).forEach(count => {
    if (count % 2 !== 0) {
      oddCount++;
    }
  });
  return oddCount <= 2;
};

// tests
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);

// look over more not actually working...
