/* 
CON LIMITE DE CONVINACIONES
*/

let pregutasPosibles = ["rojo", "azul", "verde", "rosa", "marron", "morado","x"];
let limit = pregutasPosibles.length * 9999;
const numeroDePreguntasDelExamen = 3;

function combinations(words, k) {
  let result = [];

  function backtrack(start, combination) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    for (let i = start; i < words.length; i++) {
      let word = words[i];
      if (combination.includes(word)) continue;
      combination.push(word);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(0, []);
  if (result.length > limit) {
    console.log("Se ha sobrepasado el límite");
    return [];
  }
  return result;
}

console.log(combinations(words, numeroDePreguntasDelExamen));