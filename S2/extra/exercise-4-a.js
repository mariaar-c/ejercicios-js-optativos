function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }

  return -1;
}

const flamenco = ["buleria", "sevillana", "fandango", "rumba"];

console.log(findArrayIndex(flamenco, "buleria"));
console.log(findArrayIndex(flamenco, "sevillana"));
console.log(findArrayIndex(flamenco, "fandango"));
console.log(findArrayIndex(flamenco, "rumba"));
