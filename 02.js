function countLetterA(str) {
    const regex = /a/gi;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
  }
  
  const string = "amanha vai ser um otimo dia";  //entrada 
  const count = countLetterA(string);
  console.log(`A letra 'a' aparece ${count} vezes na string.`);
  