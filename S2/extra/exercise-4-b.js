function findArrayIndex(array, text) {
  return array.indexOf(text);
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const flamenco = ["fandango", "buleria", "sevillanas", "rumba"];
console.log(removeItem(flamenco, "fandango")); 
console.log(removeItem(flamenco, "buleria")); 
console.log(removeItem(flamenco, "sevillanas")); 


const andalucia = ["sevilla", "huelva", "cadiz", "granada"];
console.log(removeItem(andalucia, "sevilla")); 
console.log(removeItem(andalucia, "cadiz")); 
