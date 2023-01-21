function checkWord(attempt: string, secret: string): string {
  let result = '';
  const attemptArr = attempt.split('');
  const secretArr = secret.split('');

  for (let i = 0; i < secretArr.length; i += 1) {
    if (secretArr[i] === attemptArr[i]) {
      // be in the correct position
      result += 'c';
    } else if (secret.includes(attemptArr[i])) {
      // be present in the secret word but this is the wrong position
      result += 'p';
    } else {
      // be absent in the the secret word
      result += 'a';
    }
  }

  return result;
}

export { checkWord };
