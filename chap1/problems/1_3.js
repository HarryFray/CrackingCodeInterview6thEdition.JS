const replaceWith = (string, replacement) => {
  return string
    .split('')
    .map(char => (char === ' ' ? replacement : char))
    .join('');
};

console.log(replaceWith('made a big mistake', '%20'));
