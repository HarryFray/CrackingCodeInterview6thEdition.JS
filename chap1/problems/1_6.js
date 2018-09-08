var strComp = function(string) {
  let compressed = '';

  let currentCompare = string[0];
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < string.length + 1; i++) {
    let current = string[i];
    if (current === currentCompare) {
      count++;
    } else {
      compressed = compressed + currentCompare + count;
      currentCompare = current;
      maxCount = Math.max(count, maxCount);
      count = 1;
    }
  }

  return maxCount === 1 ? string : compressed;
};

console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');
