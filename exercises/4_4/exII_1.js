function verificaPalindrome (string) {
  let word = string.toLowerCase ();
  let wordRev = "";
  let result = false;

  for (let i = word.length - 1;i >= 0; i -= 1) {
    wordRev += word[i];
  }
  if (word === wordRev) {
    result = true;
  }
  return result;
}

console.log (verificaPalindrome("Girafarig"));

