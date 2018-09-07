const allUnique = (string) => {
  let isUnique = true;
  for (let current = 0; current < string.length; current++) {
    for (let check = current + 1; check < string.length; check++) {
      if (string[current] === string[check]) {
        isUnique = false;
      }
    }
  }
  return isUnique;
}


console.log(allUnique('nichos fray'))