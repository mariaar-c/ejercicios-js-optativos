function rollDice(sides) {
  const result = Math.floor(Math.random() * sides) + 1;
  return result;
}

console.log(rollDice(6));
console.log(rollDice(20));
