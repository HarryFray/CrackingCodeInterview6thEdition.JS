const palinPerm = string => {
  let cleanString = string.replace(/\s/g, '').toLowerCase();

  let noMatches = new Set();

  cleanString.split('').forEach(letter => {
    if (noMatches.has(letter)) {
      noMatches.delete(letter);
    } else {
      noMatches.add(letter);
    }
  });

  return noMatches.size <= 1;
};

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
